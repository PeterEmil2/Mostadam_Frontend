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
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans ExtraBold",
        provider: "local",
        src: "/fonts/SomarSans-ExtraBold.otf",
        weight: "800",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans Bold",
        provider: "local",
        src: "/fonts/SomarSans-Bold.otf",
        weight: "700",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans SemiBold",
        provider: "local",
        src: "/fonts/SomarSans-SemiBold.otf",
        weight: "600",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans Medium",
        provider: "local",
        src: "/fonts/SomarSans-Medium.otf",
        weight: "500",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans Regular",
        provider: "local",
        src: "/fonts/SomarSans-Regular.otf",
        weight: "400",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans Light",
        provider: "local",
        src: "/fonts/SomarSans-Light.otf",
        weight: "300",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans ExtraLight",
        provider: "local",
        src: "/fonts/SomarSans-ExtraLight.otf",
        weight: "200",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
      {
        name: "SomarSans Thin",
        provider: "local",
        src: "/fonts/SomarSans-Thin.otf",
        weight: "200",
        display: "swap",
        fallbacks: ["sans-serif"],
      },
    ],
  },
  app: {
    baseURL: "/Mostadam_Frontend/",
  },
});
