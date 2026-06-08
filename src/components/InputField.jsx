import './InputField.css';

export default function InputField({
  id,
  label,
  required = false,
  type = 'text',
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="input-field">
      <label htmlFor={id} className="input-field__label">
        {label}
        {required && <span className="input-field__required">*</span>}
      </label>
      <input
        id={id}
        type={type}
        className="input-field__input"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
