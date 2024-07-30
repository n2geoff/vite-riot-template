import { defineConfig } from "vite";
import riot from 'rollup-plugin-riot';

export default defineConfig({
    input: "src/components",
    output: "dist/bundle.js",
    plugins: [riot()],
    publicDir: 'src/public'
});
