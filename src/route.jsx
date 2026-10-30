import { Route, Routes } from "react-router-dom";
import { App } from "./app.jsx";
import Teste from "./components/Teste.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/teste" element={<Teste />} />
    </Routes>
  );
}
