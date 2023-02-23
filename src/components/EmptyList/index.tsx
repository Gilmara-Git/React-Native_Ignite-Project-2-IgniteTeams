import { Container, Message, AddGroup, PlusButton } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface IEmptyList extends TouchableOpacityProps { 
    description: string;
}

export const EmptyList =({description, ...rest} :IEmptyList)=>{
    return (
        <Container
        >
            <Message>{description}</Message>
            <PlusButton
                {...rest}
            >
                <AddGroup />       
            </PlusButton>
                     
        </Container>
    )
}
