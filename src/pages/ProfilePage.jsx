import { useLocation } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './ProfilePage.css';

const DEFAULT_USER = {
  fullName: 'Marry Doe',
  email: 'Marry@Gmail.Com',
};

const SETTINGS = [
  {
    icon: '🔔',
    label: 'Notifications',
    desc: 'Manage alerts & updates',
  },
  {
    icon: '🔒',
    label: 'Privacy',
    desc: 'Control your data',
  },
  {
    icon: '🎨',
    label: 'Appearance',
    desc: 'Theme & display',
  },
];

export default function ProfilePage() {
  const location = useLocation();
  const user = location.state?.user ?? DEFAULT_USER;

  const displayName = user.fullName || DEFAULT_USER.fullName;
  const displayEmail = user.email || DEFAULT_USER.email;

  return (
    <MobileFrame>
      <div className="profile">
        <header className="profile__hero page-enter">
          <div className="profile__hero-bg" />
          <h1 className="profile__title">Account Settings</h1>
          <div className="profile__user">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__avatar"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face"
                alt={displayName}
              />
              <button type="button" className="profile__camera-btn" aria-label="Change photo">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2" />
                </svg>
              </button>
            </div>
            <div className="profile__info">
              <h2 className="profile__name">{displayName}</h2>
              <p className="profile__email">{displayEmail}</p>
              <span className="profile__badge">Pro Member</span>
            </div>
          </div>
        </header>

        <div className="profile__body">
          <div className="profile__stats page-enter page-enter-delay-1">
            <div className="profile__stat">
              <span className="profile__stat-value">128</span>
              <span className="profile__stat-label">Projects</span>
            </div>
            <div className="profile__stat-divider" />
            <div className="profile__stat">
              <span className="profile__stat-value">4.9</span>
              <span className="profile__stat-label">Rating</span>
            </div>
            <div className="profile__stat-divider" />
            <div className="profile__stat">
              <span className="profile__stat-value">2yr</span>
              <span className="profile__stat-label">Member</span>
            </div>
          </div>

          <p className="profile__bio page-enter page-enter-delay-2">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>

          <div className="profile__settings page-enter page-enter-delay-3">
            {SETTINGS.map((item) => (
              <button key={item.label} type="button" className="profile__setting-card">
                <span className="profile__setting-icon">{item.icon}</span>
                <div className="profile__setting-text">
                  <span className="profile__setting-label">{item.label}</span>
                  <span className="profile__setting-desc">{item.desc}</span>
                </div>
                <svg className="profile__setting-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
