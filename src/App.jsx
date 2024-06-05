import "./App.css";
import UseContext from "./components/UseContext";
import UseEffect from "./components/UseEffect";
import UseMemo from "./components/UseMemo";
import UseRef from "./components/UseRef";
import UseState from "./components/UseState";

function App() {
  return (
    <div>
      <UseState />
      <hr />
      <UseEffect />
      <hr />
      <UseRef />
      <hr />
      <UseMemo />
      <hr />
      <UseContext />
    </div>
  );
}

export default App;
