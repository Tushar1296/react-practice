import Form from "./Form";
function Day05Card() {
  const handleClick = (text) => {
    console.log("Button clicked!");
    console.log("Submitted text: ", { text });
    alert(`You submitted: ${text}`);
  };

  return (
    <div>
      <h2>Day 05 Card Component</h2>
      <Form label={"Submit"} onClick={handleClick} />
    </div>
  );
}

export default Day05Card;
