import { Container, Message, AddGroup, PlusButton } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface IEmptyList extends TouchableOpacityProps { 
    description: string;
    onAdd: ()=> void;
}

export const EmptyList =({description, onAdd, ...rest} :IEmptyList)=>{
    return (
        <Container
        >
            <Message>{description}</Message>
            <PlusButton
                onPress={onAdd}
                {...rest}
            >
                <AddGroup />       
            </PlusButton>
                     
        </Container>
    )
}
