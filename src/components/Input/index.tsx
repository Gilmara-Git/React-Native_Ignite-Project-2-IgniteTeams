import { Container } from './styles';
import { TextInputProps, TextInput  } from 'react-native';
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {
    inputRef? : React.RefObject<TextInput>
};

export const Input =({ inputRef, ...rest}:InputProps)=>{
    const { COLORS } = useTheme();
    return (
        <Container
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300}
        {...rest} />
    )
}