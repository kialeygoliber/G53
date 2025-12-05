import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import Reports from "./pages/reports";
import Summary from "./pages/summary";
import ProtectedRoute from "./components/protectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        <Route path="/reports" element={<ProtectedRoute><Reports/></ProtectedRoute>} />
        <Route path="/summary" element={<ProtectedRoute><Summary/></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
    );
}

export default App;
