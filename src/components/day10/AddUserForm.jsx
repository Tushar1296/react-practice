import { useState } from "react";
import "./Day10Card.css";

function AddUserForm({ label, onClick }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [role, setRole] = useState("");

  return (
    <>
      <input
        type="text"
        className="form-input"
        value={name}
        placeholder="Enter your name here"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        min="1"
        className="form-input"
        value={age}
        placeholder="Enter your age here"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        className="form-input"
        value={role}
        placeholder="Enter your role here"
        onChange={(e) => setRole(e.target.value)}
      />
      <button
        type="button"
        className="submit-button"
        onClick={() => {
          onClick(name, age, role);
          // Clear input after search
          setName("");
          setAge("");
          setRole("");
        }}
      >
        {label}
      </button>
    </>
  );
}
export default AddUserForm;
