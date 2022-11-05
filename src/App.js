import { Score } from "react-vexflow";

import "./styles.css";
import Example from "./Example";

export default function App() {
  return (
    <div className="App">
      <Example />
      <Score
        staves={[
          ["c4", "d5", "e4", "d4"],
          ["a4", "d4", "e4", "d4"],
          ["a4", "a4", "b4", "a4"],
          [["g4", 1]]
        ]}
      />
    </div>
  );
}
