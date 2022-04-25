import { Container } from "./styles.js";
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme-context'

const Footer = () => {

  const { themeData } = useContext(ThemeContext)

  return (
    <Container themeData={ themeData }>
      <p>
        Desenvolvido por <a href="https://www.linkedin.com/in/alexandre-fb/" rel="noreferrer" target="_blank">👉 Alexandre Bisognin </a>
      </p>
    </Container>
  );
};

export { Footer };
