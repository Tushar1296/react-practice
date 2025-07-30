import "./Day07Card.css";
function UserCard({ id, name, age, role, onDelete }) {
  return (
    <div className="user-card">
      {name && <p className="user-name">{name}</p>}
      {age && <p className="user-age">Age: {age}</p>}
      {role && <p className="user-role">Role: {role}</p>}
      {onDelete && (
        <button className="delete-button" onClick={() => onDelete(id)}>
          Delete
        </button>
      )}
    </div>
  );
}
export default UserCard;
