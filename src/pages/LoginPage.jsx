import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
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
        <h1 className="login__title">Signin to your PopX account</h1>
        <p className="login__subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <form
          className="login__form"
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
