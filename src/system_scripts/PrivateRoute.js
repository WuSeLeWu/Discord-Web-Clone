import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import LoadingSpinner from "../components/IsLoading/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const user = JSON.parse(sessionStorage.getItem("user"));

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; // Yükleme sırasında spinner gösteriliyor
  }

  if (!user) {
    return <Navigate to="/" />; // Oturum açılmamışsa giriş sayfasına yönlendiriliyor
  }

  return children; // Eğer oturum açılmışsa, korumalı bileşen yükleniyor
};

export default PrivateRoute;
