import { Container, Logo, BackButton, BackIcon } from './styles';
import logoImg from '@assets/logo.png';
import { CaretLeft } from 'phosphor-react-native';

export const Header =()=>{
    return (

        <Container>
            <BackButton>
                <BackIcon/>
            </BackButton>
            <Logo source={logoImg}/>
        </Container>
        
        )
}