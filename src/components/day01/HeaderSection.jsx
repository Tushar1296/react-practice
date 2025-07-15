function HeaderSection({ title, name, message }) {
  return (
    <div className="header-section">
      <h3>{title}</h3>
      <h1>Hello, {name} 👋</h1>
      <p>{message}</p>
    </div>
  );
}
export default HeaderSection;
