var number = 0; //초기값 선언

var numberElement = document.getElementById('number');
var increaseButton = document.getElementById('increase');
var decreaseButton = document.getElementById('decrease');

console.log(numberElement);
console.log(increaseButton);
console.log(decreaseButton);

numberElement.textContent = number;
//number의 초기값 0을 numberElement.textContent에 표시되도록 함
/*js에서 DOM 요소의 텍스트 콘텐츠를 변경하는 코드
numberElement: id가 number인 요소를 가리킴 | textContent: 그 요소의 내용
number 변수의 값[0]이 id가 number인 DOM 요소에 표시되도록 만듬*/

increaseButton.addEventListener('click', function() {
    number++; //number 값 증가
    numberElement.textContent = number; //number이 0으로 설정
    console.log('increase가 클릭됨');
});

decreaseButton.addEventListener('click', function() {
    number--; //number 값 감소
    numberElement.textContent = number; //number이 0으로 설정
    console.log('decrease가 클릭됨');
});