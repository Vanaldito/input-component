import "./Input.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: boolean;
  disabled?: boolean;
}

export default function Input({
  label = "Label",
  error = false,
  disabled = false,
  ...inputAttributes
}: InputProps) {
  let className = "input-component";

  className += error ? " input-component--error" : "";
  className += disabled ? " input-component--disabled" : "";

  return (
    <label className={className}>
      {label}
      <input {...inputAttributes} disabled={disabled} />
    </label>
  );
}
