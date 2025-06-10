import React from "react";
import MainProps from "./Props/MainProps";
import MainStat from "./States/MainState";
import Greeting from "./Components/Greeting";
import WelcomMsg from "./Components/WelcomMsg";


function App() {
  return (
    <div className="App">
      {/* {This is Componemt Call } */}
      <h2>"This is Greeting Component..."</h2>
      <Greeting name="Manav" />
      <br />
      <h2>"This is Welcome Message Component..."</h2>
      <WelcomMsg />
      <br />
      {/* {This is Props Call} */}
      <h2>"This is Use Card Props..."</h2>
      <MainProps />
      <br />

      {/* {This is Stat Call} */}
      <h2>"This is Count Stat..." </h2>
      <MainStat />
    </div>
  );
}

export default App;

