import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card"
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-500 text-white p-5 rounded-lg">
        Tailwind
      </h1>
     <Card userName = "SP Singh" btnText ="Clicked me " content ="Automate simple, repetitive tasks such as data entry, report generation, and email responses, freeing up your team to focus on more strategic activities."/>
     <Card userName = "MP Singh" btnText ="Visit me " content ="Leverage cutting-edge technologies like AI, machine learning, and robotic process automation (RPA) to automate complex tasks and enhance decision-making processes."/>
    
    </>
  );
}

export default App;
