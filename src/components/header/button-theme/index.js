import { useContext } from "react";
import { ThemeContext } from "../../../contexts/theme-context.js";
import { Button, Selector, Icon } from "./styles.js";

const ButtonTheme = () => {
  const { themeData, changeTheme } = useContext(ThemeContext);

  const handleClick = () => {
    changeTheme();
  };

  return (
    <>
      <Button id="button-theme" onClick={handleClick} themeData={themeData}>
        <Selector themeData={themeData}>
          <Icon>{themeData.icon}</Icon>
        </Selector>
      </Button>
    </>
  );
};

export { ButtonTheme };
