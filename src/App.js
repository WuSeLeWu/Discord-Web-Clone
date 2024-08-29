import { Route, Routes, Navigate } from "react-router-dom";
import LoginDraft from "./components/Auth/loginDraft";
import MainLayout from "./components/Main/MainLayout";
import PrivateRoute from "./system_scripts/PrivateRoute";
import "./App.scss";

function App() {
  return (
    <>
      <Routes basename="/Discord-Web-Clone">
        <Route path="/" element={<LoginDraft />} />
        <Route
          path="/main"
          element={
            <PrivateRoute>
              <MainLayout />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;
