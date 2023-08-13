import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Motytskyi-Front_End_Pro_04-04-2023/lessons/hw32/Contacts/dist/",
});
