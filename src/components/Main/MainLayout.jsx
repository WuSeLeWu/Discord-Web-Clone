import React, { useState } from "react";
import "../Main/main.scss";
import Sidebar from "./Sidebar/Sidebar";
import Chat from "./Chat/Chat";
import friends from "../../friendsData";

const MainLayout = () => {
  const [activeServer, setActiveServer] = useState(0);
  const [inputValue, setInputValue] = useState("");

  function TruncateText(text) {
    const processedText = text.replace(/\s+/g, "").slice(0, 5);
    return processedText;
  }

  const handleNavItemClick = (index) => {
    setActiveServer(index);
  };
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <main>
      <div className="main-layout-wrapper d-flex h-100">
        <aside id="layout-sidebar" className="d-flex flex-column ">
          <div
            className={`nav-item mx-auto ${activeServer === 0 ? "active" : ""}`}
            onClick={() => handleNavItemClick(0)}
          >
            <span></span>
            <div className="nav-item-wrapper ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="21"
                fill="currentColor"
                className="bi bi-discord"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </div>
          </div>
          <hr className="border-3 m-1 mx-3 " />
          <div
            className={`nav-item mx-auto ${activeServer === 1 ? "active" : ""}`}
            onClick={() => handleNavItemClick(1)}
          >
            <span></span>
            <div className="nav-item-wrapper include-text d-flex align-items-center">
              <div className=" text-nowrap p-2 mx-auto">
                {TruncateText("AYılım")}
              </div>
            </div>
          </div>
          <div
            className={`nav-item mx-auto ${activeServer === 2 ? "active" : ""}`}
            onClick={() => handleNavItemClick(2)}
          >
            <span></span>
            <div className="nav-item-wrapper ">
              <img src="/images/indir.jpg" alt="cat" />
            </div>
          </div>
          <div
            className={`nav-item mx-auto ${activeServer === 3 ? "active" : ""}`}
            onClick={() => handleNavItemClick(3)}
          >
            <span></span>
            <div className="nav-item-wrapper include-text d-flex align-items-center">
              <div className="text-nowrap p-2 mx-auto">
                {TruncateText("Random")}
              </div>
            </div>
          </div>
          <div
            className={`nav-item mx-auto ${activeServer === 4 ? "active" : ""}`}
            onClick={() => handleNavItemClick(4)}
          >
            <span></span>
            <div className="nav-item-wrapper ">
              <img src="/images/lionpng.png" alt="lion" />
            </div>
          </div>
          <div
            className={`nav-item mx-auto ${activeServer === 5 ? "active" : ""}`}
            onClick={() => handleNavItemClick(5)}
          >
            <span></span>
            <div className="nav-item-wrapper ">
              <img src="/images/StrongArmy.png" alt="sarmy" />
            </div>
          </div>
          <div className="nav-item mx-auto">
            <span></span>
            <div className="nav-item-wrapper progress">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-plus-lg"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"
                />
              </svg>
            </div>
          </div>
          <div className="nav-item mx-auto">
            <span></span>
            <div className="nav-item-wrapper progress">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-browser-safari"
                viewBox="0 0 16 16"
              >
                <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.25-14.75v1.5a.25.25 0 0 1-.5 0v-1.5a.25.25 0 0 1 .5 0m0 12v1.5a.25.25 0 1 1-.5 0v-1.5a.25.25 0 1 1 .5 0M4.5 1.938a.25.25 0 0 1 .342.091l.75 1.3a.25.25 0 0 1-.434.25l-.75-1.3a.25.25 0 0 1 .092-.341m6 10.392a.25.25 0 0 1 .341.092l.75 1.299a.25.25 0 1 1-.432.25l-.75-1.3a.25.25 0 0 1 .091-.34ZM2.28 4.408l1.298.75a.25.25 0 0 1-.25.434l-1.299-.75a.25.25 0 0 1 .25-.434Zm10.392 6 1.299.75a.25.25 0 1 1-.25.434l-1.3-.75a.25.25 0 0 1 .25-.434ZM1 8a.25.25 0 0 1 .25-.25h1.5a.25.25 0 0 1 0 .5h-1.5A.25.25 0 0 1 1 8m12 0a.25.25 0 0 1 .25-.25h1.5a.25.25 0 1 1 0 .5h-1.5A.25.25 0 0 1 13 8M2.03 11.159l1.298-.75a.25.25 0 0 1 .25.432l-1.299.75a.25.25 0 0 1-.25-.432Zm10.392-6 1.299-.75a.25.25 0 1 1 .25.433l-1.3.75a.25.25 0 0 1-.25-.434ZM4.5 14.061a.25.25 0 0 1-.092-.341l.75-1.3a.25.25 0 0 1 .434.25l-.75 1.3a.25.25 0 0 1-.342.091m6-10.392a.25.25 0 0 1-.091-.342l.75-1.299a.25.25 0 1 1 .432.25l-.75 1.3a.25.25 0 0 1-.341.09ZM6.494 1.415l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M9.86 13.972l.13.483a.25.25 0 1 1-.483.13l-.13-.483a.25.25 0 0 1 .483-.13M3.05 3.05a.25.25 0 0 1 .354 0l.353.354a.25.25 0 0 1-.353.353l-.354-.353a.25.25 0 0 1 0-.354m9.193 9.193a.25.25 0 0 1 .353 0l.354.353a.25.25 0 1 1-.354.354l-.353-.354a.25.25 0 0 1 0-.353M1.545 6.01l.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.482Zm12.557 3.365.483.13a.25.25 0 1 1-.13.483l-.483-.13a.25.25 0 1 1 .13-.483m-12.863.436a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177m12.557-3.365a.25.25 0 0 1 .176-.306l.483-.13a.25.25 0 1 1 .13.483l-.483.13a.25.25 0 0 1-.306-.177M3.045 12.944a.3.3 0 0 1-.029-.376l3.898-5.592a.3.3 0 0 1 .062-.062l5.602-3.884a.278.278 0 0 1 .392.392L9.086 9.024a.3.3 0 0 1-.062.062l-5.592 3.898a.3.3 0 0 1-.382-.034zm3.143 1.817a.25.25 0 0 1-.176-.306l.129-.483a.25.25 0 0 1 .483.13l-.13.483a.25.25 0 0 1-.306.176M9.553 2.204a.25.25 0 0 1-.177-.306l.13-.483a.25.25 0 1 1 .483.13l-.13.483a.25.25 0 0 1-.306.176" />
              </svg>
            </div>
          </div>
          <hr className="border-3 mx-3" />
          <div className="nav-item mx-auto">
            <span></span>
            <div className="nav-item-wrapper progress">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-download"
                viewBox="0 0 16 16"
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708z" />
              </svg>
            </div>
          </div>
        </aside>
        <div id="content-wrapper">
          <Sidebar />
          <div className="tab-content w-100" id="v-pills-tabContent">
            <div
              className="tab-pane fade show  active"
              id="v-pills-home"
              role="tabpanel"
              aria-labelledby="v-pills-home-tab"
              tabIndex="0"
            >
              <div className="main-content-wrapper">
                <nav>
                  <div className="left-items-wrapper">
                    <div className="nav-caption">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        fill="currentColor"
                        className="bi bi-person-fill-add"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path d="M2 13c0 1 1 1 1 1h5.256A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1 1.544-3.393Q8.844 9.002 8 9c-5 0-6 3-6 4" />
                      </svg>
                      <span>Arkadaşlar</span>
                    </div>
                    <hr></hr>
                    <ul
                      className="nav nav-pills "
                      id="pills-tab"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link top-nav-item active"
                          id="pills-home-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-home"
                          type="button"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          Çevrimiçi
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link top-nav-item"
                          id="pills-profile-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-profile"
                          type="button"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                        >
                          Tümü
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link top-nav-item"
                          id="pills-contact-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-contact"
                          type="button"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                        >
                          Bekleyen
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link top-nav-item"
                          id="pills-disabled-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-disabled"
                          type="button"
                          role="tab"
                          aria-controls="pills-disabled"
                          aria-selected="false"
                        >
                          Engellenen
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link  friends-add"
                          id="friends-add-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#friends-add"
                          type="button"
                          role="tab"
                          aria-controls="friends-add"
                          aria-selected="false"
                        >
                          Arkadaş Ekle
                        </button>
                      </li>
                    </ul>
                  </div>
                  <div className="right-items-wrapper">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-chat-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                    </svg>
                    <hr />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-inbox-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-question-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.496 6.033h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286a.237.237 0 0 0 .241.247m2.325 6.443c.61 0 1.029-.394 1.029-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94 0 .533.425.927 1.01.927z" />
                    </svg>
                  </div>
                </nav>
                <div className="content">
                  <section className="left-section text-white">
                    <div className="tab-content" id="pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="pills-home"
                        role="tabpanel"
                        aria-labelledby="pills-home-tab"
                        tabIndex="0"
                      >
                        <div className="tab-pane-wrapper">
                          <img src="/images/cevrimici.svg" alt="cevrimici" />
                          <p>Etrafta Wumpus'la oynayacak kimse yok.</p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-profile"
                        role="tabpanel"
                        aria-labelledby="pills-profile-tab"
                        tabIndex="0"
                      >
                        <div className="tab-pane-wrapper justify-content-start gap-3">
                          <div className="search-all">
                            <input
                              className="search-input"
                              type="text"
                              placeholder="Ara"
                            />
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              className="bi bi-search"
                              viewBox="0 0 16 16"
                            >
                              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                          </div>
                          <div className="all-friends">Tüm Arkadaşlar - 1</div>
                          <div className="friends-list">
                            {friends()
                              .filter((friend) => friend.IsSee === "all")
                              .map((friend, index) => (
                                <div
                                  key={index}
                                  className={`friends-item ${
                                    friend.status === "cevrimdisi"
                                      ? "order-last"
                                      : ""
                                  }`}
                                >
                                  <div className="left-f">
                                    <div className="status-img-wrapper">
                                      <img
                                        src={`/images/${friend.profilePicture}`}
                                        alt="user"
                                      />
                                      <img
                                        src={`/images/${friend.status}.png`}
                                        alt="status"
                                        className="status"
                                      />
                                    </div>
                                    <div className="text-wrapper">
                                      <div>
                                        {friend.name}
                                        <span> {friend.username}</span>
                                      </div>
                                      <strong>{friend.status}</strong>
                                    </div>
                                  </div>
                                  <div className="right-f">
                                    <div className="svg-item">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        className="bi bi-chat-fill"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
                                      </svg>
                                    </div>
                                    <div className="svg-item">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        fill="currentColor"
                                        className="bi bi-three-dots-vertical"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
                                      </svg>
                                    </div>
                                  </div>
                                </div>
                              ))}
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-contact"
                        role="tabpanel"
                        aria-labelledby="pills-contact-tab"
                        tabIndex="0"
                      >
                        <div className="tab-pane-wrapper">
                          <img src="/images/bekleyen.svg" alt="cevrimici" />
                          <p>
                            Bekleyen arkadaşlık isteği yok. Şimdilik işte
                            Wumpus.
                          </p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-disabled"
                        role="tabpanel"
                        aria-labelledby="pills-disabled-tab"
                        tabIndex="0"
                      >
                        <div className="tab-pane-wrapper">
                          <img src="/images/engellenen.svg" alt="cevrimici" />
                          <p>Wumpus'un engelini kaldıramazsın.</p>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="friends-add"
                        role="tabpanel"
                        aria-labelledby="friends-add-tab"
                        tabIndex="0"
                      >
                        <div className="tab-pane-wrapper justify-content-start">
                          <h6 className="add-friends-cap">ARKADAŞ EKLE</h6>
                          <div className="add-firends-desc">
                            Arkadaşlarını Discord kullanıcı adı ile
                            ekleyebilirsin.
                          </div>
                          <div className="search-friends-input-wrapper">
                            <input
                              type="text"
                              placeholder="Arkadaşlarını Discord Kullanıcı adı ile ekleyebilirsin."
                              value={inputValue}
                              onChange={handleInputChange}
                            />
                            <button
                              className={
                                inputValue ? "button-hover-enabled" : ""
                              }
                              style={{
                                opacity: inputValue ? 1 : 0.5,
                                cursor: inputValue ? "pointer" : "no-drop",
                              }}
                              disabled={!inputValue}
                            >
                              Arkadaşlık İsteği Gönder
                            </button>
                          </div>
                          <img src="/images/arkEkle.svg" alt="cevrimici" />
                          <p>Wumpus arkadaş bekliyor. Mecbur değilsin ama!</p>
                        </div>
                      </div>
                    </div>
                  </section>
                  <section className="right-section d-sm-none d-md-flex">
                    <h2>Şimdi Aktif</h2>
                    <h6>Burası şimdilik sessiz...</h6>
                    <p>
                      Bir arkadaşın, bir oyun oynamak veya sesli sohbete
                      katılmak gibi bir etkinliğe başladığında burada
                      göstereceğiz!
                    </p>
                  </section>
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabIndex="0"
            >
              <Chat />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
