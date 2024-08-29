import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import friends from "../../friendsData";
import { OverlayTrigger, Popover } from "react-bootstrap";

function LoginDraft() {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();

    const username = event.target.username.value;
    const password = event.target.password.value;

    const user = friends().find(
      (friend) => friend.username === username && friend.password === password
    );

    if (user) {
      sessionStorage.setItem(
        "user",
        JSON.stringify({
          name: user.name,
          username: user.username,
          status: user.status,
          profilePicture: user.profilePicture,
          IsSee: user.IsSee,
          svgStatus: user.svgStatus,
        })
      );

      setTimeout(() => {
        navigate("/main");
        window.location.reload();
      }, 1000);
    } else {
      setErrorMessage("Kullanıcı adı veya şifre yanlış");
    }
  };

  return (
    <>
      <div className="login-bg">
        <img
          className="d-none d-md-block"
          src="images/dcTextLogo.png"
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
                src="images/dcTextLogo.png"
                alt=""
              />
              <div className="caption mb-2">Tekrar hoş geldin!</div>
              <div className="desc">Seni tekrar gördüğümüze çok sevindik.</div>
              <div className="desc d-flex align-items-center justify-content-center gap-2">
                For User Login : / Kullanıcı Girişi için :
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={
                    <Popover id="popover-basic" className="bg-black text-light">
                      <Popover.Header className="bg-black text-light" as="h3">
                        Login
                      </Popover.Header>
                      <Popover.Body>
                        <div className="bg-black text-light">
                          Nickname: <strong>wuselewu</strong> Password:
                          <strong>wuse1</strong>
                          <br />
                          <hr />
                          Diğer Kullanıcı girişleri için{" "}
                          <strong>friendData.js</strong>
                          <br />
                          <hr />
                          <strong>friendData.js</strong> for other user logins
                        </div>
                      </Popover.Body>
                    </Popover>
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-info-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2" />
                  </svg>
                </OverlayTrigger>
              </div>
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
                  aria-label="Kullanıcı Adınızı Giriniz"
                  name="username"
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
                  name="password"
                />
                <span className="mt-2 mb-3 link"> Şifreni mi unuttun? </span>
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
              <img src="images/dcQr.png" alt="qrCode" />
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
