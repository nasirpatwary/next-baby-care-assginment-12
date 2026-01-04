
const hostnames = ["avatars.githubusercontent.com", "i.pinimg.com", "images.unsplash.com", "lh3.googleusercontent.com"];
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: hostnames.map((hostname) => ({
      protocol: 'https',
      hostname,
      pathname: '/**',
    })),
  },
};

export default nextConfig;
