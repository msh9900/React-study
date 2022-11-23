import { Link } from "react-router-dom";

const Products = () => {
  return (
    <section>
      <h1> 상품 페이지</h1>
      <ul>
        <li>
          <Link to="/products/p1">책</Link>
        </li>
        <li>
          <Link to="/products/p2">카펫</Link>
        </li>
        <li>
          <Link to="/products/p3">온라인 강의</Link>
        </li>
      </ul>
    </section>
  );
};

export default Products;
