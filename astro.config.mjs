// Main Astro configuration for the LILY bakery project.
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({ integrations: [tailwind({ applyBaseStyles: false })] });
