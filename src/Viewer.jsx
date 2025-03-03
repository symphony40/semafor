import { useEffect, useState } from "react";
import { createWebSocket } from "./websocket";

function Viewer() {
  const [color, setColor] = useState("white");

  useEffect(() => {
    document.title = 'Semafor - Viewer';
  }, []);

  useEffect(() => {
    const socket = createWebSocket((message) => {
      setColor(message);
    });
    
    return () => {
        if (socket && socket.readyState === WebSocket.OPEN) {
          socket.close();
        }
      };
    
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  if (color == "white")
    return (
        <h1>You are now viewer, please select color</h1>
    );
}

export default Viewer;
