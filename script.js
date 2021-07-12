 //create a selector.
 const Form = document.querySelector(".addform");
 const submitbutton = document.querySelector(".add");
 const list = document.querySelector(".list");
 const all_li = document.querySelectorAll(".list li");
 	
 const lang = navigator.language;

 let date= new Date();

 let dayName = date.toLocaleString(lang, {
    weekday: "long"
 });

//Get total number of li in the list.
 var total_li = all_li.length;

//create new li or todo list.
 const generatetemplate = (todo) => {
 	const html = `<li>
                      <input type="checkbox" id="todo_${total_li}">
 				     <label for="todo_${total_li}">
 					 <span class="check"></span>
 					  ${todo}
 				     </label>
 				     <label class="delete"></label>
 	              </li>`;
 	              list.innerHTML += html;
 };

//Get Input value & also Adding one by one number on the li ID.
 function addTodos(e) {
 	e.preventDefault();
 	const todo =Form.addtask.value.trim();
 	if (todo.length){
 		total_li = total_li + 1;
 		generatetemplate(todo);
 		Form.reset();
 	}else{
 		alert("first type any task");
 	}
 }

//create a click event.
 Form.addEventListener("submit", addTodos);
 submitbutton.addEventListener("click", addTodos);


//delete todo list.
function deletelist(e){
	if(e.target.classList.contains("delete")){
		e.target.parentElement.remove();
	}
}
//create a click event.
list.addEventListener("click" , deletelist);
