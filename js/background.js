const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
//images 라는 이미지 들의 배열을 만든다.
const choosenImage = images[Math.floor(Math.random() * images.length)];
//Math.random()과 Math.floor()를 통해 배열속에서 랜덤으로 선택한다.
//images.length 를ㄹ 곱해 주는 이유는  index 값인 0~3까지의 수를 뽑아주기 위해서
const bgImage = document.createElement("img");
//document.createElement() 로 img 태그를 생성한다.

bgImage.src = `img/${choosenImage}`;
//생성된 태그에 경로 값을 넣는다. 아직 존재는 하지만 추가하지 못한 상태.
document.body.appendChild(bgImage);
//html 내의 body 안에 appendChild()를 이용해 태그를 추가한다.
//document.body.img와 같다.
