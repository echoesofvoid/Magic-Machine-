# Next.js Configuration for Static Export

# Update next.config.js to ensure proper static export
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['firebasestorage.googleapis.com'],
    unoptimized: true,
  },
  // Ensure the app is exported as a static site for deployment
  output: 'export',
  // Disable server-side rendering for Firebase client-side operations
  trailingSlash: true,
};
