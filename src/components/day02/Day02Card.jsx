import ActionButton from "../day01/ActionButtons";
import GreetingSection from "../day01/GreetingSection";
import HeaderSection from "../day01/HeaderSection";
import "../day01/HelloCard.css";
function Day02Card() {
  const name = "Tushar";
  const message = "Welcome to Day 02 of my React practice journey.";
  const alertMessage = "Let's go 🚀";
  const handleClick = () => {
    console.log(alertMessage);
    alert(alertMessage);
  };
  return (
    <section className="hello-card section-block">
      <HeaderSection
        title={"🔹 Using Props to Break Components"}
        name={name}
        message={message}
      />
      <ActionButton label={"Click Me 🚀"} onClick={handleClick} />
    </section>
  );
}
export default Day02Card;
