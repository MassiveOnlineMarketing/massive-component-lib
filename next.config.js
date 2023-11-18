/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'tailwindui.com',
                port: '',
            }
        ],
    },

        
    webpack(config) {


        config.module.rules.push({
            test: /\.svg$/,
            use: [{ loader: '@svgr/webpack' }],
        });


        return config;
    },
}

module.exports = nextConfig
