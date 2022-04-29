import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";
import { Styles } from "./styles";

const GlobalStyle = () => {
  const { themeData } = useContext(ThemeContext);

  return <Styles themeData={themeData} />;
};

export { GlobalStyle };
