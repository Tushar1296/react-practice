import React, { useState, useRef, useCallback, useEffect } from "react";
import "./Day05Card.css";

function Form({ label, onClick, isSearch = false, users = [] }) {
  const [inputText, setInputText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [highlightedIndex, setHighlightedIndex] = useState(0); // start with first item

  const placeholderText = isSearch
    ? "Search with name and role"
    : "Enter your text here";

  // const inputRef = useRef(null); // For referencing an input element
  // const someValueRef = useRef(0); // For persisting a value between re-renders

  // For a single ul
  const ulRef = useRef(null); // For the <ul> element

  // When dynamically generating li elements, you can use a callback ref or an array of refs to reference each li.
  const liRefs = useRef([]); // To store refs for multiple <li> elements

  // Callback ref for dynamically setting li elements
  const setLiRef = useCallback((element, index) => {
    if (element) {
      liRefs.current[index] = element;
    }
  }, []);

  // const setLiRef = (element, index) => {
  //   if (element) {
  //     liRefs.current[index] = element;
  //   }
  // };

  const wrapperRef = useRef(null);

  // This way, if suggestions update, your highlight starts from the top.
  useEffect(() => {
    if (suggestions.length > 0) {
      setHighlightedIndex(0);
    }
  }, [suggestions]);

  useEffect(() => {
    const element = liRefs.current[highlightedIndex];
    if (element) {
      element.scrollIntoView({ block: "nearest" });
    }
  }, [highlightedIndex]);

  const clearSuggestions = () => {
    setSuggestions([]);
    setHighlightedIndex(0);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInputText(value);

    if (isSearch && value.trim() !== "") {
      const lower = value.toLowerCase();
      const uniqueSuggestions = new Set();
      users.forEach((user) => {
        if (user.name.toLowerCase().includes(lower)) {
          uniqueSuggestions.add(user.name);
        }
        if (user.role.toLowerCase().includes(lower)) {
          uniqueSuggestions.add(user.role);
        }
      });
      setSuggestions([...uniqueSuggestions]);
    } else {
      clearSuggestions();
    }
  };

  const handleSuggestionClick = (suggestion) => {
    if (ulRef.current) {
      console.log("UL element:", ulRef.current);
      // Example: Scroll to the top of the UL
      // ulRef.current.scrollTop = 0;
    }

    liRefs.current.forEach((liElement, index) => {
      if (liElement) {
        console.log(`LI element ${index}:`, liElement);
        // Example: Change the background color of each LI
        // liElement.style.backgroundColor = "lightblue";
      }
    });

    setInputText(suggestion);
    clearSuggestions();
    onClick(suggestion);
  };

  const handleKeyDown = (e) => {
    if (suggestions.length === 0) return;
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev < suggestions.length - 1 ? prev + 1 : 0
        );
        break;

      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) =>
          prev > 0 ? prev - 1 : suggestions.length - 1
        );
        break;

      case "Enter": {
        e.preventDefault(); // Prevent form submission (just in case)
        const selected = suggestions[highlightedIndex] || suggestions[0]; // default to first
        onClick(selected); // Trigger the search
        setInputText(selected); // Set input after search
        clearSuggestions();
        // setSuggestions([]); // Hide suggestions
        // setHighlightedIndex(0); // default first suggestion selected
        break;
      }

      case "Escape":
        clearSuggestions();
        break;

      default:
        break;
    }
  };

  //

  useEffect(() => {
    const handleClickOutside = (e) => {
      console.log("Inside handleClickOutside");
      console.log(e.target.value);

      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        clearSuggestions();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={wrapperRef}
      className={`form-container${isSearch ? " search-form" : ""}`}
    >
      <input
        type="text"
        className="input-text"
        placeholder={placeholderText}
        value={inputText}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      {isSearch && suggestions.length > 0 && (
        <ul ref={ulRef} className="suggestion-list">
          {suggestions.map((sugg, index) => (
            <li
              key={index}
              className={index === highlightedIndex ? "highlighted" : ""}
              ref={(element) => setLiRef(element, index)}
              onMouseEnter={() => setHighlightedIndex(index)}
              onClick={() => handleSuggestionClick(sugg)}
            >
              {sugg}
            </li>
          ))}
        </ul>
      )}

      <button
        type="button"
        className="submit-button"
        style={{ maxWidth: "120px", margin: "0.5rem auto 0" }}
        onClick={() => {
          onClick(inputText); // Trigger the search
          setInputText(""); // Clear input after search
          setSuggestions([]); // Hide suggestions
        }}
      >
        {label}
      </button>
    </div>
  );
}
export default Form;
