import { Container, GroupIcon, Content  } from './styles';
import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useTheme } from 'styled-components/native';


export const NewGroup =()=>{
    const { COLORS } = useTheme();
    return (
      
            <Container>
            <Header showBackButton/>
            <Content>
                <GroupIcon/>
                <Highlight title="New Group" subTitle="Create a group to add players"/> 
                <Input 
                    placeholder="Type your group name"
                    placeholderTextColor={COLORS.GRAY_300}
                
                />
                <Button 
                    buttonText="Create"
                    style={{marginTop: 20}}
                    />
            </Content>
            </Container>
      
    )
}