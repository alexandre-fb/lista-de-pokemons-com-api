import { useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { Selector } from "./selector";
import { Button } from "./button"

const ThemeButton = () => {

    const [ translateXValue, setTranslateXValue ] = useState(3)

    const takeOnOfDarkTheme = () => {
        setTranslateXValue(translateXValue === 3 ? 14 : 3)
    }

  return (
    <>
      <Button onClick={ takeOnOfDarkTheme }>
        <Selector translate={translateXValue}>
          <FaRegMoon style={{ width: '65%', heigth: '65%' }} />
        </Selector>
      </Button>
    </>
  );
};





export { ThemeButton };
