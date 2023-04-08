let btn = document.querySelector("#addBtn");
let input = document.querySelector("#taskInput");
let list = document.querySelector("#list");
let container = document.querySelector(".container")
list.innerHTML = localStorage.getItem("htmlLs")
btn.addEventListener("click", function () {
    addTask();
    taskInput.value = "";

})
doneTask();
deleteTask();
function addTask(event) {
    let li = document.createElement("li");
    li.className = "item";
    li.textContent = input.value;
    list.append(li);

    let div = document.createElement("div")
    div.className = "buttons"
    li.append(div)

    let i = document.createElement("i")
    i.className = " fa-solid fa-circle-check"
    div.append(i);

    let i2 = document.createElement("i")
    i2.className = " fa-regular fa-circle-xmark"
    div.append(i2);



}
//btn.addEventListener("click", create);

function doneTask() {
    list.addEventListener("click", function () {
        let target = event.target
        if (target.classList.contains("fa-circle-check")) {
            target.closest("li").classList.toggle("done")
        } //fa-square-check
        localStorage.setItem("htmlLs", list.innerHTML)
    })
}
function deleteTask() {
    list.addEventListener("click", function () {
        let target = event.target
        if (target.classList.contains("fa-circle-xmark")) {
            target.closest("li").remove()
        }

    })

}