// import { getValue } from "@testing-library/user-event/dist/utils";

// let str="1 2 3 4 5 N N 6 7 N N";
// let inputValues=str.split(" ");
// console.log(inputValues);
// const map=undefined;
// function list_to_tree(list,i,map) {	
//     if (map === undefined) {
//       map = {"name":"null"};
//       }
//     if (i < list.length) {
      
//       map = {
//               "name": list[i],
//               "children":[]
//             };
//             if(list[i]!=="null"||list[i]!=="NULL")
//               {if (2*i+1 < list.length  ) {                 
//                 map.children.push(list_to_tree(list,2*i+1,map.children[0]));
//               }
//               if (2*i+2 < list.length  ){
//                 map.children.push(list_to_tree(list,2*i+2,map.children[1])); 
//               }
//             }
//       // initialize the children
//       }
//       console.log(map.name)
//       return map; 
//     }


//     let inputvalue=str;
//     let string_arr = inputvalue.split(" ");
//   var numberArray = [];
//   var len = 0;
//   len = string_arr.length; 
//   for (var i = 0; i < len; i++){
//     numberArray.push(parseInt(string_arr[i]));
//   }
//   let doc={};
//   let arr=numberArray;
//   let prevind=[];
//   let currind=[];
//   console.log(numberArray);
//     function listToTree(){
//       for(let i=0;i<inputValues.length;i++){
//         let currdoc={
//           "name":arr[i],
//           "children":[],
//         }

//         if(isNaN(arr[i])===false){
//           currind.push(i);
//         }
//       }

//       return map;
//     }









//     let value =undefined;
//     let maps={
//       "name": 1,
//       "children":[
//         {
//           "name":2,
//           "children":[]
//         },
//         {
//           "name":3,
//           "children":[]
//         }
//       ]

//     }


    // let dox=[]

    // let temp={
    //     "name":"manohar",
    //     "children":[]
    // }
    // dox.push(temp);
    // temp=dox[0].children;

    // // console.log(temp);
    // temp.push(
    //   {
    //     "name":"bandla",
    //     "children":[]
    //   }
    // )
    // if(temp[0].children){
    //   console.log("yes ");
    // }
    // console.log(temp);
    // console.log(dox);
    // console.log(dox[0].children)
    // console.log(temp);
    // console.log(dox.children);



    class Queue {
      constructor() {
          this.items = [];
      }
      
      // add element to the queue
      enqueue(element) {
          return this.items.push(element);
      }
      
      // remove element from the queue
      dequeue() {
          if(this.items.length > 0) {
              return this.items.shift();
          }
      }
      
      // view the last element
      peek() {
          return this.items[this.items.length - 1];
      }
      
      // check if the queue is empty
      isEmpty(){
         return this.items.length === 0;
      }
     
      // the size of the queue
      size(){
          return this.items.length;
      }
   
      // empty the queue
      clear(){
          this.items = [];
      }
  }

  function insertValue(value,map,queue){
    let temp;
    if(isNaN(value)){
      temp={
        "name":value
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

  let arr=[1,2,3,NaN,NaN,4,6,NaN,5,NaN,NaN,7,NaN];
  let Tree=createTree(arr);
console.log(Tree[0]);











