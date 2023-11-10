let name1 = document.querySelector('#nameForm input[name="nome"]');
let saluto = document.querySelector("#salutoNome");
let salutobtn = document.querySelector("#salutobtn");

salutobtn.addEventListener("click", addName);

function addName(event) {
  event.preventDefault();

  let existingP = saluto.querySelectorAll("p");

  if (existingP.length > 0) {
    existingP.forEach(p => p.remove());
  }

  if (name1.value.trim() !== "") {
    let newP = document.createElement("p");
    let newP1 = document.createElement("p");
    newP.innerText = "Ciao, ";
    newP1.innerText = name1.value;
    newP1.style.color = `#8f458a`;
    saluto.appendChild(newP);
    saluto.appendChild(newP1);
    name1.value = "";
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
    newP.addEventListener("click", taskToggle);

    function taskToggle() {
      if (newP.style.textDecorationLine === "line-through") {
        newP.style.textDecorationLine = "none";
        newP.style.color = "black"; 
        } else {
        newP.style.textDecorationLine = "line-through";
        newP.style.color = `#963f5f`;
      }
    }

    let removeBtn = document.createElement("button");
    removeBtn.innerText = "remove";
    newP.appendChild(removeBtn);
    removeBtn.addEventListener("click", cancellaTask);
    function cancellaTask(event) {
      event.preventDefault();
      let cancella = confirm("Sei sicuro di voler cancellare questa task?");
      if (cancella === true){
        newP.remove();
      }
      else{
        newP.style.textDecorationLine = "none";
        newP.style.color = "black"; 
      }
    }

  } else {
    alert("Inserisci una task prima di aggiungere!");
  }
}
