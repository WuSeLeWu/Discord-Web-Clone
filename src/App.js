import { Route, Routes, Navigate } from "react-router-dom";
import LoginDraft from "./components/Auth/loginDraft";
import MainLayout from "./components/Main/MainLayout";
import "./App.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginDraft />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" />} />{" "}
      </Routes>
    </>
  );
}

export default App;
