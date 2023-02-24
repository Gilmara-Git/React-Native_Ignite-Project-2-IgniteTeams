import { Loading } from '@components/Loading';
import { Groups } from '@screens/Groups';
import { NewGroup } from '@screens/NewGroup';
import  { Players } from '@screens/Players';
import { StatusBar } from 'react-native';


import themes from './src/themes';
import { ThemeProvider } from 'styled-components/native';
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
      {fontsLoaded ? <Players/> : <Loading />}
    </ThemeProvider>
  );
}
