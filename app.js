//-------JS 파일에서 HTML element로 접근하기-------
const h1 = document.getElementById("title");

//여러가지 접근 방식의 코드
// const h1 = document.getElementsByClassName("h1");
// const h1 = document.querySelector(".h1");

h1.innerText = "Let's check!";
console.log(h1);
console.dir(h1);

//Function list
function handleTitleClick() {
    h1.innerText = "mouse is clicked";
    //Code 1.
    // if (h1.style.color === "black") {
    //     h1.style.color = "blue";
    // } else {
    //     h1.style.color = "black";
    // }

    //Code 1.1
    const currentColor = h1.style.color;
    let newColor;
    if (currentColor === "black") {
        newColor = "blue";
    } else {
        newColor = "black";
    }
    h1.style.color = newColor;
}
function mouseIn() {
    h1.innerText = "mouse is here!";
}
function mouseOut() {
    h1.innerText = " mouse is gone...";
}

//Event 추가
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", mouseIn);
h1.addEventListener("mouseleave", mouseOut);

//Event 추가 (다른 코드)
// h1.onclick = handleTitleClick;

//-------JS 에서 Window object 접근하기-------
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize", handleWindowResize);



//-------요약-------
//step 1. element 찾기
//step 2. event 를 listen 하기
//step 3. event 에 반응하기