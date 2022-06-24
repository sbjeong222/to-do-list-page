//-------Login Form-------

const loginForm = document.querySelector(".login-form");
const loginInput = loginForm.querySelector(".login-input");
const greeting = document.querySelector("h1");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting(username);
}

function paintGreeting(username) {
    greeting.innerText = `Welcome ${username}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting(savedUsername);
}

console.log(localStorage);

//처음 렌더링 될 때 form 이랑 h1 둘 다 숨겨진 상태에서 시작.
//앱이 시작되면 ,  JS가 local storage에서 savedUsername을 얻는다.
//if문으로 가서 조건에 맞게 실행 savedUsername이 있으면 paintGreeting 함수 실행 (h1 나타냄)
//savedUsername 이 없으면 form 을 나타나게 하고 input 태그에서 값을 받아온 후 onLolinSubmit 함수 실행(lacal storage에 키와 값을 저장)