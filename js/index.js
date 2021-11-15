// import { render } from "./render.js";
// import { getData, saveData } from "./data.js";
import { dataToAdd } from "./add.js";

const connectionAlert = () => {
    const isOnLine = window.navigator.onLine;
    const connection = document.querySelector("#connection");
    connection.innerHTML = isOnLine ? "online" : "offline";
};

document.addEventListener("DOMContentLoaded", () => {
    window.addEventListener("online", connectionAlert);
    window.addEventListener("offline", connectionAlert);

    dataToAdd();
});

export const API = "https://edgemony-backend.herokuapp.com/todos";