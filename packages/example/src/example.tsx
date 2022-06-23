import React from "react";
import ReactDOMClient from "react-dom/client";

const Root = () => (
  <div>test</div>
);

const rootElement = document.getElementById("root");
ReactDOMClient.createRoot(rootElement as any).render(<Root />);