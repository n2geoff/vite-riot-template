import { defineConfig } from "vite";
import riot from 'rollup-plugin-riot';

export default defineConfig({
    plugins: [{...riot(), enforce: 'pre'}],
    publicDir: 'src/public'
});
