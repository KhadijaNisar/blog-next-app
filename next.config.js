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
    GOOGLE_CLIENT_ID: "256014518823-pgdm1bna90vojtjghthh8otiu154ihid.apps.googleusercontent.com",
    GOOGLE_SECRET: "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",
    GITHUB_ID:"2b6204c204dd01509d7c",
    GITHUB_SECRET:"eb9cadb0228097a9caf5c77e020b8216effa0699",
  },

};

module.exports = nextConfig;
