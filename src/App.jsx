import "./App.css";
import HelloCard from "./components/day01/HelloCard";
import ActionButton from "./components/day01/ActionButtons";
import GreetingSection from "./components/day01/GreetingSection";
import HeaderSection from "./components/day01/HeaderSection";
import Day02Card from "./components/day02/Day02Card";
import Day03Card from "./components/day03/Day03Card";
import Day04Card from "./components/day04/Day04Card";
import Day05Card from "./components/day05/Day05Card";
import Day06Card from "./components/day06/Day06Card";
// import Day07Card from "./components/day07/Day07Card";
// import Day08Card from "./components/day08/Day08Card";
// import Day09Card from "./components/day09/Day09Card";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ToggleQuoteCard from "./components/day06/ToggleQuoteCard";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/day01" element={<HelloCard />} />
          <Route
            path="/day01header"
            element={
              <HeaderSection
                title="🔹 Using Props to Break Components"
                greeting="Hello, Tushar👋"
                subtext="Welcome to Day 01 of my React practice journey."
              />
            }
          />
          <Route
            path="/day01greet"
            element={
              <GreetingSection
                greeting="Hello, Tushar👋"
                message="Welcome to Day 01 of my React practice journey."
              />
            }
          />
          <Route
            path="/day01button"
            element={
              <ActionButton
                label="click"
                onClick={() => alert("button clicked")}
              />
            }
          />
          <Route path="/day02" element={<Day02Card />} />
          <Route path="/day03" element={<Day03Card />} />
          <Route path="/day04" element={<Day04Card />} />
          <Route path="/day05" element={<Day05Card />} />
          <Route path="/day06" element={<Day06Card />} />
          {/* <Route path="/day07" element={<Day07Card />} /> */}
          {/* <Route path="/day08" element={<Day08Card />} /> */}
          {/* <Route path="/day09" element={<Day09Card />} /> */}
          {/* Add more routes here as needed */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
