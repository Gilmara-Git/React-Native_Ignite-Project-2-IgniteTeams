import styled from 'styled-components/native';
import { Plus } from 'phosphor-react-native';
import { TouchableOpacity } from 'react-native';

export const Container = styled.View`    
    flex:1;
    justify-content: center;
    align-items: center;
`


export const Message = styled.Text`
    font-size: ${({theme})=>theme.FONT_SIZE.SM}px;
    color: ${({theme})=>theme.COLORS.GRAY_300};
    font-family: ${({theme})=> theme.FONT_FAMILY.REGULAR}
`

export const PlusButton = styled(TouchableOpacity)`
    margin-top: 32px;

`

export const AddGroup = styled(Plus).attrs(({theme})=> ({
    size: 52,
    color: theme.COLORS.GRAY_300,

}))``;