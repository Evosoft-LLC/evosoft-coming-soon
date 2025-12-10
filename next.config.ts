import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Vercel auto-detects Next.js and optimizes automatically
  // No need for 'output: export' - Vercel handles SSR/SSG natively
  
  // Trailing slashes for cleaner URLs
  trailingSlash: true,
  
  // Image optimization (Vercel handles this automatically)
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  
  // Security headers
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}

export default nextConfig
