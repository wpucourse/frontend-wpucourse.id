/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
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
