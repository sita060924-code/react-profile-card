
import { useState } from 'react'
import './App.css'

function ProfileCard({ name, role, bio, skills }) {
  const [following, setFollowing] = useState(false)

  return (
    <article className="profile-card">
      <div className="profile-avatar">
        {name.charAt(0)}
      </div>

      <p className="profile-label">DEVELOPER PROFILE</p>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p className="profile-bio">{bio}</p>

      <div className="skills">
        {skills.map((skill) => (
          <span className="skill" key={skill}>
            {skill}
          </span>
        ))}
      </div>

      <button
        className="follow-button"
        onClick={() => setFollowing(!following)}
      >
        {following ? 'Following' : 'Follow Me'}
      </button>

      <p className="profile-footer">
        {following ? 'Thanks for connecting!' : 'Let’s build something great.'}
      </p>
    </article>
  )
}

function App() {
  return (
    <main className="app-container">
      <ProfileCard
        name="Vaidhahi Jadhav"
        role="Aspiring Software Developer"
        bio="I love learning new technologies, building websites, and turning ideas into real projects."
        skills={['HTML', 'CSS', 'JavaScript', 'React', 'Python']}
      />
    </main>
  )
}

export default App
