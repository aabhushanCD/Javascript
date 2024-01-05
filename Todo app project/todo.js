let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
function addTodo()
{
    
    let inputElements = document.querySelector("#todoInput");
    
    let dateElements = document.querySelector("#todo-date");

    let todoItem= inputElements.value;
    let todoDate= dateElements.value;
    todoList.push({item:todoItem, duedate:todoDate});
    inputElements.value = '';
    dateElements.value = '';
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();
    
    
}

function displayItems()
{
    let containerElement = document.querySelector('.todo-container');
       let newHtml='';
       for(let i=0; i<todoList.length; i++) {
       let {item,duedate} = todoList[i];
        newHtml += `
        <span>${item}</span>
        <span>${duedate}</span>
        <button class="btn-delete" onclick = "todoList.splice(${i},1);
        localStorage.setItem('todoList', JSON.stringify(todoList));
        displayItems();">Delete</button>
        `;
        }
    containerElement.innerHTML=newHtml;
}
displayItems();