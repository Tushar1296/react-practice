import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import LiveClock from "../day08/LiveClock";
import UserCard from "../day07/UserCard";
import AddUserForm from "./AddUserForm";
import Grid from "../day09/Grid";
import "./Day10Card.css";
import SearchInput from "./SearchInput";
function Dashboard() {
  const [users, setUsers] = useState([
    { id: 1, name: "Tushar Srivastava", age: 28, role: "Software Engineer" },
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
  ]);

  const [filteredUsers, setFilteredUsers] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [message, setMessage] = useState("");

  const handleClick = (name, age, role) => {
    console.log("Button clicked!");
    console.log("Submitted name: ", { name });
    console.log("Submitted age: ", { age });
    console.log("Submitted role: ", { role });
    if (!name.trim() || !age.trim() || !role.trim()) {
      alert("Please fill out all fields.");
      return;
    }

    const newUser = {
      //   id: Date.now(), // or use a UUID lib for better uniqueness
      id: uuidv4(),
      name,
      age,
      role,
    };
    setUsers([...users, newUser]);
    setMessage("User added!");
    setTimeout(() => setMessage(""), 2000);
  };

  const handleSearch = (searchTerm) => {
    console.log("Searching for: ", searchTerm);

    setHasSearched(true);

    if (!searchTerm.trim()) {
      setHasSearched(false);
      //   setFilteredUsers(users); // reset if input is empty
      setFilteredUsers([]); // or maybe show all?
      return;
    }

    const filtered = users.filter((user) => {
      return (
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.role.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setFilteredUsers(filtered);
  };

  const handleDelete = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    setUsers(updatedUsers);
    if (hasSearched) {
      const updatedFiltered = filteredUsers.filter((user) => user.id !== id);
      setFilteredUsers(updatedFiltered);
    }
  };

  return (
    <div className="dashboard-card">
      <h2 className="dashboard-title">Mini Dashboard</h2>
      <LiveClock />

      <section className="dashboard-section">
        <h2>Add User</h2>
        <AddUserForm label="Add User" onClick={handleClick} />
        {message && <p className="status-message">{message}</p>}
      </section>

      <section className="dashboard-section">
        <h2>Search User</h2>
        <SearchInput onSearch={handleSearch} users={users} />
      </section>

      {hasSearched && (
        <section className="dashboard-section">
          <h2>Search Results</h2>
          {filteredUsers.length > 0 ? (
            <Grid gap={40}>
              {filteredUsers.map((user) => (
                <UserCard key={user.id} {...user} onDelete={handleDelete} />
              ))}
            </Grid>
          ) : (
            <p>No user found.</p>
          )}
        </section>
      )}

      <section className="dashboard-section">
        <h2>All Users</h2>
        <Grid gap={40}>
          {users.map((user) => (
            <UserCard key={user.id} {...user} onDelete={handleDelete} />
          ))}
        </Grid>
      </section>
    </div>
  );
}
export default Dashboard;
