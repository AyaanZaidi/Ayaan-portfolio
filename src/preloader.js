import {useState, CSSProperties , useEffect } from "react";
import { preLoaderAnim } from './animations'
import ClockLoader  from "react-spinners/ClockLoader";
import "./preloader.css";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

function App() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");


  useEffect(() => {
    preLoaderAnim()
  }, [])
  return (
    <div className='preloader'>
    {/* <div className='texts-container'> */}
      {/* <span>Freelancer,</span>
      <span>fronted Developer,</span>
      <span>Backend Developer.</span> */}
      <ClockLoader color="#fff" 
        loading={loading}
        cssOverride={override}
        size={200}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    {/* </div> */}
  </div>
  );
}

export default App;
