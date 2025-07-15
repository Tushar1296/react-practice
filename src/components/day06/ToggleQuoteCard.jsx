import { useState } from "react";
import ActionButton from "../day01/ActionButtons";
import "./Day06Card.css";

function ToggleQuoteCard() {
  const [isQuoteVisible, setIsQuoteVisible] = useState(false);
  return (
    <>
      <div className="toggle-quote-card"></div>
      {isQuoteVisible && (
        <p className="quote">
          The only way to do great work is to love what you do.
        </p>
      )}
      <ActionButton
        className="toggle-quote-button"
        label={isQuoteVisible ? "Hide Quote" : "Show Quote"}
        onClick={() => setIsQuoteVisible(!isQuoteVisible)}
      />
    </>
  );
}

export default ToggleQuoteCard;
