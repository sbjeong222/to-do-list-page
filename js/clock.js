const clock = document.querySelector("h2#clock");

function sayHello() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    //date.getHours() = number
    //카운트가 1이 아닌 01 로 보여주기 위해 string()를 통해 number를 string으로 만들어 주고,
    //padstart()를 통해 문자의 앞에 "0"을 추가시킨다.
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

sayHello(); 
// sayhello() 미리 호출하는 이유는 그렇지 않으면 setInterval의 1초 의 시간동안 00:00:00으로 보이기 때문
setInterval(sayHello, 1000);
//setInterval() 을 통해 내가 호출하고 싶은 함수와 호출하고 싶은 간격을 정했다. 1초마다 초기화 but 보기에는 실시간인것 처럼 보임.
