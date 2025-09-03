import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseEffect from "./UseEffect";

function App() {

  const [showButton, setShowButton] = useState(true)


  return (
    <>
      <button onClick={() => setShowButton(!showButton)}>{showButton ? "Hide" : "Show"}</button>
      {showButton ? (
        <UseEffect />
      ) : ""}
    </>
  );
}

export default App;

// Lifecycle of a component :
// 1. Initialization (No useEffect is triggered at this point of time)
// 2. Mounting (When the component appears on the screen)
// 3. Updating (When any state is updated in the component)
// 4. Unmounting (When the component goes from the screen)
