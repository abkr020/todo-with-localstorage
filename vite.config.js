import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), ''); // Load env vars.  The '' means load all variables from the .env file.

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env': env, // This line is crucial
      // 'import.meta.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL), // Example (repeat for other vars)
      // 'import.meta.env.VITE_APP_NAME': JSON.stringify(env.VITE_APP_NAME),
      // 'import.meta.env.REACT_APP_SOME_VAR': JSON.stringify(env.REACT_APP_SOME_VAR),
    },
  };
});