export default function Skills({ skills }) {
  return (
    <section className="section-block skills-section">
      <h2>Skills</h2>
      <div className="skill-list">
        {skills.map((skill) => (
          <p key={skill.category}>
            <strong>{skill.category}:</strong> {skill.items}
          </p>
        ))}
      </div>
    </section>
  )
}
