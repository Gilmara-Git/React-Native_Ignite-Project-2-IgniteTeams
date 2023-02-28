import { Container, Title, FilterStyleTypeProps } from './styles';
import { TouchableOpacityProps } from 'react-native';

type FilterProps = TouchableOpacityProps & FilterStyleTypeProps & {
    title: string;
}

export const Filter = ({ isActive = false , title,  ...rest}: FilterProps)=>{
    return (
        <Container
            isActive={isActive}
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Container>
    )
}