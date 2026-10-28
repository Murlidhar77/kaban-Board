
let profilebutton = document.querySelector("#profile")
let closeprofile = document.querySelector("#close-profile")
let overlayone = document.querySelector(".overlay1")
let downprofile = document.querySelector("#done")
let profilename = document.querySelector("#name")
let profileimage = document.querySelector("#image")
let displayimage = document.querySelector("#profile-img")
let createtask = document.querySelector("#create")
let closetask = document.querySelector("#close-task")
let overlaytwo = document.querySelector(".overlay2")
let taskname = document.querySelector("#name-task")

let todo = document.querySelector("#todo")
let Progress = document.querySelector("#In-progress")
let Done = document.querySelector("#Done")
let cardtask = document.querySelectorAll(".card")
let dragelement = null;
let Submit = document.querySelector("#Submit")
let task = document.querySelector("#task")
let discription = document.querySelector("#desicription")
let maxarray = [todo, Progress, Done]
let taskdata = {}

profilebutton.addEventListener("click", function () {
    overlayone.style.display = "flex"
})

closeprofile.addEventListener("click", function () {
    overlayone.style.display = "none"
})

// profile code

let profiles = JSON.parse(localStorage.getItem("profiles")) || []

downprofile.addEventListener("click", function () {
    let proname = profilename.value
    let proimage = profileimage.value

    if (proname.trim() === "" || proimage.trim() === "") {
        alert("Please enter all values");
        return;
    }

    let profile = {
        name: proname,
        imageurl: proimage
    }

    profiles.push(profile)
    localStorage.setItem("profiles", JSON.stringify(profiles))

    lastprofile = profile;
    displayimage.src = lastprofile.imageurl;

    overlayone.style.display = "none"
})

let lastprofile = null

let savedProfiles = JSON.parse(localStorage.getItem("profiles")) || [];

if (savedProfiles.length > 0) {
    lastprofile = savedProfiles[savedProfiles.length - 1];

    displayimage.src = lastprofile.imageurl;
}

// open Task Code

function Createtask(tasktitle, taskdiscription, column) {
    let article = document.createElement("article")

    article.classList.add("card")
    article.setAttribute("draggable", "true")

    article.innerHTML = `<h1>${tasktitle}</h1>
                <h3>${taskdiscription}</h3>
                <button id="del">Delete</button>`

    article.addEventListener("dragstart", function () {
        dragelement = article;
    });

    article.addEventListener("dragend", function () {
        dragelement = null;
    });

    column.appendChild(article)

    return article
}

if (localStorage.getItem("task")) {
    let data = JSON.parse(localStorage.getItem("task"))

    for (const col in data) {
        const column = document.querySelector(`#${col}`)

        data[col].forEach(task => {
            Createtask(task.task, task.discription, column)
        });

        let card = column.querySelectorAll(".card")
        let count = column.querySelector("#count")
        count.textContent = card.length
    }
}

createtask.addEventListener("click", function () {
    if (!lastprofile) {
        alert("Please make profile first")
        return
    }

    taskname.textContent = lastprofile.name

    overlaytwo.style.display = "flex"
})

closetask.addEventListener("click", function () {
    overlaytwo.style.display = "none"
})

// task drag and drop feature

function Createdrag(column, classname) {
    column.addEventListener("dragenter", function (e) {
        e.preventDefault()
        this.classList.add(classname)
    })

    column.addEventListener("dragleave", function (e) {
        e.preventDefault()
        this.classList.remove(classname)
    })

    column.addEventListener("dragover", function (e) {
        e.preventDefault()
    })

    column.addEventListener("drop", function (e) {
        e.preventDefault()

        if (!dragelement) {
            return;
        }

        this.appendChild(dragelement)
        this.classList.remove(classname)
        dragelement = null;

        maxarray.forEach(column => {
            let card = column.querySelectorAll(".card")
            let count = column.querySelector("#count")

            taskdata[column.id] = Array.from(card).map((t) => {
                return {
                    task: t.querySelector("h1").innerText,
                    discription: t.querySelector("h3").innerText
                }
            })

            localStorage.setItem("task", JSON.stringify(taskdata))
            count.textContent = card.length
        });
    })
}

Createdrag(todo, "hover-over-todo");
Createdrag(Progress, "hover-over-progress");
Createdrag(Done, "hover-over-done");

// create task

Submit.addEventListener("click", function () {
    let taskt = task.value
    let discriptiont = discription.value

    Createtask(taskt, discriptiont, todo)

    maxarray.forEach(column => {
        let card = column.querySelectorAll(".card")
        let count = column.querySelector("#count")

        taskdata[column.id] = Array.from(card).map((t) => {
            return {
                task: t.querySelector("h1").innerText,
                discription: t.querySelector("h3").innerText
            }
        })

        localStorage.setItem("task", JSON.stringify(taskdata))
        count.textContent = card.length
    });

    task.value = ""
    discription.value = ""

    overlaytwo.style.display = "none"
})
