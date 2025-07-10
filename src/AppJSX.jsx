//import logo from './logo.svg';
import "./App.css";

function AppJSX() {
  //리액트 컴포넌트 -> return할 때, JSX 문법(html처럼 사용)을 사용해서 어떤 UI를 사용하는 컴포넌트인지 아래에서 명시
  const name = "아무개"; //자바스크립트 사용 시 {}사용
  const list = ["우유", "딸기", "바나나"];
  return (
    //컴포넌트는 하나의 태그를 반환, 여러 태그를 쓰고 싶으면 부모 태그로 감싼다.
    <>
      <h1 className="orange">{`Helllo! ${name}`}</h1>
      <h2>orange</h2>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <p>{name}</p>

      <img
        style={{ width: "200px", height: "200px" }} //{width: '200px', height: '200px'}까지가 객체, width(키): 200px(값) 이 객체를 리액트에서 자바스크립트로 사용해야하기 때문에 {}로 한 번 더 감쌈.
        src=""
        alt=""
      />
    </>
  );
}

export default AppJSX;
