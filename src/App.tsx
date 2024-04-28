import { Greet } from "./components/greet/greet";
import { Application } from "./components/application/application";
function App() {
  return (
    <div className="App">
      <Greet name="Gaurav" />
      <Application />
    </div>
  );
}

export default App;
