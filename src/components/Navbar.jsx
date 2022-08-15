import React, {useState}from 'react'
import Links from './Links';
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
               <p className=''>
                    GFG Tree Visualizer
                </p>
                <p>
                    <button  onClick={handleClick}>Links</button>
                </p>
                
        </div> 
        
    </div>
    {account===true?<Links/>:null}
    </div>
  )
}

export default Navbar