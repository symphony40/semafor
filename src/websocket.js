export function createWebSocket(onMessage) {
    const ws = new WebSocket("ws://localhost:65432");
  
    ws.onopen = () => console.log("Connected to WebSocket");
    ws.onmessage = (event) => onMessage(event.data);
    ws.onclose = () => console.log("WebSocket closed");
  
    return ws;
  }
  