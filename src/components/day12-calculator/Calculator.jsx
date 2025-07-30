import { useState, useEffect, useRef } from "react";
import "./Calculator.css";

function Calculator() {
  const [displayValue, setDisplayValue] = useState("0");
  const [hasError, setHasError] = useState(false);

  const buttons = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "C",
    "0",
    ".",
    "=",
  ];

  const allowedKeys = new Set([
    "AC",
    "C",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "=",
    "Enter",
    "Backspace",
    "Escape",
  ]);

  // Auto-scroll the display to the right as you type
  const displayRef = useRef(null);
  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollLeft = displayRef.current.scrollWidth;
    }
  }, [displayValue]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      let key = e.key;

      // Map Enter to "="
      if (key === "Enter") key = "=";
      // Map Backspace to "C"
      if (key === "Backspace") key = "C";
      // Map Escape to "AC"
      if (key === "Escape") key = "AC";

      // If not in allowed keypad, do nothing
      if (!allowedKeys.has(key)) return;

      // Pass only the recognized calculator symbol
      handleButtonClick(key);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sanitizeExpression = (expression) => {
    // Remove any trailing operators
    return expression.replace(/[+\-*/]+$/, "");
  };

  const MAX_INPUT_LENGTH = 25;

  const toggleSign = (expression) => {
    // Split expression into numbers/operators, keep operators as separate tokens
    const parts = expression.split(/([+\-*/])/);

    // If expression is a single number, just negate it
    if (parts.length === 1) {
      const num = parts[0];
      return num.startsWith("-") ? num.slice(1) : `-${num}`;
    }

    // Find last number and operator before it
    const lastNumber = parts[parts.length - 1];
    const operatorBefore = parts[parts.length - 2] || "";

    if (operatorBefore === "+") {
      // Replace '+' and number with '-' and number to negate
      return parts.slice(0, parts.length - 2).join("") + "-" + lastNumber;
    } else if (operatorBefore === "-") {
      // Replace '-' and number with '+' and number to un-negate
      return parts.slice(0, parts.length - 2).join("") + "+" + lastNumber;
    } else {
      // No preceding '+' or '-', just negate the last number directly
      return (
        parts.slice(0, parts.length - 1).join("") +
        (lastNumber.startsWith("-") ? lastNumber.slice(1) : "-" + lastNumber)
      );
    }
  };

  const handleButtonClick = (btn) => {
    if (!allowedKeys.has(btn)) return; // ignore invalid
    if (hasError && btn !== "AC") return; // block input when error

    switch (btn) {
      case "AC":
        setDisplayValue("0");
        setHasError(false);
        break;

      case "C":
        setDisplayValue((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
        break;

      case "=":
        setDisplayValue((prev) => {
          try {
            const safeExpression = sanitizeExpression(prev);
            const result = eval(safeExpression);
            setHasError(false);
            return String(result);
          } catch {
            setHasError(true);
            return "Error";
          }
        });
        break;

      case "+/-":
        setDisplayValue((prev) => toggleSign(prev));
        break;

      case "%":
        setDisplayValue((prev) => {
          try {
            const result = eval(prev) / 100;
            setHasError(false);
            return String(result);
          } catch {
            setHasError(true);
            return "Error";
          }
        });
        break;

      case "+":
      case "-":
      case "*":
      case "/":
        setDisplayValue((prev) =>
          /[+\-*/]$/.test(prev) ? prev.slice(0, -1) + btn : prev + btn
        );
        break;

      case ".":
        setDisplayValue((prev) => {
          const parts = prev.split(/[+\-*/]/);
          const lastPart = parts[parts.length - 1];
          return lastPart.includes(".") ? prev : prev + ".";
        });
        break;

      default:
        // Digits: replace "0" or append
        setDisplayValue((prevDisplay) =>
          prevDisplay === "0" ? btn : prevDisplay + btn
        );
        break;
    }
  };

  return (
    <div className="calc-container">
      <h2>Calculator</h2>

      {/* Output display */}
      <div className="calc-display" ref={displayRef}>
        {displayValue}
      </div>

      {/* Numeric button input (0-9) */}
      <div className="calc-buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className={
              btn === "C"
                ? "calc-btn function"
                : btn === "="
                ? "calc-btn operator equals"
                : ["+", "-", "*", "/"].includes(btn)
                ? "calc-btn operator"
                : "calc-btn"
            }
            aria-label={btn}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
