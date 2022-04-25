import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import { Container } from "./styles";

const PageContainer = (props) => {
  const { themeData } = useContext(ThemeContext);

  return <Container themeData={themeData}>
            {props.children}
         </Container>;
};

export { PageContainer };
