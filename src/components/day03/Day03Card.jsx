import Card from "./Card";
import "./Day03Card.css";

function Day03Card() {
  return (
    <section className="card-block">
      <Card
        name="Tushar"
        title="👋 Hey!"
        message="You're on Day 3 now!"
        bgColor="#ffe0b3"
        buttonLabel="Let's go 🚀"
        onClick={() => alert("Day 3 Card Begins!")}
      />
      <Card
        name="CR7"
        title="🎉 Welcome!"
        message="Glad to have you here."
        bgColor="#d1afaf"
        buttonLabel="Say Hi!"
        onClick={() => alert("SIIUUUUUUUUUUUUU")}
      />
    </section>
  );
}
export default Day03Card;
