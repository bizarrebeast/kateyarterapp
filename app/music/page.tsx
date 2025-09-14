'use client';

import React, { useState, useRef } from 'react';
import { Music, Play, Pause, ExternalLink, Headphones, Download, Apple, Album } from 'lucide-react';

// Spotify icon as simple SVG component
const SpotifyIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.371-.721.49-1.101.24-3.02-1.843-6.841-2.25-11.281-1.23-.451.12-.93-.15-1.05-.601-.12-.45.15-.93.6-1.05 4.921-1.11 9.122-.63 12.531 1.44.361.15.481.72.301 1.2zm1.47-3.3c-.301.45-.931.631-1.381.301-3.451-2.11-8.701-2.731-12.781-1.491-.541.15-1.11-.15-1.26-.691-.15-.541.15-1.11.69-1.261 4.681-1.41 10.501-.721 14.431 1.741.45.271.631.901.301 1.401zm.15-3.45c-4.141-2.461-10.981-2.701-14.911-1.491-.631.18-1.32-.181-1.5-.811-.181-.631.18-1.321.81-1.501 4.561-1.38 12.151-1.11 16.941 1.71.571.361.751 1.11.391 1.681-.361.601-1.131.781-1.731.421z"/>
  </svg>
);

// YouTube Music icon
const YouTubeMusicIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm0 19.104c-3.924 0-7.104-3.18-7.104-7.104S8.076 4.896 12 4.896s7.104 3.18 7.104 7.104-3.18 7.104-7.104 7.104zm0-11.304c-2.316 0-4.2 1.884-4.2 4.2s1.884 4.2 4.2 4.2 4.2-1.884 4.2-4.2-1.884-4.2-4.2-4.2zm-1.2 6.852V9.348L14.4 12l-3.6 2.652z"/>
  </svg>
);

// Type for track data
interface Track {
  id: string;
  title: string;
  album?: string;
  year: string;
  description: string;
  coverArt?: string;
  audioUrl?: string;
  duration: string;
  links: {
    spotify?: string;
    apple?: string;
    youtube?: string;
    soundcloud?: string;
  };
  tags: string[];
  featured?: boolean;
}

// Placeholder tracks for Kate's music
const tracks: Track[] = [
  {
    id: '1',
    title: 'Ethereal Waves',
    album: 'Digital Dreams',
    year: '2024',
    description: 'Ambient electronic composition blending organic textures with digital synthesis',
    duration: '4:32',
    links: {},
    tags: ['Electronic', 'Ambient', 'Soundtrack'],
    featured: true,
  },
  {
    id: '2',
    title: 'Crystal Cavern',
    album: 'Game Soundtracks Vol. 1',
    year: '2024',
    description: 'Atmospheric game soundtrack featuring layered synths and orchestral elements',
    duration: '3:45',
    links: {},
    tags: ['Soundtrack', 'Orchestral', 'Gaming'],
  },
  {
    id: '3',
    title: 'Flowing Motion',
    album: 'Nature Series',
    year: '2023',
    description: 'Meditative piece inspired by natural water movements and organic rhythms',
    duration: '5:18',
    links: {},
    tags: ['Ambient', 'Nature', 'Meditation'],
  },
];

