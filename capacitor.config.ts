import { CapacitorConfig } from '@capacitor/cli';
import { KeyboardResize } from '@capacitor/keyboard';

const config: CapacitorConfig = {
  appId: 'com.gabrielcontreras.spaceapp',
  appName: 'Caminata Espacial',
  webDir: 'www',
  plugins: {
    Keyboard: {
      resize: KeyboardResize.None,
      resizeOnFullScreen: false
    },
    SplashScreen: {
      launchShowDuration: 10000,
      launchAutoHide: false
    }
  },
  server: {
    androidScheme: 'https'
  }
};

export default config;
