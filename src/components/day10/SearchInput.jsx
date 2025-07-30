import Form from "../day05/Form";
import "./SearchInput.css";

function SearchInput({ onSearch, users }) {
  const handleClick = (inputText) => {
    onSearch(inputText); // pass the text to parent
  };
  return (
    <section className="search-container">
      <Form label="Search" onClick={handleClick} isSearch users={users} />
    </section>
  );
}
export default SearchInput;
