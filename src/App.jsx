import { Route, Routes } from "react-router-dom";
import { Wrapper } from "./components";
import { Dashboard, NotFound, Users, SignIn } from "./pages";
import PrivateRouter from "./utils/routes/privateRouter";
import PublicRouter from "./utils/routes/publicRouter";
function App() {
  return (
    <Routes>
      <Route element={<Wrapper />} path="/">
        <Route element={<PrivateRouter />}>
          <Route index path="dashboard" element={<Dashboard />} />
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
        </Route>
        <Route element={<PublicRouter />}>
          <Route path="signin" element={<SignIn />} />
        </Route>
      </Route>
      <Route element={<NotFound />} path="*" />
    </Routes>
  );
}

export default App;
