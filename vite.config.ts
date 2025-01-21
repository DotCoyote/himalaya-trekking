import type {UserConfig} from 'vite';
// @ts-expect-error Vite has no types
import eslintPlugin from 'vite-plugin-eslint';

export default {
  plugins: [eslintPlugin()],
} satisfies UserConfig;
