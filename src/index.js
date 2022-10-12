import React from "react";
import ReactDOM from "react-dom";
import Card from "./Card";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);

const data = {
  num: "1234 3456 5678 9123",
  cardholder: "Thili Rabi",
  bank: "Kamil Munir Bank.",
  expiry: "32/27",
};

ReactDOM.render(
  <React.StrictMode>
    <Card cardInfo={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
