import styled,  {css}  from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
    height: 56px;
    width: 100%;
    background-color: ${({theme})=>theme.COLORS.GRAY_500};
    border-radius: 6px;
    flex-direction: row;
    align-items: center;
    margin-bottom: 16px;

`

export const PlayerIcon = styled(MaterialIcons).attrs(({theme})=>({
    color: theme.COLORS.GRAY_200,
    size: 24

}))`
    margin-left: 16px;
    margin-right: 4px;
`;


export const PlayerName =  styled.Text`
    ${({theme})=>css`
        color: ${theme.COLORS.GRAY_200};
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.REGULAR};
    
    `}
    
    flex: 1;
`;