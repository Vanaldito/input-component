import { EndIcon, StartIcon } from "./Icon";
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
  startIcon?: string;
  endIcon?: string;
}

export default function Input({
  label = "Label",
  error = false,
  disabled = false,
  helperText = "",
  startIcon,
  endIcon,
  ...inputAttributes
}: InputProps) {
  let className = "input-component";

  className += error ? " input-component--error" : "";
  className += disabled ? " input-component--disabled" : "";
  className += startIcon ? " input-component--with-start-icon" : "";
  className += endIcon ? " input-component--with-end-icon" : "";

  return (
    <label className={className}>
      {label}
      <div className="field">
        {startIcon && <StartIcon iconName={startIcon} />}
        <input {...inputAttributes} disabled={disabled} />
        {endIcon && <EndIcon iconName={endIcon} />}
      </div>
      <span className="helper-text">{helperText}</span>
    </label>
  );
}
