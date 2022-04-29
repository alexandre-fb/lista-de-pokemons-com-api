import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Detail } from "./detail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/pokemon/:name" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
