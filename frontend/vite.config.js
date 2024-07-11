import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
<<<<<<< HEAD
      "/api": "http://localhost:8000",
    },
  },
});
=======
      '/api': 'http://localhost:8000',
    },
  },
})
>>>>>>> 1c325eb56a95b56aca6e16e74e09b141bce11010
