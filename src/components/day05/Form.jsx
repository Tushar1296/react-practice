import React, { useState } from "react";
import "./Day05Card.css";

function Form({ label, onClick }) {
  const [inputText, setInputText] = useState("");

  return (
    <div className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Enter your text here"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button
        type="button"
        className="submit-button"
        onClick={() => onClick(inputText)}
      >
        {label}
      </button>
    </div>
  );
}
export default Form;
