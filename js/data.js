const saveData = (data) => {
    const str = JSON.stringify(data);                                   // prende un array di oggetti e lo trasforma in una stringa
    localStorage.setItem("data", str);
}

const getData = () => {
    const value = localStorage.getItem("data") || "";
    return JSON.parse(value);                                           // prende una stringa e se trova un JSON codificato lo estrae in formato JSON
}

export {saveData, getData};