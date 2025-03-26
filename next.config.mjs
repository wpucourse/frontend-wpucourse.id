/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "sbmxiqtgmewstxseetwl.supabase.co"],
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        hostname: "sbmxiqtgmewstxseetwl.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
