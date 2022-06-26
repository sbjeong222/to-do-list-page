const toDoForm = document.querySelector(".todo-form");
const toDoInput = document.querySelector(".todo-input");
const toDoList = document.querySelector(".todo-list");

let toDoSave = [];
//input value 인 newTodo를 담기 위한 배열

const TODOS_KEY = "todos";
//localstorage의 키 값 변수

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDoSave));
    //배열 형태인 toDoSave를 JSON.stringify()에 넣어 string으로 변환한 뒤 localstorage에 저장
}

function deleteTodo(event) {
    const deletingList = event.target.parentElement;
    //target되는 button의 부모 요소를 변수값으로 지정 li 태그
    deletingList.remove();
    //지정된 부모 요소 삭제 되며 span , button 도 삭제
    toDoSave = toDoSave.filter(
        (toDoSave) => toDoSave.id !== parseInt(deletingList.id)
    );
    //filter() 를 사용해서  toDoSave 배열 속의 id 와 삭제된 엘리먼트의 id가 같을 때 해당 값을 삭제 한다.
    saveTodos();
}

function paintToDo(newTodoObj) {
    const li = document.createElement("li");
    li.id = newTodoObj.id;
    const span = document.createElement("span");
    const button = document.createElement("button");
    //필요한 엘리먼트 생성하여 변수에 담기
    span.innerText = newTodoObj.text;
    //담아온 매개변수를 content로 쓴다.
    li.appendChild(span);
    //li태그 속으로 span태그를 그려준다.
    toDoList.appendChild(li);
    //ul태그 밑으로 li태그를 그려준다.

    button.innerText = "Misson Complete😎";
    li.appendChild(button);
    button.addEventListener("click", deleteTodo);
    //버튼을 클릭하면 발생하는 이벤트 지칭.
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
        //랜덤한 id를 저장하기 위해 Date.now()사용.
    };
    //newTodo 에 텍스트만 받던 걸 id까지 포함시켜서 받기위해 새로 newTodoObj 라는 변수로 만들어 객체 저장
    toDoSave.push(newTodoObj);
    //만들어둔 배열에 값 집어 넣기
    paintToDo(newTodoObj);
    //input value를 화면에 띄우기 위한 함수로 전달
    saveTodos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KEY);
//localStorage에 저장되어있는 value 값을 받아서 변수에 저장

if (savedTodos !== null) {
    //저장된 value값 있으면 실행
    const parsedTodos = JSON.parse(savedTodos);
    //받아온 변수(string)를 배열(array)로 변환후 변수에 저장
    toDoSave = parsedTodos;
    //todoSave 변수에 변환한 값을 할당하고 새로고침 할때마다 초기화 되니까 이전 값들을 가지고 있으라고 써준 코드
    parsedTodos.forEach(paintToDo);
    //변환한 값에 forEach()로 변수 각각에 paintToDo 함수를 걸어 값들을 그린다.
}
