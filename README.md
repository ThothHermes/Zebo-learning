# Zebo-Learning Platform

A Next.js-based web application inspired by educational video creation platforms, providing tools for creating and sharing educational videos to enhance learning experiences.

## Features

- Modern, responsive UI
- Component-based architecture 
- SEO optimization
- Production-ready configuration

## Technology Stack

- **Framework**: Next.js 14.2.3
- **Language**: TypeScript
- **Styling**: Custom CSS
- **Production**: Optimized for deployment

## Getting Started

### Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Production Deployment

1. Build the application:
   ```bash
   npm run build
   ```
2. Start the production server:
   ```bash
   npm start
   ```

## Deployment Options

### Vercel (Recommended)

The easiest way to deploy the app is using [Vercel](https://vercel.com), the platform built by the creators of Next.js:

1. Push your code to a Git repository (GitHub, GitLab, BitBucket)
2. Import the project in Vercel
3. Vercel will automatically detect Next.js and configure the build settings

### Other Hosting Providers

You can deploy the app to any Node.js hosting provider:

1. Build the application: `npm run build`
2. Start the server: `npm start`

For static deployment options, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Project Structure

```
zebo-learning/
├── public/             # Static files
├── src/
│   ├── app/            # Next.js app router pages
│   ├── components/     # React components
│   └── styles/         # CSS styles
├── next.config.js      # Next.js configuration
└── package.json        # Project dependencies and scripts
```

## License

MIT 