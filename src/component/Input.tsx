import "./Input.css";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
}

export default function Input({
  label = "Label",
  ...inputAttributes
}: InputProps) {
  const className = "input-component";

  return (
    <label className={className}>
      {label}
      <input {...inputAttributes} />
    </label>
  );
}
