import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { viteExternals as coreViteExternals } from '@sienar/react-utils';
import { viteExternals as uiViteExternals } from './src/externals.ts';

const external = [
	...coreViteExternals,
	...uiViteExternals
];

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		lib: {
			entry: {
				'sienar-react-ui-mui': './src/index.ts'
			},
			formats: [ 'es' ]
		},
		rollupOptions: { external }
	},
	plugins: [
		react(),
		dts({
			rollupTypes: true,
			tsconfigPath: './tsconfig.app.json'
		})
	],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src')
		}
	}
});
