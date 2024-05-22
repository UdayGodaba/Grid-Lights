import { useState } from "react";
import "./App.css";
import GridLights from "./components/GridLights";
import { configurations } from "./utils/gridConfigurations";

function App() {
  const [gridConfig, setGridConfig] = useState("config_A");

  return (
    <div
      className="app"
      style={{ "--length": configurations[gridConfig][0].length }}
    >
      <div className="heading">Grid Lights</div>
      <select
        className="selector"
        onChange={(e) => {
          setGridConfig(e.target.value);
        }}
      >
        {Object.keys(configurations).map((objectKey, idx) => (
          <option value={objectKey} key={idx}>
            {objectKey}
          </option>
        ))}
      </select>
      <GridLights grid={configurations[gridConfig]} />
      <div>
        <div className="subtitle-1">Instructions</div>
        <div className="subtitle-2">
          Select all the cells in any Order they will glow out in the way they
          are selected
        </div>
      </div>
    </div>
  );
}

export default App;
