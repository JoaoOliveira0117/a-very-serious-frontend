import ThemeLoader from "./theme/themeLoader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <>
      <ThemeLoader />
      <BrowserRouter>
        <Routes>
          {routes.map(({ path, component: Component, isPrivate = false }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
