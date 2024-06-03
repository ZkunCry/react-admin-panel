import { Route, Routes } from "react-router-dom";
import { SignIn, Wrapper } from "./components";
import { Main } from "./pages";
import PrivateRouter from "./utils/routes/privateRouter";
import PublicRouter from "./utils/routes/publicRouter";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Wrapper />}>
        <Route element={<PublicRouter />}>
          <Route path="signin" element={<SignIn />} />
        </Route>

        <Route element={<PrivateRouter />}>
          <Route path="main" element={<Main />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
