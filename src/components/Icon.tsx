import "./Icon.css";

interface IconProps {
  iconName: string;
}

function Icon({ iconName }: IconProps) {
  return <span className="material-icons icon">{iconName}</span>;
}

export function StartIcon({ iconName }: IconProps) {
  return (
    <span className="start-icon">
      <Icon iconName={iconName} />
    </span>
  );
}

export function EndIcon({ iconName }: IconProps) {
  return (
    <span className="end-icon">
      <Icon iconName={iconName} />
    </span>
  );
}
