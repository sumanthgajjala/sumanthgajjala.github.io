export default function Experience({ experience }) {
  return (
    <section className="section-block experience-section">
      <h2>Experience Highlights</h2>
      {experience.map((job) => (
        <article key={job.company + job.date} className="experience-item">
          <div className="experience-head">
            <div>
              <h3>{job.title}</h3>
              <p>{job.company}</p>
            </div>
            <span>{job.date}</span>
          </div>
          <ul>
            {job.bullets.map((bullet) => (
              <li key={`${job.company}-${bullet}`}>{bullet}</li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  )
}
