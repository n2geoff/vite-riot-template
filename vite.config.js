import { defineConfig } from "vite";
import riot from 'rollup-plugin-riot';

export default defineConfig({
    plugins: [riot()],
    publicDir: 'src/public'
});
