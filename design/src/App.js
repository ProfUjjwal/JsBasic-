import { useState } from "react";
import TakeInput from "./components/TakeInput";
import ShowInfo from "./components/ShowInfo";

function App() {
  const [peps, setPeps] = useState([
    // {
    //   img: "./image/Profile_image.webp",
    //   Name: "ujjwal",
    //   Email: "ujjwal@xyz.com", 
    //   Phone: "9999999999",
    // }
  ]);

  return (
    <div div className='flex justify-around'>
      
      <div>
        <TakeInput peps={peps} setPeps={setPeps}></TakeInput>
      </div>

      <div>
        <ShowInfo peps={peps} setPeps={setPeps}></ShowInfo>
      </div>

    </div>
  );
}

export default App;
