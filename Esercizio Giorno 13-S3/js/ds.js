let name1 = document.querySelector('#nameForm input[name="nome"]');
let saluto = document.querySelector("#salutoNome");
let salutobtn = document.querySelector("#salutobtn");

salutobtn.addEventListener("click", addName);

function addName(event) {
  event.preventDefault();
  let existingP = saluto.querySelector("p");
  if (name1.value.trim() !== "") {
    /*if (existingP) {*/
      
      let newP = document.createElement("p");
      newP.innerText = "Ciao, " + name1.value;
      name1.style.color= `#963f5f`;
      saluto.appendChild(newP);
      name1.value = "";
      existingP.remove();
    /*} else {
      let newP = document.createElement("p");
      newP.innerText = "Ciao, " + name1.value;
      saluto.appendChild(newP);
      name1.value = "";
      name1.style.color= `#963f5f`;
      console.log("pippo e pluto");
    }*/
  } else {
    alert("Inserisci il tuo nome! Non sei colui-che-non-può-essere-nominato!");
  }
}

let todoForm = document.querySelector('#todoForm input[name="task"]');
let formBtn = document.querySelector("#formBtn");
let tasklist = document.querySelector("#tasklist");

formBtn.addEventListener("click", addTask);

function addTask(event) {
  event.preventDefault();
  if (todoForm.value.trim() !== "") {
    let newP = document.createElement("p");
    newP.innerText = todoForm.value;
    tasklist.appendChild(newP);

    let existingP = tasklist.querySelectorAll("p");

    for (let i = 0; i < existingP.length - 1; i++) {
      if (todoForm.value + "remove" === existingP[i].innerText) {
        alert("Hai già inserito questa task!");
        newP.remove();
      }
    }
    todoForm.value = "";
    newP.addEventListener("click", taskDone);
    function taskDone() {
      newP.style.textDecorationLine = "line-through";
      newP.style.color = `#963f5f`;
    }
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    newP.appendChild(removeBtn);
    removeBtn.addEventListener("click", cancellaTask);
    function cancellaTask(event) {
      event.preventDefault();
      newP.remove();
    }
  } else {
    alert("Inserisci una task prima di aggiungere!");
  }
}
