document.getElementById("addition").onclick=function() {
value1=Number(document.calculator.value1.value);
value2=Number(document.calculator.value2.value);
if(isNaN(value1) || isNaN(value2)){
  alert("This is not a number, Please type a NUMBER and try again!");
}

result=value1+value2;
document.calculator.result.value=result;

};
document.getElementById("subtraction").onclick=function() {
value1=Number(document.calculator.value1.value);
value2=Number(document.calculator.value2.value);
if(isNaN(value1) || isNaN(value2)){
  alert("This is not a number, Please type a NUMBER and try again!");
}
result=value1-value2;
document.calculator.result.value=result;

};
document.getElementById("multiplication").onclick=function() {
value1=Number(document.calculator.value1.value);
value2=Number(document.calculator.value2.value);
if(isNaN(value1) || isNaN(value2)){
  alert("This is not a number, Please type a NUMBER and try again!");
}
result=value1*value2;
document.calculator.result.value=result;

};
document.getElementById("divide").onclick=function() {
value1=Number(document.calculator.value1.value);
value2=Number(document.calculator.value2.value);
if(isNaN(value1) || isNaN(value2)){
  alert("This is not a number, Please type a NUMBER and try again!");
}
result=value1/value2;
document.calculator.result.value=result;

};
document.getElementById("modulo").onclick=function() {
value1=Number(document.calculator.value1.value);
value2=Number(document.calculator.value2.value);
if(isNaN(value1) || isNaN(value2)){
  alert("This is not a number, Please type a NUMBER and try again!");
}
result=value1%value2;
document.calculator.result.value=result;

};
