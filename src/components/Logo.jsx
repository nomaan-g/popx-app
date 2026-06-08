import './Logo.css';

export default function Logo({ size = 'md' }) {
  return (
    <div className={`logo logo--${size}`}>
      <div className="logo__icon">
        <span className="logo__dot" />
        <span className="logo__dot" />
        <span className="logo__dot" />
      </div>
      <span className="logo__text">PopX</span>
    </div>
  );
}
