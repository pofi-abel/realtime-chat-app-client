import react from "@vitejs/plugin-react-swc";
import { defineConfig, loadEnv } from "vite";
import http from "https";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.SERVER_URI,
          changeOrigin: true,
          agent: new http.Agent(),
        },
      },
    },
  };
});
