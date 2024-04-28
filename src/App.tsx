// import { Greet } from "./components/greet/greet";
// import { Application } from "./components/application/application";
import Skills from "./components/skills/skills";
function App() {
  return (
    <div className="App">
      {/* <Greet name="Gaurav" />
      <Application /> */}
      <Skills skills={['HTML', 'CSS']} />
    </div>
  );
}

export default App;
