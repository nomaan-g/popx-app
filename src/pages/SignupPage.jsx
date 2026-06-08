import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
import BackButton from '../components/BackButton';
import InputField from '../components/InputField';
import RadioGroup from '../components/RadioGroup';
import Button from '../components/Button';
import './SignupPage.css';

export default function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    agency: 'yes',
  });

  const updateField = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const requiredFields = [formData.fullName, formData.phone, formData.email, formData.password];
  const filledCount = requiredFields.filter((f) => f.trim() !== '').length;
  const progress = (filledCount / requiredFields.length) * 100;

  const isFormValid = filledCount === requiredFields.length;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/profile', { state: { user: formData } });
    }
  };

  return (
    <MobileFrame>
      <div className="signup">
        <div className="signup__top page-enter">
          <BackButton to="/" />
          <div className="signup__step">Step 3 of 4</div>
        </div>

        <div className="signup__progress page-enter page-enter-delay-1">
          <div className="signup__progress-bar" style={{ width: `${progress}%` }} />
        </div>

        <h1 className="signup__title page-enter page-enter-delay-1">
          Create your <span className="signup__highlight">PopX</span> account
        </h1>

        <form className="signup__form page-enter page-enter-delay-2" onSubmit={handleSubmit}>
          <InputField
            id="fullName"
            label="Full Name"
            required
            placeholder="Marry Doe"
            value={formData.fullName}
            onChange={updateField('fullName')}
          />
          <InputField
            id="phone"
            label="Phone number"
            required
            type="tel"
            placeholder="Marry Doe"
            value={formData.phone}
            onChange={updateField('phone')}
          />
          <InputField
            id="signupEmail"
            label="Email address"
            required
            type="email"
            placeholder="Marry Doe"
            value={formData.email}
            onChange={updateField('email')}
          />
          <InputField
            id="signupPassword"
            label="Password"
            required
            type="password"
            placeholder="Marry Doe"
            value={formData.password}
            onChange={updateField('password')}
          />
          <InputField
            id="company"
            label="Company name"
            placeholder="Marry Doe"
            value={formData.company}
            onChange={updateField('company')}
          />
          <RadioGroup
            label="Are you an Agency?"
            required
            value={formData.agency}
            onChange={(value) => setFormData((prev) => ({ ...prev, agency: value }))}
          />
          <Button type="submit" disabled={!isFormValid}>
            Create Account
          </Button>
        </form>
      </div>
    </MobileFrame>
  );
}
