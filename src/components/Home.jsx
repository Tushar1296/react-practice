import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <h1>🎯 React Practice Index</h1>
      <ul>
        <li>
          <Link to="/day01">Day - 01 HelloCard</Link>
        </li>
        <li>
          <Link to="/day01header">Day - 01 Header Section</Link>
        </li>
        <li>
          <Link to="/day01greet">Day - 01 Greet Section</Link>
        </li>
        <li>
          <Link to="/day01button">Day - 01 Button Section</Link>
        </li>
        <li>
          <Link to="/day02">Day - 02 Card</Link>
        </li>
        <li>
          <Link to="/day03">Day - 03 Card components</Link>
        </li>
        <li>
          <Link to="/day04">Day - 04 Like Card</Link>
        </li>
        <li>
          <Link to="/day05">Day - 05 Event Handling</Link>
        </li>
        <li>
          <Link to="/day06">Day - 06 Conditional Rendering</Link>
        </li>
        <li>
          <Link to="/day07">Day - 07 Lists & Keys</Link>
        </li>
        <li>
          <Link to="/day08">Day - 08 Live Clock</Link>
        </li>
        <li>
          <Link to="/day09">Day - 09 Reusable Grid</Link>
        </li>
        <li>
          <Link to="/day10">Day - 10 Mini Dashboard</Link>
        </li>
        <li>
          <Link to="/todos">Day - 11 To-Do List</Link>
        </li>
        <li>
          <Link to="/calc">Day - 12 Calculator</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
