import themes from './src/themes';
import { ThemeProvider } from 'styled-components/native';
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_700Bold } 
  from '@expo-google-fonts/roboto';
import { ActivityIndicator} from 'react-native';
import { Groups }  from '@screens/Groups';

export default function App() {

  const [fontsLoaded ] = useFonts({
    Roboto_400Regular, 
    Roboto_700Bold
  })
 
  return ( 
  <ThemeProvider theme={themes}>
  { !fontsLoaded ? <ActivityIndicator/> :
  
    <Groups/>
  }
  </ThemeProvider>
    )
}

