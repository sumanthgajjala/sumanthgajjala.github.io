export const portfolioData = {
  name: 'Sumanth Gajjala',
  subtitle: 'Software Engineer',
  location: 'Albany, NY',
  intro:
    'I build backend services and modern web experiences, with a focus on clean architecture, automation, and user-centered product development.',
  contact: [
    { label: 'Email', href: 'mailto:sgajjala8@gatech.edu' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sumanthgajjala' },
    { label: 'GitHub', href: 'https://github.com/sumanthgajjala' },
  ],
  topTech: [
    { name: 'Java', iconClass: 'devicon-java-plain-wordmark colored' },
    { name: 'Python', iconClass: 'devicon-python-plain-wordmark colored' },
    { name: 'JavaScript', iconClass: 'devicon-javascript-plain colored' },
    { name: 'React', iconClass: 'devicon-react-original-wordmark colored' },
    { name: 'Node.js', iconClass: 'devicon-nodejs-plain-wordmark colored' },
    { name: 'Vue.js', iconClass: 'devicon-vuejs-plain-wordmark colored' },
    { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain-wordmark colored' },
    { name: 'Docker', iconClass: 'devicon-docker-plain-wordmark colored' },
    { name: 'PostgreSQL', iconClass: 'devicon-postgresql-plain-wordmark colored' },
    { name: 'MongoDB', iconClass: 'devicon-mongodb-plain-wordmark colored' },
    { name: 'GitHub Copilot', iconClass: 'devicon-github-original' },
    { name: 'Maven', iconClass: 'devicon-apache-plain-wordmark colored' },
    { name: 'Git', iconClass: 'devicon-git-plain-wordmark colored' },
  ],
  skills: [
    { category: 'Languages', items: 'Java, Python, JavaScript, HTML/CSS, SQL' },
    {
      category: 'Frameworks',
      items: 'JAX-RS (Jersey), Jackson, React, Node.js, Vue.js, Express.js, Bootstrap',
    },
    {
      category: 'Tools',
      items: 'Git, GitHub Copilot, Maven, Node-RED, Docker, AWS, DigitalOcean, Subversion',
    },
    {
      category: 'Data / Testing',
      items: 'Postgres, SQL Server, MongoDB, JUnit, Jest, Pandas, NumPy, Matplotlib',
    },
  ],
  experience: [
    {
      title: 'Software Engineer / Associate Software Engineer',
      company: 'Illumia',
      date: 'March 2022 - Present',
      bullets: [
        'Modernized platform architecture by helping transition core services away from monolithic patterns.',
        'Standardized Java builds across multiple projects using Maven and integrated automated testing pipelines.',
        'Built and maintained REST APIs with Java, JAX-RS (Jersey), and Jackson.',
        'Led backend development of a Reservation Management System and integrated with Vue.js + Quasar frontend.',
        'Designed AWS serverless integrations using API Gateway, EventBridge, Lambda, and Serverless RDS.',
      ],
    },
    {
      title: 'Cloud/Web Developer',
      company: 'Ventur',
      date: 'May 2021 - December 2021',
      bullets: [
        'Managed cloud infrastructure across AWS and DigitalOcean.',
        'Developed scalable cross-platform app experiences with Capacitor and Nuxt.js.',
        'Integrated Firebase Cloud Messaging and Google Maps features for real-time and location-based workflows.',
        'Built REST API features with ParseJS for authentication, data storage, and live query support.',
      ],
    },
  ],
  education: [
    {
      school: 'Georgia Institute of Technology',
      degree: 'Masters in Artificial Intelligence',
      location: 'Atlanta, GA',
      date: 'August 2022 - Present',
    },
    {
      school: 'Rensselaer Polytechnic Institute',
      degree: 'Bachelors in Computer Science',
      location: 'Troy, NY',
      date: 'August 2017 - May 2021',
    },
  ],
}
