import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./screens/Splash/Splash";
import Onboarding from "./screens/Onboarding/Onboarding";
import { useNavigate } from "react-router-dom";

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
    </Routes>
  );
}

export default App;
