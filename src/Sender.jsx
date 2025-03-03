import { useEffect, useState } from "react";
import { createWebSocket } from "./websocket";

function Sender() {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    document.title = 'Semafor - Sender';
  }, []);

  useEffect(() => {
    const socket = createWebSocket(() => {});
    setWs(socket);

    return () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.close();
        }
      };
    
  }, []);

  const sendColor = (color) => {
    if (ws && ws.redyState === WebSocket.OPEN) ws.send(color);
    else
    {
        alert("Disconnetcted");
    }
  };

  return (
    <div>
      <h2>Sender</h2>
      <button onClick={() => sendColor("green")}>Green</button>
      <button onClick={() => sendColor("orange")}>Orange</button>
      <button onClick={() => sendColor("red")}>Red</button>
    </div>
  );
}

export default Sender;
