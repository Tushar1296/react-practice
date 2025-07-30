import UserCard from "./UserCard";
import "./Day07Card.css";

function Day07Card() {
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
    <section className="day07-card">
      <h2>Day 7: User Card</h2>
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
        /* Alternatively, you can use the following syntax if you prefer to destructure props */
        /* <UserCard
           key={user.id}
           name={user.name}
           age={user.age}
           role={user.role}
         />*/
      ))}
    </section>
  );
}
export default Day07Card;
