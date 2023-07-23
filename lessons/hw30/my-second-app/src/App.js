import "./App.css";
import Button from "./components/Button/Button";
import Smilelist from "./components/Smilelist/Smilelist";

function App() {
  return (
    <div className="App">
      <Smilelist />
      <Button>Show Result</Button>
    </div>
  );
}

export default App;
