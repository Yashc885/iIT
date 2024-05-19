// next.config.mjs
const nextConfig = {
  images: {
    domains: [
      "png.pngtree.com",
      "encrypted-tbn0.gstatic.com",
      "placeholder.pics",
      "images.unsplash.com",
      "localhost", 
    ],
  },
  async rewrites() {
    return [
      {
        source: "/api/faculty",
        destination: "http://localhost:8000/api/faculty",
      },
    ];
  },
};

export default nextConfig;
