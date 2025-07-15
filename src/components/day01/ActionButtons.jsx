function ActionButton({ label, onClick }) {
  return (
    <button type="button" className="action-button" onClick={onClick}>
      {label}
    </button>
  );
}
export default ActionButton;
