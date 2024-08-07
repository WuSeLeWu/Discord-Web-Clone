import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginDraft() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.sifre.value;

    if (email === "a123" && password === "a123") {
      navigate("/main");
    } else {
      setErrorMessage("Kullanıcı adı veya şifre yanlış");
    }
  };
  return (
    <>
      <div className="login-bg">
        <img
          className="d-none d-md-block"
          src="/images/dcTextLogo.png"
          alt="dcLogo"
          style={{
            position: "absolute",
            top: "48px",
            left: "48px",
            height: "24px",
            userSelect: "none",
          }}
        />

        <div className="loginFormWrapper d-flex justify-content-between position-relative">
          <div
            className="text-secondary position-absolute top-0 start-0 p-3 d-none"
            style={{ fontSize: "10px" }}
          >
            KA: a123, Ş:a123
          </div>
          <div className="login-left col-3">
            <div className="welcome text-center">
              <img
                className="d-block d-md-none mx-auto mb-3"
                height={36}
                src="/images/dcTextLogo.png"
                alt=""
              />
              <div className="caption mb-2">Tekrar hoş geldin!</div>
              <div className="desc">Seni tekrar gördüğümüze çok sevindik.</div>
            </div>
            <form onSubmit={handleLogin}>
              <div className="inputform d-flex flex-column">
                <label htmlFor="email">
                  E-POSTA VEYA TELEFON NUMARASI{" "}
                  <span className="text-danger text-capitalize fst-italic">
                    {errorMessage ? errorMessage : "*"}
                  </span>
                </label>
                <input
                  type="text"
                  required
                  autoComplete="off"
                  className="mb-3"
                  aria-label="E-posta veya Telefon Numarası"
                  name="email"
                />
                <label htmlFor="sifre">
                  ŞİFRE{" "}
                  <span className="text-danger text-capitalize fst-italic">
                    {errorMessage ? errorMessage : "*"}
                  </span>
                </label>
                <input
                  type="password"
                  required
                  autoComplete="off"
                  aria-label="Şifre"
                  name="sifre"
                />
                <span className="mt-2 mb-3 link"> Şifreni mi unuttun?</span>
                <button className="w-100">Giriş Yap</button>
                <div>
                  Bir hesaba mı ihtiyacın var?{" "}
                  <span className="link">Kaydol</span>
                </div>
              </div>
            </form>
          </div>
          <div className="login-right text-center col d-none d-md-flex flex column gap-2">
            <div className="qrcode mb-4">
              <img src="/images/dcQr.png" alt="qrCode" />
            </div>
            <div className="caption">QR Kodu ile giriş yap</div>
            <div className="desc">
              Anında giriş yapmak için bu kodu{" "}
              <strong>discord mobil uygulaması</strong> ile tara.
            </div>
            <div className="link">Veya geçiş anahtarıyla giriş yap</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginDraft;
