import Form from "./Form";
function Day05Card() {
  const handleClick = (text) => {
    console.log("Button clicked!");
    console.log("Submitted text: ", { text });
    alert(`You submitted: ${text}`);
  };

  return (
    <div>
      <h1>Day 05 Card Component</h1>
      <Form label={"Submit"} onClick={handleClick} />
    </div>
  );
}

export default Day05Card;
