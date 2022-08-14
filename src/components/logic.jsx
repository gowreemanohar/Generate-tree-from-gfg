let str="1 2 3 4 5 N N 6 7 N N";
let inputValues=str.split(" ");
console.log(inputValues);
const map=undefined;
function list_to_tree(list,i,map) {	
    if (map === undefined) {
      map = {"name":"null"};
      }
    if (i < list.length) {
      
      map = {
              "name": list[i],
              "children":[]
            };
            if(list[i]!=="null"||list[i]!=="NULL")
              {if (2*i+1 < list.length  ) {                 
                map.children.push(list_to_tree(list,2*i+1,map.children[0]));
              }
              if (2*i+2 < list.length  ){
                map.children.push(list_to_tree(list,2*i+2,map.children[1])); 
              }
            }
      // initialize the children
      }
      console.log(map.name)
      return map; 
    }


    let inputvalue=str;
    let string_arr = inputvalue.split(" ");
  var numberArray = [];
  var len = 0;
  len = string_arr.length; 
  for (var i = 0; i < len; i++){
    numberArray.push(parseInt(string_arr[i]));
  }
  let doc={};
  let arr=numberArray;
  let prevind=[];
  let currind=[];
  console.log(numberArray);
    function listToTree(){
      for(let i=0;i<inputValues.length;i++){
        let currdoc={
          "name":arr[i],
          "children":[],
        }

        if(isNaN(arr[i])===false){
          currind.push(i);
        }
      }

      return map;
    }