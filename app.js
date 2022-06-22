const h1 = document.querySelector("#title");

//classname 을 추가하고 삭제하며 css파일을 통해 style 넣기
function handleTitleClick() {
    //-------Code 1.-------
    // const clickedClass = "clicked";
    // if (h1.className === clickedClass) {
    //     h1.className = "";
    // } else {
    //     h1.className = clickedClass;
    // }

    //-------Code 1.1-------
    // const clickedClass = "clicked";
    // if (h1.classList.contains(clickedClass)) {
    //     h1.classList.remove(clickedClass);
    // } else {
    //     h1.classList.add(clickedClass);
    // }

//-------Code 1.2-------
    h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
