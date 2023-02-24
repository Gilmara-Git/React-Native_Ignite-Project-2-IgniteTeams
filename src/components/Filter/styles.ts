import styled, { css } from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

export type FilterStyleTypeProps = {
    isActive?:  boolean;
}

export const Container = styled(TouchableOpacity)<FilterStyleTypeProps>`
    width: 70px;
    height: 38px;

    border-radius: 4px;   
    margin-right: 12px;

    align-items: center;
    justify-content: center;

    ${({theme, isActive })=> isActive && css`
    border: 1px solid ${theme.COLORS.GREEN_700 }  
    
    `}

`;

export const Title  = styled.Text`
    ${({theme})=> css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.SM}px;
        color: ${theme.COLORS.WHITE}
    `}

    text-transform: uppercase;
`;