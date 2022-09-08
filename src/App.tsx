import Input from "./component/Input";

import "./App.css";

export default function App() {
  return (
    <div className="inputs">
      <Input
        type="text"
        placeholder="Placeholder"
        helperText="Some interesting text"
      />
      <Input
        type="text"
        placeholder="Placeholder"
        helperText="Some interesting text"
        color="primary"
      />
      <Input
        type="text"
        placeholder="Placeholder"
        helperText="Some interesting text"
        color="secondary"
      />
      <Input
        type="text"
        placeholder="Placeholder"
        helperText="Some interesting text"
        color="danger"
      />
    </div>
  );
}
