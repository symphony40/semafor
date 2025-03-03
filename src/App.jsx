import { useState } from "react";
import Sender from "./Sender";
import Viewer from "./Viewer";

function App() {
  const [mode, setMode] = useState(null);

  if (!mode)
    return (
      <div>
        <h1>Mode:</h1>
        <button onClick={() => setMode("sender")}>Sender</button>
        <button onClick={() => setMode("viewer")}>Viewer</button>
      </div>
    );
  if (mode == "sender")
    return (<Sender />);
  else
    return (<Viewer />);
}

export default App;
