import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Logo from '../components/Logo';
import Button from '../components/Button';
import './LandingPage.css';

const FEATURES = ['Fast', 'Secure', 'Simple'];

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame variant="hero">
      <div className="landing">
        <div className="landing__hero page-enter">
          <div className="landing__blob landing__blob--1" />
          <div className="landing__blob landing__blob--2" />
          <div className="landing__blob landing__blob--3" />
          <div className="landing__hero-content">
            <Logo size="lg" />
            <div className="landing__badge">✨ New experience</div>
          </div>
        </div>

        <div className="landing__content">
          <h1 className="landing__title page-enter page-enter-delay-1">
            Welcome to <span className="landing__highlight">PopX</span>
          </h1>
          <p className="landing__subtitle page-enter page-enter-delay-2">
            Your all-in-one platform to connect, grow, and manage your business effortlessly.
          </p>

          <div className="landing__features page-enter page-enter-delay-2">
            {FEATURES.map((feature) => (
              <span key={feature} className="landing__feature-pill">
                {feature}
              </span>
            ))}
          </div>

          <div className="landing__actions page-enter page-enter-delay-3">
            <Button onClick={() => navigate('/signup')}>Create Account</Button>
            <Button variant="secondary" onClick={() => navigate('/login')}>
              Already Registered? Login
            </Button>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
