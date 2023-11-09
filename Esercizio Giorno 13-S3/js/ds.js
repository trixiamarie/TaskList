
let name1 = document.querySelector('#nameForm input[name="nome"]');
let saluto = document.querySelector("#salutoNome");
let salutobtn = document.querySelector("#salutobtn"); 


salutobtn.addEventListener("click", addName);

function addName(event) {
    event.preventDefault();
    let existingP = saluto.querySelector("p");
    if(name1.value.trim() !== ''){
    if (existingP){
        existingP.remove();
        let newP = document.createElement("p");
        newP.innerText = 'Ciao, ' + name1.value ;  
        saluto.appendChild(newP);
        name1.value = '';
    } else{ 
    let newP = document.createElement("p");
    newP.innerText = "Ciao, " + name1.value;  
    saluto.appendChild(newP);
    name1.value = '';
    }
    }else{
        alert("Inserisci il tuo nome! Non sei colui-che-non-può-essere-nominato!");
    }
}


let todoForm = document.querySelector('#todoForm input[name="task"]');
let formBtn = document.querySelector("#formBtn"); 
let tasklist = document.querySelector("#tasklist");

formBtn.addEventListener("click", addTask);



function addTask(event){
    event.preventDefault();
    let existingP = tasklist.querySelector("p");
    if(todoForm.value.trim() !== ''){
        if (!existingP){
            let newP = document.createElement("p");
            newP.innerText = todoForm.value+ " ";  
            tasklist.appendChild(newP);
            todoForm.value = '';
            newP.addEventListener("click",taskDone);
            function taskDone(){
                newP.style.textDecorationLine= "line-through";
            }
            let removeBtn = document.createElement("button");
            removeBtn.innerText = "remove";
            newP.appendChild(removeBtn);
            removeBtn.addEventListener("click", cancellaTask);
            function cancellaTask(event){
                event.preventDefault();
                newP.remove();
            }
        } else {
            alert("Hai già inserito questa task!");
        }
    }else {
        alert("Inserisci una task prima di aggiungere!");
    }
}