import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1> 웰컴 페이지</h1>
      <Route path="/welcome/new-user">
        <p>환영합니다 새로운 손님</p>
      </Route>
    </section>
  );
};

export default Welcome;
