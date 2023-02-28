import { TouchableOpacityProps } from 'react-native';
import { Container , ButtonIconTypeStyleProps, Icon} from './styles';
import { MaterialIcons } from '@expo/vector-icons';


type ButtonIconProps = TouchableOpacityProps &{
 type? :ButtonIconTypeStyleProps;
 icon: keyof typeof MaterialIcons.glyphMap;
}

export const ButtonIcon =({icon, type = 'PRIMARY', ...rest}: ButtonIconProps)=>{
    return (
        <Container           
            {...rest}
        >
            <Icon name={icon}
             type={type}/>
        </Container>
    )
}
