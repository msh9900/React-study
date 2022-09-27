import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail(props) {
  let [count, setcount] = useState(0);
  let [alert, setalert] = useState(true);
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((x) => x.id == id);

  useEffect(() => {
    let a = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {
      clearTimeout(a);
    };
  }, []);

  return (
    <Fragment>
      <div className="container">
        {alert === true ? (
          <div className="alert alert-warning">2초이내 구매시 할인</div>
        ) : null}
        {count}
        <button
          onClick={() => {
            setcount(count + 1);
          }}
        >
          버튼
        </button>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
              alt="신발1"
            />
          </div>
          <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}</p>
            <button className="btn btn-danger">주문하기</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Detail;
