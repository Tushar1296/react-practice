import ActionButton from "../day01/ActionButtons";
import HeaderSection from "../day01/HeaderSection";
import "./Day03Card.css";

function Card({ name, title, message, bgColor, buttonLabel, onClick }) {
  return (
    <div className="card-wrapper" style={{ backgroundColor: bgColor }}>
      <article className="card-content">
        <HeaderSection title={title} name={name} message={message} />
        <ActionButton label={buttonLabel} onClick={onClick} />
      </article>
    </div>
  );
}
export default Card;
