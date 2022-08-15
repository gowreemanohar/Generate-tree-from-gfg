import React from 'react'
import Tree from 'react-d3-tree';
import './custom-tree.css';


function insertValue(value,map,queue){
  let temp;
  if(isNaN(value)){
    temp={
      "name":"N"
    }
  }
  else{
    temp={
      "name":value,
      "children":[]
    }
  }
    if(map.length===0){
      map.push(temp);
    }
    else if(queue[0].children&&queue[0].children.length===0){
        queue[0].children.push(temp);
    }
    else if(queue[0].children&&queue[0].children.length===1){
      queue[0].children.push(temp);
      queue.shift();
  }
  
  if(isNaN(value)===false){
    queue.push(temp);
  }
}

// let map={};
function createTree(arr){
  let map=[];
  let queue=[];
  let n=arr.length;
  for(let i = 0; i < n; i++)
      {
        insertValue(arr[i],map,queue);
      }
      return map;
}
  const straightPathFunc = (linkDatum, orientation) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.y},${source.x}L${target.y},${target.x}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  };

  const myStyle = {
    width: "60em", 
    height: "60em"
  };

  export  function OrgChartTree(props) {
    return (
      // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
      <div className='tree w-fit lg:w-98 lg:h-98 m-0' id="treeWrapper" style={myStyle} >
        <Tree data={props.treeData}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        pathFunc={straightPathFunc}
        translate = {{x: 500 ,y: 50}}
        orientation="vertical" />
        
        
      </div>
    );
  }


const TreeComponent = (props) => {
  // inputTree(props.inputvalue);
  console.log("in tree component");
  console.log(props.inputvalue);
  let inputvalue=props.inputvalue;
  let string_arr = inputvalue.split(" ");
var numberArray = [];
var len = 0;
len = string_arr.length; 
for (var i = 0; i < len; i++){
  numberArray.push(parseInt(string_arr[i]));
}
let map;
console.log(numberArray);
// map=list_to_tree(numberArray,0,undefined);
let mapArray=createTree(numberArray);
map=mapArray[0];
  return (
    // console.log("inside tree component");
    <div className='w-full'>
      <div className=''><OrgChartTree treeData={map}/></div>
      <p className='bg-blue-500 w-full text-white m-auto'>©️ Developed with Passion and ❤️ By Manohar</p>
    
    </div>
  )
}

export default TreeComponent