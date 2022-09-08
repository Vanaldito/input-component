import Input from "./component/Input";

import "./App.css";

export default function App() {
  return (
    <div className="inputs">
      <Input
        placeholder="Placeholder"
        helperText="Some interesting text"
        multiline
        rows={4}
      />
      <Input
        placeholder="Placeholder"
        helperText="Some interesting text"
        fullWidth
        multiline
        rows={5}
        disabled
      />
    </div>
  );
}
