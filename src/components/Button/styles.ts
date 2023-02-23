import styled from 'styled-components/native';
    import { TouchableOpacity } from 'react-native';

export type  ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY';
 
type ButtonProps  = {
    type: ButtonTypeStyleProps;
 }


//  min-height and max-height below is to prevent the button height to be affect by a context that has flex: 1
export const Container =  styled(TouchableOpacity)<ButtonProps>`    
    flex:1;
    min-height: 56px;
    max-height: 56px;

    background-color: ${({theme, type})=> type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
    justify-content: center;
    align-items: center;
    border-radius: 6px;

`

export const ButtonText = styled.Text`
    color: ${({theme})=>theme.COLORS.WHITE};
    font-size: ${({theme})=> theme.FONT_SIZE.MD}px;
    font-family: ${({theme})=>theme.FONT_FAMILY.BOLD}
`