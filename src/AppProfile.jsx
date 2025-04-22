import "./App.css";
import Profile from "./components/Profile";
import Avatar from "./components/Avatar";
function AppProfile() {
  //리액트 컴포넌트 -> return할 때, JSX 문법(html처럼 사용)을 사용해서 어떤 UI를 사용하는 컴포넌트인지 아래에서 명시
  // const name = 'POOOO'; //자바스크립트 사용 시 {}사용
  // const list = ['우유', '딸기', '바나나']
  const handleClick = (event) => {
    console.log(event.target);
    alert("버튼 클릭");
  };
  return (
    //컴포넌트는 하나의 태그를 반환, 여러 태그를 쓰고 싶으면 부모 태그로 감싼다.
    <>
      <button onClick={handleClick}>버튼</button>

      <Avatar
        image="https://avatars.githubusercontent.com/u/123456789?v=4"
        isNew={true}
      />
      <Profile
        image="https://avatars.githubusercontent.com/u/123456789?v=4"
        name="James Kim"
        title="Frontend Developer"
        isNew={true}
      />
      <Profile
        image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=922&q=80"
        name="John Doe"
        title="Backend Developer"
      />
      <Profile
        image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
        name="Jane Smith"
        title="Fullstack Developer"
      />
    </>
  );
}

export default AppProfile;
