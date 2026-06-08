import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileFrame from '../components/MobileFrame';
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

  const isFormValid =
    formData.fullName.trim() !== '' &&
    formData.phone.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.password.trim() !== '';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate('/profile', { state: { user: formData } });
    }
  };

  return (
    <MobileFrame>
      <div className="signup">
        <h1 className="signup__title">Create your PopX account</h1>
        <form className="signup__form" onSubmit={handleSubmit}>
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
