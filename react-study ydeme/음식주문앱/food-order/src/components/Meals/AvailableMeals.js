import Card from "../UI/Card";
import MealsItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const fooddata = [
  {
    id: "m1",
    name: "회초밥",
    description: "Finest fish and veggies",
    price: 24000,
  },
  {
    id: "m2",
    name: "피자",
    description: "A german specialty!",
    price: 19000,
  },
  {
    id: "m3",
    name: "수제버거",
    description: "American, raw, meaty",
    price: 18000,
  },
  {
    id: "m4",
    name: "샐러드",
    description: "Healthy...and green...",
    price: 15000,
  },
];
const AvailableMeals = () => {
  const mealsList = fooddata.map((meal) => (
    <MealsItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
