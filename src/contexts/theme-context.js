import { createContext, useState } from "react";
import { FaRegMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

export const themes = {
  light: {
    icon: <FaRegMoon />,
    positionXSelector: '-20%',
    colors: {
      blueToYellow: "var(--blue-logo)",
      yellowToBlue: "var(--yellow-logo)",
      blackToWhite: "#1C1C1C",
      whiteToBlack: "#fff",
    },
  },
  dark: {
    icon: <BsSunFill />,
    positionXSelector: '20%',
    colors: {
      blueToYellow: "var(--yellow-logo)",
      yellowToBlue: "var(--blue-logo)",
      blackToWhite: "#fff",
      whiteToBlack: "#1C1C1C",
    },
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
  const [themeData, setThemeData] = useState(themes.light);

  const changeTheme = () => {
    setThemeData(themeData === themes.dark ? themes.light : themes.dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        themeData,
        setThemeData,
        changeTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
