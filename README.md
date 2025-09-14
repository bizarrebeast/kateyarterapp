# Kate Yarter Portfolio

A professional artist portfolio website for Kate Yarter - Music Producer, Visual Artist, and CEO of Honey High Records.

## Overview

This is a minimalist, black and white portfolio website built with Next.js, featuring:
- Music portfolio with streaming integration
- Artwork gallery with category filtering
- Video showcase for performances and music videos
- Professional contact and booking system
- Press kit and media resources
- About section with artist bio

## Tech Stack

- **Framework**: Next.js 15.5
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Icons**: Lucide React
- **Font**: Inter

## Features

### Music Section
- Full music catalog display
- Embedded audio players
- Streaming platform links
- Album/single artwork
- Commercial licensing information

### Artwork Gallery
- Filterable categories (Canvas, Watercolor, Mixed Media)
- Lightbox viewing
- Purchase inquiry system
- Commission information
- Etsy shop integration

### Videos
- Music videos and performances
- Behind-the-scenes content
- YouTube/Vimeo integration
- Featured video showcase

### Contact System
- Multiple inquiry types
  - Music production
  - Art commissions
  - Live performances
  - Collaborations
- Budget and timeline fields
- Social media links

### Press Kit
- Downloadable media resources
- Artist bios (short and full)
- Quick facts
- Press quotes
- High-resolution photos

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/kateyarter-portfolio.git
cd kateyarter-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
kateyarter-portfolio/
├── app/
│   ├── page.tsx           # Home page
│   ├── music/             # Music portfolio
│   ├── artwork/           # Art gallery
│   │   ├── canvas/        # Canvas paintings
│   │   └── watercolor/    # Watercolor works
│   ├── videos/            # Video showcase
│   ├── about/             # Artist bio
│   ├── contact/           # Contact forms
│   └── press-kit/         # Media resources
├── components/
│   └── navigation/        # Navigation components
├── public/
│   ├── music/            # Audio files
│   ├── artwork/          # Artwork images
│   └── videos/           # Video thumbnails
└── styles/
    └── globals.css       # Global styles
```

## Content Management

### Adding Music
Update the tracks array in `/app/music/page.tsx` with new music information:
- Title, duration, description
- Audio file URL
- Streaming platform links
- Cover art

### Adding Artwork
Update the artworks array in `/app/artwork/page.tsx`:
- Title, category, medium
- Size, year, price
- Availability status
- Image URLs
- Etsy links

### Adding Videos
Update the videos array in `/app/videos/page.tsx`:
- Title, category, description
- Duration, date
- Video platform and URL
- Thumbnail images

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Import to Vercel
3. Deploy with default settings

### Environment Variables
Create a `.env.local` file for any API keys or configuration:
```
NEXT_PUBLIC_SITE_URL=https://kateyarter.com
```

## Future Enhancements

- Newsletter integration (Mailchimp/ConvertKit)
- Analytics integration
- E-commerce integration for direct sales
- Blog/news section
- Event calendar
- Music player with playlist functionality
- Dynamic content management system (CMS)

## License

© 2024 Kate Yarter. All rights reserved.

## Contact

For questions about this portfolio site:
- Email: contact@kateyarter.com
- Website: https://kateyarter.com
- Label: https://honeyhighrecords.com