import { useEffect, useState } from "react";
import "./Day08Card.css";

function LiveClock() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return <div className="live-clock">{currentTime.toLocaleTimeString()}</div>;
}

export default LiveClock;
