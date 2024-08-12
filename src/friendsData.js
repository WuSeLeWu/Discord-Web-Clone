export const loginUser = JSON.parse(sessionStorage.getItem("user"));

const getSvgStatus = (status) => {
  switch (status) {
    case "Boşta":
      return {
        path: "M10 0.278a.77.77 0 0 0-.08.858 7.2 7.2 0 0 1 .878 3.46c0 4.021-3.278 7.277-7.318 7.277q-.792-.001-1.533-.16a.79.79 0 0 0-.81.316.73.73 0 0 0 .031.893A8.35 8.35 0 0 0 7.656 16C12.266 16 16 12.286 16 7.71c0-3.444-2.114-6.398-5.124-7.65A.75.75 0 0 0 10 0.278z",
        class: "bi bi-moon-fill",
        viewBox: "0 0 16 16",
        width: "22",
        fill: "#f0b232",
        height: "22",
      };
    case "Çevrim içi":
      return {
        path: "M8 0 a8 8 0 1 0 0 16 a8 8 0 1 0 0-16",
        class: "bi bi-circle-fill",
        viewBox: "0 0 16 16",
        fill: "#43A863",
        width: "22",
        height: "22",
      };
    case "Rahatsız Etmeyin":
      return {
        path: "M50 5 a45 45 0 1 0 0 90 a45 45 0 1 0 0-90 M20 50 h60",
        class: "",
        viewBox: "0 0 100 100",
        fill: "#F23F43",
        width: "22",
        height: "22",
      };
    case "Görünmez":
      return {
        path: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 12.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9Z",
        class: "",
        viewBox: "0 0 16 16",
        fill: "#80848E",
        width: "22",
        height: "22",
      };
    default:
      return {
        path: "",
        class: "",
        viewBox: "0 0 16 16",
        width: "22",
        fill: "#80848E",
        height: "22",
      };
  }
};

const friends = () => [
  {
    name: "WuSeLeWu",
    username: "wuselewu",
    status: "Boşta",
    profilePicture: "baby.jpg",
    password: "wuse1",
    IsSee: "admin",
    svgStatus: getSvgStatus("Boşta"),
  },
  {
    name: "Eren Agr",
    username: "erenagr",
    status: "Çevrim içi",
    profilePicture: "eren.jpg",
    password: "1",
    IsSee: "sidebar",
    svgStatus: getSvgStatus("Çevrim içi"),
  },
  {
    name: "Hakan",
    username: "hakancyln",
    status: "Rahatsız Etmeyin",
    profilePicture: "profile.jpg",
    password: "1",
    IsSee: "sidebar",
    svgStatus: getSvgStatus("Rahatsız Etmeyin"),
  },
  {
    name: "Onur",
    username: "odinc",
    status: "Görünmez",
    profilePicture: "deadpool.jpg",
    password: "1",
    IsSee: "sidebar",
    svgStatus: getSvgStatus("Görünmez"),
  },
  {
    name: "Emirhan",
    username: "ecinci",
    status: "Görünmez",
    profilePicture: "ghost.jpg",
    password: "1",
    IsSee: "sidebar",
    svgStatus: getSvgStatus("Görünmez"),
  },
  {
    name: "Bilal",
    username: "bilal-captain19",
    status: "Çevrim içi",
    profilePicture: "bilal.jpg",
    password: "1",
    IsSee: "all",
    svgStatus: getSvgStatus("Çevrim içi"),
  },
  {
    name: "Eyyüp",
    username: "eyp.kndrc",
    status: "Boşta",
    profilePicture: "eyup.jpg",
    password: "1",
    IsSee: "all",
    svgStatus: getSvgStatus("Boşta"),
  },
  {
    name: "Fatih",
    username: "fsarman",
    status: "Boşta",
    profilePicture: "fatih.png",
    password: "1",
    IsSee: "all",
    svgStatus: getSvgStatus("Boşta"),
  },
  {
    name: "Ömer",
    username: "ömrSrlvk",
    status: "Görünmez",
    profilePicture: "images.jpg",
    password: "1",
    IsSee: "all",
    svgStatus: getSvgStatus("Görünmez"),
  },
  {
    name: "Eray Amca",
    username: "amca31",
    status: "Boşta",
    profilePicture: "ıronman.jpg",
    password: "1",
    IsSee: "all",
    svgStatus: getSvgStatus("Boşta"),
  },
  {
    name: "Enes Dede",
    username: "dedem29",
    status: "Görünmez",
    profilePicture: "joker.jpg",
    password: "1",
    IsSee: "all",
    svgStatus: getSvgStatus("Görünmez"),
  },
];

export default friends;
