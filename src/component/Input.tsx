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
  const className = inputAttributes.className
    ? `${inputAttributes.className} input`
    : "input";

  return (
    <label className="label">
      {label}
      <input {...inputAttributes} className={className} />
    </label>
  );
}
