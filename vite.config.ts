import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import dotenv from 'dotenv';

dotenv.config(); 

const mode = process.env.NODE_ENV || "development";
process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: process.env.SERVER_URI,
      },
    },
  },
});
