import "./Input.css";

export default function Input({
  ...inputAttributes
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  const className = inputAttributes.className
    ? `${inputAttributes.className} input`
    : "input";

  return <input {...inputAttributes} className={className} />;
}
