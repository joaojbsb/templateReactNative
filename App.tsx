import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
//importando fontes
import {useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider} from 'styled-components/native';
import Theme  from './src/theme';

import { AuthProvider } from "./src/hooks/auth";

//importando telas
import { Signin } from './src/screens/Signin';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if (!fontsLoaded) {
    return null
  }
  SplashScreen.hideAsync();
  return (
    <ThemeProvider theme={Theme } >
      <StatusBar style='light' translucent backgroundColor='transparent' />
      <AuthProvider>
        <Signin />
      </AuthProvider> 
    </ThemeProvider>
  );
}

