const toDoTime = document.querySelector (".toDoTime");
const toDoText = document.querySelector ("#toDoText");
const toDoButton = document.querySelector (".toDoButton");
const mainSection = document.querySelector (".mainSection");
let tasks = []


function delTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  console.log(tasks);
  console.log(id);
  updateTaskToHtml();
}


function updateTaskToHtml(){
  mainSection.innerHTML ="";
 
for (let i = 0; i < tasks.length; i++) {
  const task = tasks[i];
  
  const newDiv = document.createElement("div");
  newDiv.innerHTML = `
  <div class ="toDoTask">
  <p class="innerTime" >${task.time}</p>
  <p>${task.text}</p>
  <div onclick="delTask(${task.id})" type="button" > <i class="fas fa-trash-can"></i></div>

  </div>
  `;
  mainSection.appendChild(newDiv);
 
}

}

toDoButton.addEventListener("click", e =>{
  console.log(toDoTime.value);
  console.log(toDoText.value);

  const timeValue = toDoTime.value;
  const textValue = toDoText.value;

  if (!timeValue ) {
    alert("please specify the time");
    return false;
  }

  if (!textValue ) {
    alert("text is required");
    return false;
  }


 const newTask = {
   id: new Date().getTime(), //this is to generate a unique id fr each task
   time: toDoTime.value,
   text: toDoText.value,
 }

 tasks.push(newTask);
 console.log(tasks);

//to clear the input after value is saved in array as seen above
 toDoTime.value = "";
 toDoText.value = "";
updateTaskToHtml();

});


/*....object

const seyiEre = {
  name :"seyi",
  age : 90

}

console.log(seyiEre.name);


Array...
const food = [];
food.push("garri");
console.log(food);
food .push("rice");
console.log(food);


const films = ["enola Holmes","saw", "anabelle", "protege"];
console.log(films[2]);

const villagePeople = [
  {
    film: films[0],
    rating : 10,
    
  },

  {
    film: films[3],
    rating : 7,
  }
]
console.log(villagePeople[1].rating);
*/

/*
function addTwo(firstNu,secondNu){
  const s = firstNu + secondNu;
 // console.log(firstNu + 4);
 console.log(s);
}

addTwo(7,12);
addTwo(10,23);*/
