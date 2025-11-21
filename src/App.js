import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./screens/Splash/Splash";
import Onboarding from "./screens/Onboarding/Onboarding";
import { useNavigate } from "react-router-dom";
import Home from "./screens/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

function AppRoutes() {
  const navigate = useNavigate();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Splash onFinish={() => navigate("/onboarding")} />
        }
      />

      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
