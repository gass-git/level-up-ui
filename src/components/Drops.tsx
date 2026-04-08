export default function Drops() {
  const drops = Array.from({ length: 5 });

  return (
    <div className="drops-container">
      {drops.map((_, i) => (
        <div
          key={i}
          className="water-drop"
          style={{
            left: `${Math.random() * 100}%`,
            animationDuration: `${1 + Math.random() * 2}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}
