let number = document.getElementById("number");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let numb = 0;
number.innerHTML = numb;

let color = function(){
  if(numb<0){
    number.style.color="red";
  }
  else if(numb>0){
    number.style.color="green";
  }
  else{
    number.style.color = "black";
  }
}
if(numb<0){
  number.style.color="red";
}
else{
  number.style.color = "black";
}

increase.onclick= function(){
  numb++;
  number.innerHTML = numb;
  color();
}
decrease.onclick = function(){
  numb--;
  number.innerHTML = numb;
  color();
}
reset.onclick = function(){
  numb = 0;
  number.innerHTML = numb;
  number.style.color = "black";
}
