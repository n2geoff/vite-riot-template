import { defineConfig } from "vite";
import riot from 'rollup-plugin-riot';

export default defineConfig({
    input: "app/**/*",
    output: "dist/bundle.js",
    plugins: [riot()],
    publicDir: 'app/public'
});
