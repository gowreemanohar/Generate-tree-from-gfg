import React, {useState}from 'react'
import Links from './Links';
import {ImLink} from "react-icons/im"
const Navbar = () => {
  const [account,setAccount]=useState(false);
  const handleClick=(e)=>{
    // if(account===false)
      setAccount(!account);
  }



  return (
    <div>
    <div className=" bg-blue-500  rounded-lg   z-40 fixed top-0 md:w-screen w-screen">
        <div className="text-white text-lg font-bold flex justify-around shadow-lg shadow-blue-400/50 p-5 relative">  
               <p className='text-3xl text-bold drop-shadow-xl'>
                    GFG Tree Visualizer
                </p>
                <p>
                    <button className="text-2xl text-bold" onClick={handleClick}><ImLink color="bold" fontWeight="bold"/></button>
                </p>
                
        </div> 
        
    </div>
    {account===true?<Links/>:null}
    </div>
  )
}

export default Navbar