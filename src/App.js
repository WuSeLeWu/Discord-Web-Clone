import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginDraft from './components/loginDraft';
import MainLayout from './components/MainLayout';
import './App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginDraft />} />
        <Route path="/main" element={<MainLayout />} />
        <Route path="*" element={<Navigate to="/" />} /> {/* Yönlendirme için bir yol ekleyin */}
      </Routes>
    </>
  );
}

export default App;
