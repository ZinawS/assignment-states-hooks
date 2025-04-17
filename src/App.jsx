import React from "react";

import MyCounter from "./components/ClassBaseCounter/MyCounter";
import IncreaseDecreaseCount from "./components/FunctionBasedComponent/IncreaseDecreaseCount";
import UseEffectForTitle from "./components/FunctionBasedComponent/UseEffectForTitle";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <MyCounter />
      <IncreaseDecreaseCount />
      <UseEffectForTitle />
    </>
  );
}

export default App;
