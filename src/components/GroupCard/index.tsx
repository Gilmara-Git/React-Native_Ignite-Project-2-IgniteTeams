import { Container, GroupName, Icon } from './styles';
import { TouchableOpacityProps } from 'react-native';

interface IGroupName extends TouchableOpacityProps{
    groupName: string;
}

export const GroupCard =({ groupName , ...rest }: IGroupName )=>{
    return (
        <Container
        {...rest}
        >
            <Icon/>
            <GroupName>
                { groupName }
            </GroupName>
        </Container>
    )
}