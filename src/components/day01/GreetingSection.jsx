function GreetingSection({ greeting, message }) {
  return (
    <section className="greeting-section">
      <p>{greeting}</p>
      <p>{message}</p>
    </section>
  );
}

export default GreetingSection;
