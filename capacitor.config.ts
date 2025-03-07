import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.meuprojeto.app', // Deve ser um ID de pacote válido, não "App.tsx"
  appName: 'vite-react',
  webDir: 'dist',
  server: {
    url: "http://192.168.1.14:5174/", // Substitua pelo IP correto da sua máquina
    cleartext: true
  }
};

export default config;
