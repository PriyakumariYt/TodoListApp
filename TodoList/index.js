const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function taskAdd() {
  if (inputBox.value === "") {
    alert("You write Something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
      let span = document.createElement("span");
     
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
    inputBox.value = "";
    dataSave();
}
listContainer.addEventListener("click", function (elem) {
    if (elem.target.tagName === "SPAN") {
        elem.target.parentElement.remove();
        dataSave();
    }
}, false)
function dataSave() {
    localStorage.setItem("data", listContainer.innerHTML);
}
function tastShow() {
    listContainer.innerHTML = localStorage.getItem("data");
    
}
tastShow();
