import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import BackButton from '../components/BackButton';
import InputField from '../components/InputField';
import Button from '../components/Button';
import './LoginPage.css';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isFormValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = () => {
    if (isFormValid) {
      navigate('/profile');
    }
  };

  return (
    <MobileFrame>
      <div className="login">
        <div className="login__top page-enter">
          <BackButton to="/" />
          <div className="login__step">Step 2 of 4</div>
        </div>

        <div className="login__header page-enter page-enter-delay-1">
          <div className="login__icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" stroke="white" strokeWidth="2" />
              <path d="M7 11V7a5 5 0 0110 0v4" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <h1 className="login__title">Signin to your PopX account</h1>
          <p className="login__subtitle">
            Enter your credentials to access your account and pick up where you left off.
          </p>
        </div>

        <form
          className="login__form page-enter page-enter-delay-2"
          onSubmit={(e) => {
            e.preventDefault();
            handleLogin();
          }}
        >
          <InputField
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" disabled={!isFormValid}>
            Login
          </Button>
        </form>
      </div>
    </MobileFrame>
  );
}
