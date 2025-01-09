const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
	if(inputBox.value === ''){
		alert("You must write something");
	}
	else{
		let li = document.createElement("li");
		li.innerHTML = inputBox.value;
		listContainer.appendChild(li); 

		let span = document.createElement("span");
		span.innerHTML= "\u00d7";
		li.appendChild(span);
	} 
	inputBox.value = "";
}

inputBox.addEventListener("keydown", function(event) {
	if (event.key === "Enter") { // Check if the pressed key is "Enter"
		addTask(); // Call the function to add the task
	}
});
listContainer.addEventListener("click", function(e){
	if(e.target.tagName === "LI"){
		e.target.classList.toggle("checked");
	}
	else if(e.target.tagName === "SPAN"){
		e.target.parentElement.remove();
	}
},false);


