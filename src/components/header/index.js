import { Container, Logo } from "./styles";
import { ButtonTheme } from "./button-theme";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";

const Header = () => {
  const { themeData } = useContext(ThemeContext);

  return (
    <Container themeData={themeData}>
      <Link to="/">
        <Logo />
      </Link>
      <ButtonTheme />
    </Container>
  );
};

export { Header };
