import { Container } from './styles';
import { TextInputProps } from 'react-native';

type InputProps = TextInputProps;

export const Input =({...rest}:InputProps)=>{
    return (
        <Container {...rest} />
    )
}