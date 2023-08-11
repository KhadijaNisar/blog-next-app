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
    GITHUB_SECRET:"a982995a9c1fc1a1562a0f9723f40e829e22f27a",
  },

};

module.exports = nextConfig;
