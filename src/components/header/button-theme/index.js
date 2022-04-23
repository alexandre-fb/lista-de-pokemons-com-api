import { useState } from "react";
import { Button, Selector, MoonIcon } from './styles.js'



const ButtonTheme = () => {
  
  const [ positionXSelector, setPositionXSelector] = useState('-20%');

  const hadleClick = () => {
    setPositionXSelector(positionXSelector === '-20%' ? '20%' : '-20%');
  };

  return (
    <>
      <Button onClick={hadleClick}>
        <Selector positionXSelector={positionXSelector}>
          <MoonIcon />
        </Selector>
      </Button>
    </>
  );
};

export { ButtonTheme };
