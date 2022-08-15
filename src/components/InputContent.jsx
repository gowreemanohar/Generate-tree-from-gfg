import React, {useState}from 'react'
import TreeComponent from './TreeComponent.jsx'
import InputTree from './InputTree.jsx'
const InputContent = () => {
    const [inputvalue, setInputValue] = useState('1 2 3 N N 4 6 N 5 N N 7 N');
    const [treeData, settreeData] = useState(undefined);
    const [submitTree, setSubmitTree] = useState(false);

    

    const handleSubmit=(e)=>{
        e.preventDefault();
        setInputValue(inputvalue);
        setSubmitTree(true);
        // <TreeComponent inputvalue={inputvalue}/>
        // InputTree(inputvalue);
        // console.log(inputvalue);
    }

    const handleChange=(e)=>{
        setInputValue(e.target.value)
        setSubmitTree(false)
    }
    // console.log(treestring);
    
  return (
    <div className="m-10 px-40  ">
        <p className="shadow-sm border p-2 rounded-lg text-lg">Input Format:<br/>
        The tree in the input is given in the form of a string as described below. <br/>
        The values in the string are in the order of level order traversal of the tree where, numbers denote node values, and a character “N” denotes NULL child.
        <br/>
        For example:
        <p className="text-blue-600 inline-block"> &nbsp; 1 2 3 N N 4 6 N 5 N N 7 N</p>
        
</p>
<br/>
    <form onSubmit={handleSubmit}>
        <input value={inputvalue} onChange={handleChange} className="type-text drop-shadow shadow-md hover:shadow-lg bg-white-200 border w-full rounded-lg h-14 border-gray-300 text-xl placeholder-gray pl-10" placeholder="Enter Your GFG string here"/>
        <br/>
        <br/> 
        <div className="mx-96 ">
            <button className="p-4  text-white text-xl button bg-blue-500 shadow-lg hover:shadow-xl hover:bg-blue-600 hover:shadow-gray-400 rounded-lg shadow-gray-400 shadow-white-400"type="submit">Generate Tree</button>
        </div>
    </form>
    {submitTree===true?<TreeComponent inputvalue={inputvalue}/>:null}
    </div>
  )
}

export default InputContent