/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    MONGODB_URL:
      "mongodb+srv://khadija:khadija@cluster0.evzyqa8.mongodb.net/blog",
    NEXTAUTH_SECRET:"khadija",
  },

};

module.exports = nextConfig;
