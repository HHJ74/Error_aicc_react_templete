import React,{useState} from 'react';
import { Moon, Sun } from 'lucide-react';

const ModeCtrl = () => {
  const [darkMode,setDarkMode]=useState(true);
  
  return (
    <button onClick={()=>setDarkMode(!darkMode)}>
      {darkMode ? <Sun/> :<Moon/>}</button>
  )
}

export default ModeCtrl;