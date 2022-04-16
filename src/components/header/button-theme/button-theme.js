import { useState } from "react";
import { Button } from "./button";
import { Selector } from "./selector";
import { FaRegMoon } from "react-icons/fa";

const ButtonTheme = () => {
  const [ positionSelector, setPositionSelector] = useState(0);


  const hadleClick = () => {
    setPositionSelector(positionSelector === 0 ? 11 : 0);
  };

  return (
    <>
      <Button onClick={hadleClick}>
        <Selector positionSelector={positionSelector}>
          <FaRegMoon style={{ width: "65%", heigth: "65%", color: "#fff" }} />
        </Selector>
      </Button>
    </>
  );
};

export { ButtonTheme };
