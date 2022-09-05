import Input from "./component/Input";

import "./App.css";

export default function App() {
  return (
    <div className="inputs">
      <Input
        type="text"
        placeholder="Placeholder"
        helperText="Some interesting text"
        startIcon="phone"
      />
      <Input
        type="text"
        placeholder="Placeholder"
        helperText="Some interesting text"
        endIcon="lock"
      />
    </div>
  );
}
