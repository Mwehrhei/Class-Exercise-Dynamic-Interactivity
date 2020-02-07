var messageEle = document.body.querySelector(".message");
var wrapperEle = document.body.querySelector(".wrapper");
var list = ["first", "second", "third"]
var array = [{message:"HULLO", color:"red"}, {message:"Hi there!", color:"blue"}, {message:"Sup homie", color:"green"}]

for(var i=0; i<list.length; i++){
  var ele = document.createElement("div");
  ele.style.height="100px";
  ele.style.width="300px";
  
const color=array[i].color;
  if(color=="red"){
      ele.style.backgroundColor="red";}
  if(color=="blue"){
      ele.style.backgroundColor="blue";}
  if(color=="green"){
      ele.style.backgroundColor="green";}

const message = array[i].message;
ele.addEventListener("click", function(){ 
messageEle.innerHTML = message;});  
  
wrapperEle.appendChild(ele);}