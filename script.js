let btn = document.querySelector("#addBtn");
let input = document.querySelector("#taskInput");
let list = document.querySelector("#list");
function create(event) {
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

    i.addEventListener("click", function () {

        li.classList.toggle("done")
    })

    i2.addEventListener("click", function () {
        list.removeChild(li)
    })
}
btn.addEventListener("click", create);



