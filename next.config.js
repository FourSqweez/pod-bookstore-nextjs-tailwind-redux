/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['vos.line-scdn.net'],
	},
}


module.exports = nextConfig
