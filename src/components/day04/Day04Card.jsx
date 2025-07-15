import "./Day04Card.css";
import LikeCard from "./LikeCard";
function Day04Card() {
  return (
    <div className="day04-card">
      <LikeCard
        name="Tushar"
        title="Day 4 React Practice"
        message="Click like if you're enjoying the grind!"
        bgColor="#f0e68c"
      />
      <LikeCard
        name="Bale"
        title="Fan Moment"
        message="If you love football, show it some love!"
        bgColor="#94ececff"
      />
    </div>
  );
}
export default Day04Card;
