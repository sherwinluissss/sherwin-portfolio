/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so this can be hosted the same way as your current
  // GitHub Pages site (sherwinluissss.github.io). Remove this if you
  // deploy to Vercel/Netlify instead — those don't need it.
  output: 'export',
  images: {
    // Static export can't use Next's image optimization server.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sherwinluissss.github.io',
      },
    ],
  },
};

export default nextConfig;
