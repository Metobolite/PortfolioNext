/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    env: {  NEXT_PUBLIC_G_KEY: process.env.NEXT_PUBLIC_G_KEY  }
  };
  
  export default nextConfig;