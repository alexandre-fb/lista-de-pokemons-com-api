import { useState } from "react";
import { Button } from "./button";
import { Selector } from "./selector";
import { FaRegMoon } from "react-icons/fa";

const ButtonTheme = () => {
  
  const [ positionXSelector, setPositionXSelector] = useState('-20%');

  const hadleClick = () => {
    setPositionXSelector(positionXSelector === '-20%' ? '20%' : '-20%');
  };

  return (
    <>
      <Button onClick={hadleClick}>
        <Selector positionXSelector={positionXSelector}>
          <FaRegMoon style={{ width: "65%", heigth: "65%", color: "#fff" }} />
        </Selector>
      </Button>
    </>
  );
};

export { ButtonTheme };