export default function MusicPage() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const audioRefs = useRef<{ [key: string]: HTMLAudioElement | null }>({});

  const filters = ['all', 'Electronic', 'Ambient', 'Soundtrack', 'Orchestral'];

  const filteredTracks = selectedFilter === 'all'
    ? tracks
    : tracks.filter(track => track.tags.includes(selectedFilter));

  const handlePlayPause = (trackId: string) => {
    if (playingTrack === trackId) {
      const audio = audioRefs.current[trackId];
      if (audio) {
        audio.pause();
        setPlayingTrack(null);
      }
    } else {
      // Pause any currently playing track
      if (playingTrack && audioRefs.current[playingTrack]) {
        audioRefs.current[playingTrack]?.pause();
      }

      // Play new track
      const audio = audioRefs.current[trackId];
      if (audio) {
        audio.play().catch(err => {
          console.error('Error playing audio:', err);
          setPlayingTrack(null);
        });
        setPlayingTrack(trackId);
      }
    }
  };

  const handleAudioEnd = (trackId: string) => {
    if (playingTrack === trackId) {
      setPlayingTrack(null);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white pt-36 pb-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">MUSIC</h1>
          <p className="text-lg text-light-muted max-w-3xl">
            Original compositions and productions spanning electronic, ambient, and soundtrack work.
            Music for games, films, and artistic projects.
          </p>
        </div>

        {/* Streaming Platforms */}
        <div className="mb-12 p-6 bg-dark-card border border-dark-border">
          <h2 className="text-xl font-semibold mb-4">Stream My Music</h2>
          <div className="flex flex-wrap gap-4">
            <a
              href="https://spotify.com/artist/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <SpotifyIcon />
              Spotify
            </a>
            <a
              href="https://music.apple.com/artist/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Apple className="w-5 h-5" />
              Apple Music
            </a>
            <a
              href="https://music.youtube.com/channel/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <YouTubeMusicIcon />
              YouTube Music
            </a>
            <a
              href="https://soundcloud.com/kateyarter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-white hover:bg-white hover:text-black transition-all duration-300"
            >
              <Music className="w-5 h-5" />
              SoundCloud
            </a>
          </div>
        </div>

        {/* Filter Tags */}
        <div className="mb-8 flex flex-wrap gap-3">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-4 py-2 border transition-all duration-300 ${
                selectedFilter === filter
                  ? 'bg-white text-black border-white'
                  : 'border-white text-white hover:bg-white hover:text-black'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Track */}
        {filteredTracks.find(t => t.featured) && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Featured Track</h2>
            <div className="bg-dark-card border border-dark-border p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="aspect-square bg-gradient-subtle flex items-center justify-center">
                  <div className="text-center text-muted">
                    <Album className="w-24 h-24 mx-auto mb-4 opacity-20" />
                    <p>Album Artwork</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">
                      {filteredTracks.find(t => t.featured)?.title}
                    </h3>
                    <p className="text-light-muted mb-4">
                      {filteredTracks.find(t => t.featured)?.description}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted mb-6">
                      <span>{filteredTracks.find(t => t.featured)?.album}</span>
                      <span>•</span>
                      <span>{filteredTracks.find(t => t.featured)?.year}</span>
                      <span>•</span>
                      <span>{filteredTracks.find(t => t.featured)?.duration}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => handlePlayPause(filteredTracks.find(t => t.featured)!.id)}
                    className="w-full px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium flex items-center justify-center gap-2"
                  >
                    {playingTrack === filteredTracks.find(t => t.featured)?.id ? (
                      <>
                        <Pause className="w-5 h-5" />
                        Pause
                      </>
                    ) : (
                      <>
                        <Play className="w-5 h-5" />
                        Play Track
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Track Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTracks.filter(t => !t.featured).map((track) => (
            <div
              key={track.id}
              className="bg-dark-card border border-dark-border hover:border-light-border transition-all duration-300"
            >
              {/* Album Art */}
              <div className="aspect-square bg-gradient-subtle relative group">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-muted">
                    <Headphones className="w-16 h-16 mx-auto mb-2 opacity-20" />
                    <p className="text-sm">{track.title}</p>
                  </div>
                </div>

                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handlePlayPause(track.id)}
                    className="p-4 bg-white bg-opacity-20 backdrop-blur-sm rounded-full hover:bg-opacity-30 transition-all"
                  >
                    {playingTrack === track.id ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white" fill="white" />
                    )}
                  </button>
                </div>

                {/* Playing indicator */}
                {playingTrack === track.id && (
                  <div className="absolute top-2 right-2 bg-white text-black text-xs px-2 py-1 font-medium">
                    NOW PLAYING
                  </div>
                )}

                {/* Audio Element (hidden) */}
                {track.audioUrl && (
                  <audio
                    ref={(el) => { audioRefs.current[track.id] = el; }}
                    src={track.audioUrl}
                    onEnded={() => handleAudioEnd(track.id)}
                    preload="none"
                  />
                )}
              </div>

              {/* Track Info */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{track.title}</h3>
                {track.album && (
                  <p className="text-sm text-muted mb-2">{track.album}</p>
                )}
                <p className="text-xs text-light-muted mb-3 line-clamp-2">
                  {track.description}
                </p>
                <div className="flex items-center justify-between text-xs text-muted">
                  <span>{track.duration}</span>
                  <span>{track.year}</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {track.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-dark-hover text-light-muted">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Licensing Section */}
        <div className="mt-20 bg-dark-panel border border-dark-border p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Music Licensing</h2>
          <p className="text-light-muted mb-8 max-w-2xl mx-auto">
            My music is available for commercial licensing in games, films, advertisements,
            and other media projects. Custom compositions and exclusive licenses available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-3 bg-white text-black hover:bg-transparent hover:text-white border border-white transition-all duration-300 font-medium"
            >
              Inquire About Licensing
            </a>
            <a
              href="/press-kit"
              className="px-8 py-3 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium"
            >
              Download Music Samples
            </a>
          </div>
        </div>

        {/* About the Music */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted">
            All music composed and produced by Kate Yarter • © {new Date().getFullYear()} Honey High Records
          </p>
        </div>
      </div>
    </div>
  );
}