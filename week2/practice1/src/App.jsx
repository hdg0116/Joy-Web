import React, { useState } from 'react';

const Counter = () => {
  //변수 count, 함수 setCount 정의
  const [count, setCount] = useState(0);
  
  //숫자 증가
  const handleIncrease = () => {
    setCount(count + 1);
    console.log('increase가 클릭됨');
  };

  //숫자 감소
  const handleDecrease = () => {
    setCount(count - 1);
    console.log('decrease가 클릭됨');
  };

  //카운터 UI 생성
  return (
    <div>
      <h1>{count}</h1>
        <button onClick={handleIncrease}>+1</button>
      <button onClick={handleDecrease}>-1</button>
    </div>
  );
};

export default Counter;