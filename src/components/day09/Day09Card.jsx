import Grid from "./Grid";
import "./Day09Card.css";
import UserCard from "../day07/UserCard";

function Day09Card() {
  const users = [
    {
      id: 1,
      name: "Tushar Srivastava",
      age: 28,
      role: "Software Engineer",
    },
    {
      id: 2,
      name: "Sakshi Srivastava",
      age: 28,
      role: "Software Engineer",
    },
    {
      id: 3,
      name: "Cristiano Ronaldo",
      age: 40,
      role: "Greatest Footballer",
    },
    {
      id: 4,
      name: "Gareth Bale",
      age: 35,
      role: "Greatest Welsh Footballer",
    },
    {
      id: 5,
      name: "Neymar Jr.",
      age: 32,
      role: "Greatest Brazilian Footballer",
    },
  ];
  return (
    <div className="day09-card">
      <h2>Day 9: Reuasble Grid</h2>
      <h3>Reusable Grid Component</h3>
      {/*two ways to do the same thing */}
      <Grid gap={40}>
        <UserCard name="Tushar" age={28} role="Engineer" />
        <UserCard name="Ronaldo" age={40} role="GOAT" />
        <UserCard name="Bale" age={35} role="Wizard" />
        <UserCard name="Messi" age={38} role="wanna be goat" />
      </Grid>
      <h3>Reusable Grid with Dynamic Data</h3>
      {/* When we have alist and we dont know the number of items in advance. */}
      <Grid gap={40}>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </Grid>
    </div>
  );
}

export default Day09Card;
