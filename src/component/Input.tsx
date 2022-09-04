export default function Input({
  ...inputAttributes
}: React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>) {
  return <input {...inputAttributes} />;
}
