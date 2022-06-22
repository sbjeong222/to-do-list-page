const h1 = document.querySelector("#title");

//classname 을 추가하고 삭제하며 css파일을 통해 style 넣기
function handleTitleClick() {
    const clickedClass = "clicked"; 
    if (h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
