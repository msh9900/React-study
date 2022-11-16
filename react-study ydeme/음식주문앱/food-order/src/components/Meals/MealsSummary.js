import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>음식 주문</h2>
      <p>신선한 음식을 당일 배송해드립니다.</p>
      <p>이 페이지는 개인 포트폴리오 위하여 만들었습니다</p>
    </section>
  );
};

export default MealsSummary;
