import { Container, Title, SubTitle } from "./styles";

interface IHighlightProps {
  title: string;
  subTitle: string;
};

export const Highlight = ({ title, subTitle }: IHighlightProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};
