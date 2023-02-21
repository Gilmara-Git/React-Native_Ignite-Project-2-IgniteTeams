import 'styled-components/native';
import themes from '../themes';


declare module 'styled-components/native'{
    type Themetype  =  typeof themes;
    
    export interface DefaultTheme extends Themetype {}
}