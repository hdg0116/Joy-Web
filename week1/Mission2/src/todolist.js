const todoInput = document.querySelector('.inputBox');

function todoCreate(event) {
    if (event.keyCode === 13 && todoInput.value !== '') {
        console.log(window.event)
        const newTodo = document.createElement('div');
        const newDetail = document.createElement('div');
        const newButton = document.createElement('button');

        newTodo.setAttribute("class", "listitem");
        newTodo.setAttribute("id", "todoitem");

        newDetail.setAttribute("class", "detail");
        newDetail.textContent = todoInput.value;

        newButton.setAttribute("class", "itembutton");
        newButton.setAttribute("id", "finishButton");
        newButton.textContent = "완료";
        newButton.onclick = function() {
            const getParent = document.getElementById("todo");
            getParent.removeChild(newTodo);
            finishTodo(newDetail.textContent);
        };

        document.getElementById("todo").appendChild(newTodo);
        newTodo.appendChild(newDetail);
        newTodo.appendChild(newButton);

        todoInput.value = '';
    }
}

function finishTodo(finishcontent) {
    const newFinish = document.createElement('div');
    const newDetail_F = document.createElement('div');
    const newButton_F = document.createElement('button');

    newFinish.setAttribute("class", "listitem");
    newFinish.setAttribute("id", "finishitem");

    newDetail_F.setAttribute("class", "detail");
    newDetail_F.textContent = finishcontent;

    newButton_F.setAttribute("class", "itembutton");
    newButton_F.setAttribute("id", "deleteButton");
    newButton_F.textContent = "삭제";
    newButton_F.onclick = function() {
        const getParent = document.getElementById("finish");
        getParent.removeChild(newFinish);
    };

    document.getElementById("finish").appendChild(newFinish);
    newFinish.appendChild(newDetail_F);
    newFinish.appendChild(newButton_F);
}

todoInput.addEventListener("keypress", todoCreate);