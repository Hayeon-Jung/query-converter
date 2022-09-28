import './App.css';
import { useState } from 'react';

function App() {
  const [postgresql, setPostgresql] = useState([]);
  const [inputValue, setInputValue] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setPostgresql((current) => { // 여기 if를 수정해서 변환작업 하기
      if (inputValue.includes("what")) {
        const word = inputValue.split(' ');

        return [...current, {
          value: word[0], 
          /* 치환 혹은 배열로 
          분리 하여 변환된 문장 조합
          일단 출력은 되는데요 원하는 함수만 출력하려는 방법이 */
        },];
      }
      else return [...current, {
        value: inputValue, 
      },];
      
    });

    setInputValue("");
    
  };

  return (
    <div>
      <form id="oracle-query" onSubmit={handleSubmit}>
        <input type="text" value ={inputValue}
          onChange={(event) => {
            setInputValue(event.target.value);
        }} />
        <button type="submit">변환</button>
      </form>
      
      <ol>{postgresql.map((item) => (
        <div>
          <span>{item.value}</span>
        </div>
      ))}</ol>
    </div>
  );
}

export default App;
