import experience from "../content/experience.json";

export default function Experience() {
  return (
    <div style={{ padding: 40 }}>
      <h1>Experience</h1>

      {experience.map((item, i) => (
        <div key={i} style={{ marginBottom: 30 }}>
          <h2>{item.title}</h2>
          <h3>{item.role}</h3>
          <p>{item.description.en}</p>
        </div>
      ))}
    </div>
  );
}
