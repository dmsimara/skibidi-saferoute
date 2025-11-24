import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./screens/Splash/Splash";
import Onboarding from "./screens/Onboarding/Onboarding";
import { useNavigate } from "react-router-dom";
import Home from "./screens/Home/Home";
import Report from "./screens/Report/Report";
import Community from "./screens/Community/Community";
import Dashboard from "./screens/Dashboard/Dashboard";
import Settings from "./screens/Settings/Settings";

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
      <Route path="/report" element={<Report />} />
      <Route path="/community" element={<Community />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
