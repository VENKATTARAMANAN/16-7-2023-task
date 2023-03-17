var input=document.createElement("input");
input.setAttribute("type","date");
input.setAttribute("id","dob");
input.setAttribute("class","main")

var button=document.createElement("button");
button.innerHTML="Display data";
button.setAttribute("class","btn btn-primary");
button.addEventListener("click",displaydata);
document.body.append(input,button);

function displaydata(){
var inputs=document.getElementById("dob").value;
if(Date.parse(inputs)){
var inputdate=new Date(inputs);
// console.log("Given input date is",inputdate);
var currentdate=new Date();
//Milliseconds diff
var millisecdiff=currentdate.getTime()-inputdate.getTime();
// console.log(millisecdiff);
//Seconds Diff
var secondsdiff=mathfloor(millisecdiff,1000);
// console.log(secondsdiff);
//Minutes diff
var minutesdiff=mathfloor(secondsdiff,60);
// console.log(minutesdiff);
//Hours diff
var hoursdiff=mathfloor(minutesdiff,60);
// console.log(hoursdiff);
//day diff
var daydiff=mathfloor(hoursdiff,24);
// console.log(daydiff);
//year diff
var yeardiff=getyears(inputdate,currentdate);
// console.log(yeardiff);
//months diff
var monthdiff=getmonths(inputdate,currentdate);
// console.log(monthdiff);
}
else{
    console.log("invalid input entered");
}
document.body.append(inputdate,monthdiff,yeardiff,daydiff,hoursdiff,minutesdiff,secondsdiff,millisecdiff);

}

function mathfloor(value1,value2){
return Math.floor(value1/value2);
}

function getyears(value1,value2){
var d1=new Date(value1);
var d2=new Date(value2);
return d2.getFullYear()-d1.getFullYear();
}

function getmonths(value1,value2){
    var year=getyears(value1,value2);
    var months=(year*12)+(value2.getMonth()-value1.getMonth());
    return months;
}

function create(value) {
            
     // Create table object.
     var a = document.createElement("TABLE");
     a.setAttribute("id", "MyTable");
     document.body.appendChild(a);

     var b = document.createElement("TR");
     b.setAttribute("id", "MyTr");
     document.getElementById("MyTable").appendChild(b);

 }