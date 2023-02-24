import { Container , ButtonText, ButtonTypeStyleProps} from './styles';
import { TouchableOpacityProps } from 'react-native';


type ButtonProps = TouchableOpacityProps & {
    buttonText: string;
    type?: ButtonTypeStyleProps;
}

export const Button = ({type = "PRIMARY", buttonText, ...rest}: ButtonProps)=>{
    return (
        <Container
            type={type} 
           
            {...rest}    
            >
            <ButtonText>
                {buttonText}
            </ButtonText>
        </Container>
    )
}