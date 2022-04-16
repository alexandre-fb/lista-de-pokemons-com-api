import { HeaderContainer } from "./header-container";
import { Logo } from "../logo";
import { ButtonTheme } from "./button-theme/button-theme";

const Header = () => {
  return (
    <HeaderContainer>
        <Logo />
        <ButtonTheme />
    </HeaderContainer>
  );
};

export { Header };
