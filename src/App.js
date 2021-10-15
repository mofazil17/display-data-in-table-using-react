import React ,{useState,useEffect} from 'react';
import './style.css';
import SearchandTable from './Search';
import Preloader  from './Preloader'

export default function App() {
  const [loading,setloading] = useState(false);

  useEffect(()=>{
    setloading(true)
    setTimeout(()=>{
      setloading(false)
    },5000);
  },[]);
  return (
    <div className="main">
       {/* {loading?<Preloader loading={loading}/>:<SearchandTable/>}      */}
       <Preloader/>
    </div>
  );
}
