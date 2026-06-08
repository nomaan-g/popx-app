import './Button.css';

export default function Button({
  children,
  variant = 'primary',
  disabled = false,
  type = 'button',
  onClick,
}) {
  return (
    <button
      type={type}
      className={`btn btn--${variant}${disabled ? ' btn--disabled' : ''}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
