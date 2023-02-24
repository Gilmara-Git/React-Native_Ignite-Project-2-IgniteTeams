import { Container, Form } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { useTheme } from "styled-components/native";

export const Players = () => {
  const { COLORS } = useTheme();
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Group Name"
        subTitle="Add players and separate the teams"
      />
      <Form>
        <Input
          placeholder="Participant's name"
          placeholderTextColor={COLORS.GRAY_100}
          autoCorrect={false}
        />

        <ButtonIcon icon="add"/>
      </Form>
    </Container>
  );
};
