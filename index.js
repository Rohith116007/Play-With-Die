var n = Math.random();
n=n*6;
n=Math.floor(n)+1;
var m = Math.random();
m=m*6;
m=Math.floor(m)+1;
// alert(n);
// document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/T/1/G/i/B/E/red-die-4-th.png");
if(n===1){
  document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/9/u/S/1/o/A/red-die-1-th.png");
}
else if(n===2){
  document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/N/e/8/O/Z/G/red-die-2-th.png");
}
else if(n===3){
  document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/Y/3/S/S/N/8/red-die-3-th.png");
}
else if(n===4){
  document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/T/1/G/i/B/E/red-die-4-th.png");
}
else if(n===5){
  document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/p/N/w/Z/Q/C/red-die-5-th.png");
}
else if(n===6){
  document.querySelectorAll("src")[0].setAttribute("src","http://www.clker.com/cliparts/O/r/n/M/N/g/red-die-6-th.png");
}
// alert(n);
// document.querySelectorAll("img")[0].setAttribute("src","http://www.clker.com/cliparts/T/1/G/i/B/E/red-die-4-th.png");
if(m===1){
  document.querySelectorAll("img")[1].setAttribute("src","http://www.clker.com/cliparts/9/u/S/1/o/A/red-die-1-th.png");
}
else if(m===2){
  document.querySelectorAll("img")[1].setAttribute("src","http://www.clker.com/cliparts/N/e/8/O/Z/G/red-die-2-th.png");
}
else if(m===3){
  document.querySelectorAll("img")[1].setAttribute("src","http://www.clker.com/cliparts/Y/3/S/S/N/8/red-die-3-th.png");
}
else if(m===4){
  document.querySelectorAll("img")[1].setAttribute("src","http://www.clker.com/cliparts/T/1/G/i/B/E/red-die-4-th.png");
}
else if(m===5){
  document.querySelectorAll("img")[1].setAttribute("src","http://www.clker.com/cliparts/p/N/w/Z/Q/C/red-die-5-th.png");
}
else if(m===6){
  document.querySelectorAll("src")[1].setAttribute("src","http://www.clker.com/cliparts/O/r/n/M/N/g/red-die-6-th.png");
}


if(n>m){
  document.querySelectorAll(".kia")[0].innerHTML="Player 1 wins";
}
else if(m>n){
  document.querySelectorAll(".kia")[0].innerHTML="Player 2 wins";
}
else{
  document.querySelectorAll(".kia")[0].innerHTML="Draw";
}
