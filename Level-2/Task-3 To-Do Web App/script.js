const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

// function for adding task
const addTask = () => {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        listContainer.innerHTML += `<li>${inputBox.value}<span>\u00d7</span></li>`;
    }
    inputBox.value = "";
    saveData();
};

inputBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// function for saving data on local browser
const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);
};

// function for showing data on webpage
const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
};

showTask();