import { API } from "./index.js";
import { render } from "./render.js";
import { getData, saveData } from "./data.js";

export function dataToAdd() {
    fetch(API)
            .then(response => response.json())
            .then((data) => saveData(data))
            .then(() => {
                render(getData());
            })
}

export function dataToPost(newToDo) {
    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newToDo)
    })
}