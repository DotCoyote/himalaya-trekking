import { defineConfig } from 'vite';
// @ts-expect-error Vite has no types
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import fs from 'fs';

function getHtmlEntryFiles(srcDir: string) {
  const entry = {};
  const ignorePaths = ['node_modules', 'dist', '.git', '.idea'];

  function traverseDir(currentDir: string) {
    const files = fs.readdirSync(currentDir);

    files.forEach((file) => {
      const filePath = path.join(currentDir, file);
      const isDirectory = fs.statSync(filePath).isDirectory();

      if (isDirectory) {
        if (ignorePaths.some((ignorePath) => filePath.includes(ignorePath))) {
          return;
        }
        // If it's a directory, recursively traverse it
        traverseDir(filePath);
      } else if (path.extname(file) === '.html') {
        // If it's an HTML file, add it to the entry object
        const name = path.relative(srcDir, filePath).replace(/\..*$/, '');
        // @ts-expect-error Dynamic key
        entry[name] = filePath;
      }
    });
  }

  traverseDir(srcDir);

  return entry;
}

export default defineConfig({
  build: {
    rollupOptions: {
      input: getHtmlEntryFiles('./'),
    },
    outDir: './dist',
    emptyOutDir: true,
  },
  plugins: [eslintPlugin()],
});
