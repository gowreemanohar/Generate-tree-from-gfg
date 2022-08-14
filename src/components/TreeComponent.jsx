import React from 'react'
import Tree from 'react-d3-tree';
import './custom-tree.css';

function list_to_tree(list,i,map) {	
    if (map === undefined) {
      map = {"name":"null"};
    }
    if (i < list.length) {
      if(isNaN(list[i])===false){
        map = {"name": list[i],"children":[]};
      }
      else{
        map = {"name": list[i]};
      }
      if (2*i+1 < list.length ) 
        {               
          map.children.push(list_to_tree(list,2*i+1,map.children[0]));
        }
      if (2*i+2 < list.length  )
        {
          map.children.push(list_to_tree(list,2*i+2,map.children[1])); 
        }
              // initialize the children
    }
      // console.log(map.name)
      return map;
    }
  const straightPathFunc = (linkDatum, orientation) => {
    const { source, target } = linkDatum;
    return orientation === 'horizontal'
      ? `M${source.y},${source.x}L${target.y},${target.x}`
      : `M${source.x},${source.y}L${target.x},${target.y}`;
  };

  export  function OrgChartTree(props) {
    return (
      // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
      <div className='' id="treeWrapper" style={{ width: "90em", height: "90em"}} >
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
let map={};
console.log(numberArray);
map=list_to_tree(numberArray,0,undefined);
  return (
    // console.log("inside tree component");
    <div>tree
      <div className='m-10 px-40'><OrgChartTree treeData={map}/></div>
    </div>
  )
}

export default TreeComponent