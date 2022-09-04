import "./Input.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: boolean;
}

export default function Input({
  label = "Label",
  error = false,
  ...inputAttributes
}: InputProps) {
  let className = "input-component";

  className += error ? " input-component--error" : "";

  return (
    <label className={className}>
      {label}
      <input {...inputAttributes} />
    </label>
  );
}
