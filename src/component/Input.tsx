import "./Input.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
}

export default function Input({
  label = "Label",
  error = false,
  disabled = false,
  helperText = "",
  ...inputAttributes
}: InputProps) {
  let className = "input-component";

  className += error ? " input-component--error" : "";
  className += disabled ? " input-component--disabled" : "";

  return (
    <label className={className}>
      {label}
      <input {...inputAttributes} disabled={disabled} />
      <span className="helper-text">{helperText}</span>
    </label>
  );
}
