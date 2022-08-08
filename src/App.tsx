import "./styles.css";
import Start from "./components/Start";
import OnNewCondition from "./components/OnNewCondition";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Start />
      <h1>Hello Drag&Drop</h1>
      <OnNewCondition />
    </div>
  );
}
