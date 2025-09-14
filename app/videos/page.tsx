'use client';

import { useState } from 'react';
import { Play, Music, Video, Calendar, ExternalLink } from 'lucide-react';

type VideoCategory = 'all' | 'music-videos' | 'performances' | 'behind-scenes' | 'tutorials';

interface VideoItem {
  id: string;
  title: string;
  category: VideoCategory;
  description: string;
  date: string;
  duration: string;
  thumbnailUrl: string;
  videoUrl: string;
  platform: 'youtube' | 'vimeo' | 'custom';
  featured?: boolean;
}

// Placeholder video data
const videos: VideoItem[] = [
  {
    id: '1',
    title: 'Crystal Cavern - Official Music Video',
    category: 'music-videos',
    description: 'Official music video for "Crystal Cavern" from the BizarreBeasts soundtrack',
    date: '2024-01',
    duration: '3:45',
    thumbnailUrl: '/videos/thumbnails/crystal-cavern.jpg',
    videoUrl: 'https://youtube.com/watch?v=example1',
    platform: 'youtube',
    featured: true,
  },
  {
    id: '2',
    title: 'Live at The Echo Room',
    category: 'performances',
    description: 'Full live performance featuring original compositions and electronic improvisation',
    date: '2023-11',
    duration: '45:00',
    thumbnailUrl: '/videos/thumbnails/echo-room.jpg',
    videoUrl: 'https://youtube.com/watch?v=example2',
    platform: 'youtube',
  },
  {
    id: '3',
    title: 'Studio Sessions: Creating Atmospheric Soundscapes',
    category: 'behind-scenes',
    description: 'Behind the scenes look at the creative process for game soundtrack production',
    date: '2023-09',
    duration: '12:30',
    thumbnailUrl: '/videos/thumbnails/studio-session.jpg',
    videoUrl: 'https://vimeo.com/example3',
    platform: 'vimeo',
  },
];

export default function VideosPage() {
  const [selectedCategory, setSelectedCategory] = useState<VideoCategory>('all');
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const categories: { value: VideoCategory; label: string }[] = [
    { value: 'all', label: 'All Videos' },
    { value: 'music-videos', label: 'Music Videos' },
    { value: 'performances', label: 'Live Performances' },
    { value: 'behind-scenes', label: 'Behind the Scenes' },
    { value: 'tutorials', label: 'Tutorials' },
  ];

  const filteredVideos = selectedCategory === 'all'
    ? videos
    : videos.filter(video => video.category === selectedCategory);

  const featuredVideo = videos.find(v => v.featured);

  const getEmbedUrl = (video: VideoItem) => {
    if (video.platform === 'youtube') {
      const videoId = video.videoUrl.split('v=')[1];
      return `https://www.youtube.com/embed/${videoId}`;
    } else if (video.platform === 'vimeo') {
      const videoId = video.videoUrl.split('/').pop();
      return `https://player.vimeo.com/video/${videoId}`;
    }
    return video.videoUrl;
  };

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">VIDEOS</h1>
          <p className="text-lg text-light-muted max-w-3xl">
            Music videos, live performances, studio sessions, and creative process documentation
          </p>
        </div>

        {/* Featured Video */}
        {featuredVideo && (
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">Featured</h2>
            <div className="relative aspect-video bg-dark-card border border-dark-border overflow-hidden">
              {selectedVideo?.id === featuredVideo.id ? (
                <iframe
                  src={getEmbedUrl(featuredVideo)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <>
                  <div className="absolute inset-0 bg-gradient-subtle flex items-center justify-center">
                    <p className="text-muted">Video Thumbnail Placeholder</p>
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <button
                      onClick={() => setSelectedVideo(featuredVideo)}
                      className="p-6 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all duration-300"
                    >
                      <Play className="w-12 h-12 text-white" fill="white" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-2xl font-bold mb-2">{featuredVideo.title}</h3>
                    <p className="text-light-muted">{featuredVideo.description}</p>
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-3">
            {categories.map(cat => (
              <button
                key={cat.value}
                onClick={() => setSelectedCategory(cat.value)}
                className={`px-6 py-2 border transition-all duration-300 ${
                  selectedCategory === cat.value
                    ? 'bg-white text-black border-white'
                    : 'border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredVideos.map(video => (
            <div
              key={video.id}
              className="group cursor-pointer"
              onClick={() => setSelectedVideo(video)}
            >
              <div className="relative overflow-hidden bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300">
                {/* Thumbnail */}
                <div className="relative aspect-video bg-gradient-subtle">
                  <div className="absolute inset-0 flex items-center justify-center text-muted">
                    <div className="text-center">
                      <Video className="w-12 h-12 mx-auto mb-2 opacity-50" />
                      <p className="text-sm">{video.title}</p>
                    </div>
                  </div>

                  {/* Play Overlay */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full">
                      <Play className="w-8 h-8 text-white" fill="white" />
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-2 py-1 text-xs">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold mb-1 line-clamp-1">{video.title}</h3>
                  <p className="text-sm text-light-muted line-clamp-2 mb-2">
                    {video.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(video.date).toLocaleDateString('en-US', {
                        month: 'short',
                        year: 'numeric'
                      })}
                    </span>
                    <span>{video.platform}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="bg-black max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="aspect-video">
                <iframe
                  src={getEmbedUrl(selectedVideo)}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">{selectedVideo.title}</h2>
                <p className="text-light-muted mb-4">{selectedVideo.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span>{selectedVideo.duration}</span>
                    <span>{new Date(selectedVideo.date).toLocaleDateString()}</span>
                  </div>
                  <button
                    onClick={() => setSelectedVideo(null)}
                    className="px-6 py-2 border border-white text-white hover:bg-white hover:text-black transition-all duration-300"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* YouTube Channel CTA */}
        <div className="mt-20 text-center py-12 border-t border-dark-border">
          <h2 className="text-3xl font-bold mb-4">More on YouTube</h2>
          <p className="text-light-muted mb-8 max-w-2xl mx-auto">
            Subscribe to my YouTube channel for the latest music videos, performances,
            and behind-the-scenes content.
          </p>
          <a
            href="https://youtube.com/@kateyarter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
          >
            <ExternalLink className="w-5 h-5" />
            Subscribe on YouTube
          </a>
        </div>
      </div>
    </div>
  );
}