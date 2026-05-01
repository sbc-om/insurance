// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [
		react(),
		AstroPWA({
			registerType: 'autoUpdate',
			devOptions: {
				enabled: true,
			},
			includeAssets: ['logo.webp', 'pwa/apple-touch-icon.png', 'pwa/favicon-32.png'],
			experimental: {
				directoryAndTrailingSlashHandler: true,
			},
			manifest: {
				name: 'Insurance in Oman',
				short_name: 'Insurance Oman',
				description: 'A multilingual guide to insurance companies and products in Oman.',
				theme_color: '#1a365d',
				background_color: '#ffffff',
				display: 'standalone',
				start_url: '/',
				scope: '/',
				lang: 'en',
				icons: [
					{
						src: '/pwa/icon-192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: '/pwa/icon-512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: '/pwa/icon-512-maskable.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'maskable',
					},
				],
			},
		}),
	],
});
