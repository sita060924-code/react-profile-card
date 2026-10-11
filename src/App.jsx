import { useState } from 'react'
import './App.css'

function ProfileCard({ name, role, bio, skills }) {
  const [following, setFollowing] = useState(false)
  const [followers, setFollowers] = useState(256)

  function handleFollow() {
    setFollowing((previous) => !previous)
    setFollowers(following ? 256 : 257)
  }

  return (
    <article className="profile-card">
      <div className="profile-avatar">{name.charAt(0)}</div>

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
        onClick={handleFollow}
        aria-pressed={following}
      >
        {following ? 'Following' : 'Follow Me'}
      </button>

      <div className="profile-stats">
        <div className="stat">
          <strong>{followers}</strong>
          <span>FOLLOWERS</span>
        </div>

        <div className="stat-divider"></div>

        <div className="stat">
          <strong>124</strong>
          <span>FOLLOWING</span>
        </div>
      </div>

      <p className="profile-footer" aria-live="polite">
        {following
          ? 'Thanks for connecting!'
          : "Let's build something great."}
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