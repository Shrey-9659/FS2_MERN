import React, { useEffect, useState } from "react";

const UseEffect = () => {
  const [primary, setPrimary] = useState(0);
  const [secondary, setSecondary] = useState(0);
  // Scenario 1 : No dependency array - runs everytime
  // useEffect(() => {
  //   alert("Use effect is triggered")
  // })

  // Scenario 2 : Empty dependency array
  //   useEffect(() => {
  //     alert("Use Effect is triggered - empty dependency array");
  //   }, []);

//   Scenario 3 : Dependency array
// useEffect(() => {
//     alert("Use Effect is triggered - dependency array")
// }, [primary])

// Scenario 4 : Running useEffect while unmounting
useEffect(() => {
    alert("mounting")
    return () => {
        alert("Component is unmounted")
    }
}, [])

  return (
    <div>
      <h1>Understanding useEffect Hook</h1>
      <hr />
      <h1>Primary : {primary}</h1>
      <h1>Secondary : {secondary}</h1>
      <h1></h1>
      <button onClick={() => setPrimary(primary + 1)}>Increase Primary</button>
      <button onClick={() => setSecondary(secondary + 1)}>
        Increase Secondary
      </button>
    </div>
  );
};

export default UseEffect;
