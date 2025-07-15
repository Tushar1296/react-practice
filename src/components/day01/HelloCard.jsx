import "./HelloCard.css";

function HelloCard() {
  // === String / Variable Approach ===

  // String.raw is used to create a raw string, which means it will not process escape sequences like \n or \t.
  // This is useful for creating strings that should be displayed exactly as they are written, without  // any special character processing.
  // In this case, it is used to create a string that includes a backslash and a single quote without escaping them.
  const name = String.raw`Tushar`;
  const greeting = `Hello, ${name} 👋`;
  const message = `Welcome to Day 01 of my React practice journey.`;
  const alertMessage = String.raw`Let's go 🚀`;

  // === Function Approach ===

  // This function returns the greeting message.
  // It can be used to dynamically generate the greeting message if needed.
  const getGreeting = () => {
    return greeting;
  };
  const getMessage = () => message;

  function handleAlert() {
    console.log(alertMessage);
    console.log(getMessage());
    alert(alertMessage);
  }

  return (
    <div className="hello-wrapper">
      <div className="hello-card">
        <div className="section-block">
          {/* === 1. Static JSX with Inline Interpolation === */}
          {/* This mixes a hardcoded string with a dynamic value directly inside JSX */}
          <h2>🔹 Inline JSX + {`{name}`} Interpolation</h2>
          <h1>Hello, {name} 👋</h1>
          <p>Welcome to Day 01 of my React practice journey.</p>
        </div>

        <div className="section-block">
          {/* === 2. JSX using pre-defined variables === */}
          {/* Using String/Variable and Function Return Value*/}
          {/* You compute strings in advance and drop them in JSX */}
          <h2>👋 Using string/variable directly:</h2>
          <h1>{greeting}</h1>
          <p>{message}</p>
        </div>

        <div className="section-block">
          {/* === 3. JSX using function return values === */}
          {/* Functions return strings dynamically — more flexible and readable for reuse */}
          <h2>⚙️ Using function return values:</h2>
          <h1>{getGreeting()}</h1>
          <p>{getMessage()}</p>
        </div>

        <div className="section-block">
          {/* === 4. Button with Inline Function === */}
          {/* This button uses an inline function to handle the click event */}
          <button type="button" onClick={handleAlert}>
            Let's go 🚀
            {alertMessage}
          </button>
        </div>

        <div className="section-block">
          {/* === 5. Button with Inline Alert === */}
          {/* This button uses an inline function to show an alert with a message */}
          <button type="button" onClick={() => alert(alertMessage)}>
            Alert via Inline
          </button>
        </div>
      </div>
    </div>
  );
}

export default HelloCard;
