// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// });
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     rollupOptions: {
//       external: ["i18next"],
//     },
//   },
// });
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ["i18next"],
      output: {
        globals: {
          i18n: "i18next", // Specify the global variable name for "i18next"
        },
      },
    },
  },
});
