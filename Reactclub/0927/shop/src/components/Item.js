import React from "react";

function Item(props) {
  return (
    <div className="col-md-4">
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
        alt="이미지1"
      />
      <h4>{props.title}</h4>
      <p>{props.content}</p>
    </div>
  );
}

export default Item;
