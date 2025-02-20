/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "sbmxiqtgmewstxseetwl.supabase.co"],
    remotePatterns: [
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
        pathname: "/**",
      },
      {
        hostname: "sbmxiqtgmewstxseetwl.supabase.co",
        protocol: "https",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
