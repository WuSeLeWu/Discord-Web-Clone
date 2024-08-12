import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import friends from "../../../friendsData";
import { loginUser } from "../../../friendsData";

const MicOnIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill={color}
    className="bi bi-mic-fill"
    viewBox="0 0 16 16"
  >
    <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0z" />
    <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5" />
  </svg>
);

const MicOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    wwidth="22"
    height="22"
    fill="red"
    className="bi bi-mic-mute-fill"
    viewBox="0 0 16 16"
  >
    <path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879L5.158 2.037A3.001 3.001 0 0 1 11 3" />
    <path d="M9.486 10.607 5 6.12V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z" />
  </svg>
);

const HeadsetOnIcon = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill={color}
    className="bi bi-headphones"
    viewBox="0 0 16 16"
  >
    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
  </svg>
);

const HeadsetOffIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    fill="red"
    className="bi bi-headphones"
    viewBox="0 0 16 16"
  >
    <path d="M8 3a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a6 6 0 1 1 12 0v5a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1V8a5 5 0 0 0-5-5" />
  </svg>
);

const Sidebar = ({ onLiClick }) => {
  const [micOn, setMicOn] = useState(true);
  const [headsetOn, setHeadsetOn] = useState(true);
  const toggleMic = () => setMicOn((prevState) => !prevState);
  const toggleHeadset = () => setHeadsetOn((prevState) => !prevState);

  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/");
  };
  return (
    <>
      <aside id="content-sidebar" className="content-sidebar">
        <div className="search-wrapper">
          <input
            className="search-input"
            type="text"
            placeholder="Sohbet bul ya da başlat"
          />
        </div>
        <ul id="v-pills-tab" role="tablist">
          <li
            id="v-pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
            type="button"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            className="sidebar-btn active"
          >
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
          </li>
          <li
            id="nocontent1"
            data-bs-toggle="pill"
            data-bs-target="nocontent1"
            type="button"
            role="tab"
            aria-controls="nocontent1"
            aria-selected="true"
            className="sidebar-btn"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-rocket-takeoff-fill"
              viewBox="0 0 16 16"
            >
              <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.6 3.6 0 0 0-.108-.563 2 2 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2 2 0 0 0-.16-.045 4 4 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.55 2.55 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361s.437 1.732-.36 2.531Z" />
              <path d="M5.205 10.787a7.6 7.6 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925" />
            </svg>
            <span>Nitro</span>
          </li>
          <li
            id="nocontent2"
            data-bs-toggle="pill"
            data-bs-target="nocontent2"
            type="button"
            role="tab"
            aria-controls="nocontent2"
            aria-selected="true"
            className="sidebar-btn"
            disabled
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-shop-window"
              viewBox="0 0 16 16"
            >
              <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
            </svg>

            <span>Mağaza</span>
          </li>
          <h6 className="message-caption">
            <span>DİREKT MESAJLAR</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
            </svg>
          </h6>
          <li
            className="message-wrapper"
            id="v-pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-profile"
            type="button"
            role="tab"
            aria-controls="v-pills-profile"
            aria-selected="false"
            onClick={onLiClick}
          >
            <div className="profile">
              <div className="status-img-wrapper">
                <img src={`../images/grupImg.jpg`} alt="icon" />{" "}
              </div>
              <div className="">
                <div className="user-name">Sohbet Grubu</div>
                <div className="group-count">7 Üye</div>
              </div>
            </div>
            <div className="message-delete">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
              </svg>
            </div>
          </li>
          {friends()
            .filter((f) => f.IsSee === "sidebar")
            .map((f, i) => (
              <li disabled key={i} className="message-wrapper">
                <div className="profile">
                  <div className="status-img-wrapper">
                    <img src={`/images/${f.profilePicture}`} alt="icon" />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      fill={`${f.svgStatus.fill}`}
                      class={`${f.svgStatus.class} svgStatus`}
                      viewBox={`${f.svgStatus.viewBox}`}
                    >
                      <path
                        d={`${f.svgStatus.path} `}
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="user-name">{f.name}</div>
                </div>
                <div className="message-delete">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-x"
                    viewBox="0 0 16 16"
                  >
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                  </svg>
                </div>
              </li>
            ))}
        </ul>

        <div className="profile-info">
          <div class="dropup">
            <div
              className="d-flex gap-2 profile-left"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-bs-auto-close="outside"
            >
              <div className="status-img-wrapper">
                <img src={`/images/${loginUser.profilePicture}`} alt="me" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill={`${loginUser.svgStatus.fill}`}
                  class={`${loginUser.svgStatus.class} svgStatus`}
                  viewBox={`${loginUser.svgStatus.viewBox}`}
                >
                  <path
                    d={`${loginUser.svgStatus.path} `}
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </div>
              <div className="name-status">
                <strong> {loginUser.name}</strong>
                <span className="online">{loginUser.status} </span>
                <span className="hidden">#{loginUser.username}</span>
              </div>
            </div>
            <div>
              <div class="dropdown-menu overflow-hidden p-0 mb-2">
                <div className="position-relative ">
                  <div className="profile-header" style={{ height: "150px" }}>
                    <div className="edit-profile-icon ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        class="bi bi-pencil-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.5.5 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11z" />
                      </svg>
                    </div>
                    <div className="profile-photo-container">
                      <div className="photo-wrapper">
                        <img
                          src={`/images/${loginUser.profilePicture}`}
                          alt=""
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="22"
                          height="22"
                          fill={`${loginUser.svgStatus.fill}`}
                          class={`${loginUser.svgStatus.class} svgStatus`}
                          viewBox={`${loginUser.svgStatus.viewBox}`}
                        >
                          <path
                            d={`${loginUser.svgStatus.path} `}
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="profile-footer">
                    <div className="d-flex flex-column gap-1">
                      <div className="profile-name">
                        {loginUser.name}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="currentColor"
                            class="bi bi-clipboard-check-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M6.5 0A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0zm3 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1A2.5 2.5 0 0 1 9.5 5h-3A2.5 2.5 0 0 1 4 2.5zm6.854 7.354-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708" />
                          </svg>
                        </span>
                      </div>

                      <div className="profile-username">
                        {loginUser.username}
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            class="bi bi-hash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8.39 12.648a1 1 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1 1 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.51.51 0 0 0-.523-.516.54.54 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532s.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531s.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="profile-buttons-wrapper">
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-2 align-items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill={`${loginUser.svgStatus.fill}`}
                            class={`${loginUser.svgStatus.class}`}
                            viewBox="0 0 16 16"
                          >
                            <path d={loginUser.svgStatus.path} />
                          </svg>
                          {loginUser.status}
                        </div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-chevron-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                          />
                        </svg>{" "}
                      </div>
                      <hr className="my-3" />
                      <div className="d-flex gap-2  align-items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-emoji-smile-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5M4.285 9.567a.5.5 0 0 1 .683.183A3.5 3.5 0 0 0 8 11.5a3.5 3.5 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.5 4.5 0 0 1 8 12.5a4.5 4.5 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683M10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8" />
                        </svg>{" "}
                        Özel Durum Belirle :D
                      </div>
                    </div>
                    <div className="profile-buttons-wrapper">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-person-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path
                          fill-rule="evenodd"
                          d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                        />
                      </svg>
                      Hesap Değiştir
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="icons">
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="mic-toggle"
                className="d-none"
                checked={!micOn}
                onChange={toggleMic}
              />
              <label htmlFor="mic-toggle" style={{ cursor: "pointer" }}>
                {micOn ? (
                  <MicOnIcon color="var(--hover-text-color)" />
                ) : (
                  <MicOffIcon />
                )}
              </label>
            </div>
            <div className="d-flex align-items-center">
              <input
                type="checkbox"
                id="headset-toggle"
                className="d-none"
                checked={!headsetOn}
                onChange={toggleHeadset}
              />
              <label htmlFor="headset-toggle" style={{ cursor: "pointer" }}>
                {headsetOn ? (
                  <HeadsetOnIcon color="var(--hover-text-color)" />
                ) : (
                  <HeadsetOffIcon />
                )}
              </label>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-gear-fill"
              viewBox="0 0 16 16"
            >
              <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="currentColor"
              className="bi bi-box-arrow-right"
              viewBox="0 0 16 16"
              onClick={handleLogout}
            >
              <path
                fillRule="evenodd"
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
              />
              <path
                fillRule="evenodd"
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
              />
            </svg>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
