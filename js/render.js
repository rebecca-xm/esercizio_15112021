import { getData, saveData } from './data.js';
import { dataToAdd, dataToPost } from './add.js';

const update = (event) => {
    const id = parseInt(event.target.id);
    const newData = getData().map((item) => {
        if (item.id === id) {
            return { ...item, completed: !item.completed };
        } else {
            return item;
        }
    });
    saveData(newData);                                          // aggiorna lo stato locale
    render(newData);                                            // renderizza i nuovi dati
    // console.log(getData()[0].completed);
}

export const render = (data) => {
    const todos = document.querySelector("#todos");

    const items = data.map(
        (item, index) =>
            `<li><label><input 
        type="checkbox" ${item.completed ? "checked" : ""} id="${item.id}"
        > ${item.title} ${item.expires}</label></li>`);        // <= item.expires per visualizzare la scadenza!!!

    todos.innerHTML = items.join("");

    // const lis = todos.querySelectorAll("li");               // querySelectorAll all'interno del nodo html mi ritorna una nodeList
    // console.log(lis);                                       // il problema è che su una nodeList non posso applicare un forEach()

    const lis = [...todos.querySelectorAll("li")];             // [...nodeList] converte una nodeList in array tramite la spread syntax
    lis.forEach((item) => {
        item.addEventListener("click", update);
    });
}

const form = document.querySelector('#addToDo');
form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const newToDo = {
        title: event.target.title.value,
        completed: false,                                       // <= lasciare il campo libero?
        expires: event.target.expires.value,
    }
    dataToPost(newToDo)
    form.reset()

    dataToAdd()
});