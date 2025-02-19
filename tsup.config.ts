import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  outDir: 'dist',
  splitting: false,
  sourcemap: false,
  clean: true,
  dts: true,
  minify: true,
  format: ['esm'],
});
