import "./App.css";
import { Button } from "./components/Button/";
import { ProductList } from "./components/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <ProductList />
      <Button>Button</Button>
    </div>
  );
}

export default App;
