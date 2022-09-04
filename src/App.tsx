import Input from "./component/Input";

import "./App.css";

export default function App() {
  return (
    <div className="inputs">
      <Input type="text" placeholder="Placeholder" />
      <Input placeholder="Placeholder" error />
    </div>
  );
}
