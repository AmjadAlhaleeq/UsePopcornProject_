import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import StarRating from "./StarRating";
// function Test() {
//   const [count, setCount] = useState(0);
//   function handleCount(count) {
//     setCount(count);
//   }
//   return (
//     <div>
//       <StarRating color="blue" maxRating={10} onCount={handleCount} />
//       <p>
//         This movies was rated <strong>{count}</strong> stars💫
//       </p>
//     </div>
//   );
// }
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okey", "Good", "Amazing 💫"]}
    />
    <StarRating size={24} color="red" className="test" defaultRating={3} />
    {/* <StarRating maxRating={10} />
    <StarRating /> */}
    {/* <Test />  */}
  </React.StrictMode>
);
