import profileImage from '../assets/profile.jpg'

export default function Hero({ name, subtitle, location, intro, contact }) {
  return (
    <header className="hero">
      <div className="hero-copy">
        <h1>{name}</h1>
        <p className="subtitle">
          {subtitle} | {location}
        </p>
        <p className="intro">{intro}</p>
        <div className="contact-links">
          {contact.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer">
              {item.label}
            </a>
          ))}
        </div>
      </div>
      <img className="profile-image" src={profileImage} alt="Sumanth Gajjala" />
    </header>
  )
}
