import tailwindcss from "@tailwindcss/vite";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["@/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "SomarSans Black",
        provider: "local",
        src: "/fonts/SomarSans-Black.otf",
        weight: "900",
        style: "black",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans Light",
        provider: "local",
        src: "/fonts/SomarSans-Light.otf",
        weight: "300",
        style: "light",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
    ],
  },
});
