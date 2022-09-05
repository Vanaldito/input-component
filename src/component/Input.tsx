import { EndIcon, StartIcon } from "./Icon";
import "./Input.css";

interface InputProps
  extends Omit<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "size"
  > {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  helperText?: string;
  size?: "sm" | "md" | "lg";
  color?: "default" | "primary" | "secondary" | "danger";
  fullWidth?: boolean;
  startIcon?: string;
  endIcon?: string;
}

export default function Input({
  label = "Label",
  error = false,
  disabled = false,
  helperText = "",
  size = "md",
  color = "default",
  fullWidth = false,
  startIcon,
  endIcon,
  ...inputAttributes
}: InputProps) {
  let className = "input-component";

  className += error ? " input-component--error" : "";
  className += disabled ? " input-component--disabled" : "";
  className += startIcon ? " input-component--with-start-icon" : "";
  className += endIcon ? " input-component--with-end-icon" : "";
  className += ` input-component--size-${size}`;
  className += ` input-component--color-${color}`;
  className += fullWidth ? " input-component--full-width" : "";

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
