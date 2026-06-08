import { useLocation } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import './ProfilePage.css';

const DEFAULT_USER = {
  fullName: 'Marry Doe',
  email: 'Marry@Gmail.Com',
};

export default function ProfilePage() {
  const location = useLocation();
  const user = location.state?.user ?? DEFAULT_USER;

  const displayName = user.fullName || DEFAULT_USER.fullName;
  const displayEmail = user.email || DEFAULT_USER.email;

  return (
    <MobileFrame>
      <div className="profile">
        <header className="profile__header">
          <h1 className="profile__title">Account Settings</h1>
        </header>
        <div className="profile__body">
          <div className="profile__user">
            <div className="profile__avatar-wrapper">
              <img
                className="profile__avatar"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face"
                alt={displayName}
              />
              <button type="button" className="profile__camera-btn" aria-label="Change photo">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
            </div>
          </div>
          <p className="profile__bio">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
          <div className="profile__placeholder" />
        </div>
      </div>
    </MobileFrame>
  );
}
