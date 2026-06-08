import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import Button from '../components/Button';
import './LandingPage.css';

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <MobileFrame>
      <div className="landing">
        <div className="landing__content">
          <h1 className="landing__title">Welcome to PopX</h1>
          <p className="landing__subtitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          </p>
          <div className="landing__actions">
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
