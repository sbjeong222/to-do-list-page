const age = parseInt(prompt(" how old are you?"));

if (isNaN(age) || age < 0) {
    console.log("please write a number!");
} else if (age < 18) {
    console.log("You so young.");
} else if (age > 18 && age < 100) {
    console.log("Enjoy your life.");
} else if (age > 80) {
    console.log("your can live infinite life");
} else if (age === 100) {
    console.log("congratulation your 100th birth day");
}
// age 에 100 을 입력 하니까  "your can live infinite life" 만 나옴
// 코드를 위에서 아래로 순서대로 읽어내려와서 걸리는것  age === 100 코드를 위로 올리면 해결됨.