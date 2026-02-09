import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: path.resolve(__dirname, "../wwwroot/dist"),
    emptyOutDir: true,
    lib: {
        entry: path.resolve(__dirname, "src/main.js"),
        name: "App",
        fileName: () => "main.js",
    },
    rollupOptions: {
      output: {
        entryFileNames: "main.js",
        chunkFileNames: "[name].js",    
        assetFileNames: "[name].[ext]",  
      },
    },
    cssCodeSplit: true,
  },
});
