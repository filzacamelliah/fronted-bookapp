import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SinglePage from "./pages/singlePage";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}
