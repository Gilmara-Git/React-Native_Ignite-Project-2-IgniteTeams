
import { ThemeProvider } from 'styled-components/native';import themes from './src/themes';
import { StatusBar } from 'react-native';
import { Loading } from '@components/Loading';
import { Routes } from './src/routes';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';


export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (

    <ThemeProvider theme={themes}>
   
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? <Routes/> : <Loading />}
  
    </ThemeProvider>
  );
}
