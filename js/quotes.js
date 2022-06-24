const quotes = [
    {
        quote: "간단함이 훌륭함의 열쇠다.",
        author: "  by 이소룡",
    },
    {
        quote: "말만 하고 행동하지 않는 사람은 잡초로 가득한 정원과 같다.",
        author: "by 하우얼",
    },
    {
        quote: "낭비한 시간에 대한 후회는 더 큰 낭비다.",
        author: "by 메이슨 쿨리",
    },
    {
        quote: "해야할 일을 과감히 하라, 결심한 일은 반드시 실행하라.",
        author: "by 벤자민 프랭클린",
    },
    {
        quote: "들은 것은 잊어버리고, 본 것은 기억하고 직접 해본것은 이해한다.",
        author: "by 공자",
    },
    {
        quote: "내일의 실현을 가로막는 유일한 한계는 오늘을 의심하는 것입니다.",
        author: "by 프랭클린 D.루즈벨트",
    },
];
//quotes 배열을 만들어 객체형태로 명언과 작가를 입력
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
//JS 에 접근
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
//Math.random()를 통해 0~6.xxxxx 까지 값을 받고 그 값을 Math.floor()로 내림으로 정수를 만듬
//quotes[index] 형태가 되어  todayQuote가 값{quote: , author:}을 받음 
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
//todaysQuote를 통해 받은 값을 html 화면에 뿌려줌.