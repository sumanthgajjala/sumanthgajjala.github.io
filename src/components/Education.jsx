export default function Education({ education }) {
  return (
    <section className="section-block education-section">
      <h2>Education</h2>
      <div className="education-grid">
        {education.map((item) => (
          <article key={item.school} className="education-item">
            <div className="education-head">
              <h3>{item.school}</h3>
              <span className="education-date">{item.date}</span>
            </div>
            <p className="education-degree">{item.degree}</p>
            <div className="education-meta">
              <span>{item.location}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
