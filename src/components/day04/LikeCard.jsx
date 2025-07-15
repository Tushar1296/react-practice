import { useState } from "react";
import ActionButton from "../day01/ActionButtons";
import HeaderSection from "../day01/HeaderSection";
import "./Day04Card.css";

function LikeCard({ name, title, message, bgColor }) {
  const [likes, setLikes] = useState(false);
  return (
    <div className="like-card-wrapper" style={{ backgroundColor: bgColor }}>
      <article className="card-content">
        <HeaderSection title={title} name={name} message={message} />
        <ActionButton
          label={likes ? "Liked ❤️" : "Like 👍"}
          onClick={() => {
            setLikes(!likes);
            console.log(likes ? "Unliked ❌" : "Liked ✅");
          }}
        />
      </article>
    </div>
  );
}
export default LikeCard;
