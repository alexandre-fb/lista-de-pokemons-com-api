import { ThemeProvider } from "./contexts/theme-context";
import { GlobalStyle } from "./global-style";
import { AppRoutes } from "./pages/routes";

function App() {

  return (
    <>
      <ThemeProvider>
        <GlobalStyle  />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
