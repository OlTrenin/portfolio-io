import { useEffect,useRef } from "react";

import { useLocalStorage } from "./../../utils/useLocalStorage";
import {detectMode} from "../../utils/detectMode";
import sun from "./sun.svg";
import moon from "./moon.svg";

import "./btn-dark-mode.css"
export default function BtnDarkMode() {

    const [darkMode, setDarkMode] = useLocalStorage('darkMode', detectMode());

    const btnRef = useRef(null);
    
    useEffect(() => { 
        if(darkMode === 'dark') { 
            document.body.classList.add('dark')
            btnRef.current.classList.add('dark-mode-btn--active') 
        } else {
            document.body.classList.remove('dark') 
            btnRef.current.classList.remove('dark-mode-btn--active') 
        }
}, [darkMode])

    const toggleDarkmode = () => {
        setDarkMode((currentValue) => {
            return currentValue === 'light' ? 'dark' : 'light';
        })
    }

   return (
<button ref = {btnRef} className="dark-mode-btn" onClick={toggleDarkmode}> 
          <img
            src={sun}
            alt="Light mode"
            className="dark-mode-btn__icon"
          />
          <img
            src={moon}
            alt="Dark mode"
            className="dark-mode-btn__icon"
          />
        </button>
   ) 
}