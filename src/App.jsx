import "./App.css";
import GridLights from "./components/GridLights";

function App() {
  const gridConfig = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  return (
    <div className="app" style={{ "--length": gridConfig[0].length }}>
      <div className="heading">Grid Lights</div>
      <GridLights grid={gridConfig} />
    </div>
  );
}

export default App;
