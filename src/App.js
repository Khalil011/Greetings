import React from "react";
import "./styles.css";

const App = () => {
  const curDate = new Date().getHours();
  const displayDate = () => {
    if (curDate >= 6 && curDate < 12) {
      return <h1>GoodMorning</h1>;
    } else if (curDate >= 12 && curDate <= 19) {
      return <h1>GoodAfterNoon</h1>;
    } else {
      return <h1>GoodNight</h1>;
    }
  };
  return (
    <div className="App">
      <div>{displayDate()}</div>
    </div>
  );
};
export default App;
