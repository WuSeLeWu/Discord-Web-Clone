import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="spinner w-100 d-flex justify-content-center align-items-center">
      <div className="spinner-center-container gap-2 d-flex justify-content-center align-items-center flex-column w-25 text-white">
        <div className="spinner-image-wrapper">
          <img
            src="/images/discord-white.webp"
            className="w-100 h-100"
            alt="spinnerDcLogo"
          />
        </div>
        <h6>BİLİYOR MUYDUN?</h6>
        <p>
          Bu web sayfası discord uygulamasının klonudur ve
          <strong> WuSeLeWu</strong> tarafından yapılmıştır.
        </p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
