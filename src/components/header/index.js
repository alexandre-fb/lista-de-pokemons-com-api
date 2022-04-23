import { Container, Logo } from "./styles";
import { ButtonTheme } from "./button-theme";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Container>
      
        <Link to="/">
          <Logo></Logo>
        </Link>

      <ButtonTheme />
    </Container>
  );
};

export { Header };
