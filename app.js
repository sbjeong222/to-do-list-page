const calculate = {
    add: function (number1, number2) {
        console.log(number1 + number2);
    },
    minus: function (number1, number2) {
        return number1 - number2;
    },
    divide: function (number1, number2) {
        return number1 / number2;
    },
    times: function (number1, number2) {
        return number1 * number2;
    },
    power: function (number1, number2) {
        return number1 ** number2;
    },
};


//console.log 와 return 의 차이 

const Add = calculate.add(1, 2);
console.log(Add); // 결과값이 undifined 로 찍힌다.

const Minus = calculate.minus(1, 2);
console.log(Minus); // 결과값이 -1 로 찍힌다.

//console.log 는 보여주기만 하고 값으로 저장되지 않는다.
//return 은 값으로 저장되어 변수에 넣어 사용할 수 있다.