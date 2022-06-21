//Array

const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

dayOfWeek.push("sun");
console.log(dayOfWeek);
dayOfWeek.pop();
console.log(dayOfWeek);

//Object

const player = {
    age: 22,
    job: "programmer",
    heathy: true,
};

console.log(player);
player.name = "jaeyoon"; //name porperty 추가
console.log(player);

player.age = player.age + 1; // 기존  property 변경사항 추가 const 인데 왜 바뀌지?
console.log(player.age); // 객체 전체를 바꾸는게 아니면 객체안의 변경은 가능하다  안되는코드 player=true;

//Function

function sayHello(name, a, b) {
    console.log(`hello ${name} age : ${a} ~!`);
}
sayHello("jjy", 33);

const player2 = {
    name: "jjy",
    sayHello2: function (name) {
        console.log(`hello ${name} ~!`);
    },
};

player2.sayHello2("jjjjj");
player2.sayHello2("hhhhh");
