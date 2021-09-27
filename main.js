//Brake chain animation
function brokenChain() {
  let chain = document.getElementById('chain');
  chain.innerHTML = "&#xf0c1;";

  setTimeout(function(){
    chain.innerHTML = '&#xf127';
  }, 1000);
}

//Call animation
brokenChain();

//Animate every 2 sec
setInterval(brokenChain, 2000);

//Battery charge Animation
function chargeBattery() {
   let battery = document.getElementById('battery');
   battery.innerHTML = "&#xf244;";

   setTimeout(function(){
     battery.innerHTML = '&#xf243';
   }, 1000);

   setTimeout(function(){
     battery.innerHTML = '&#xf242';
   }, 2000);

   setTimeout(function(){
     battery.innerHTML = '&#xf241';
   }, 3000);

   setTimeout(function(){
     battery.innerHTML = '&#xf240';
   }, 4000);
 }

//Run animation
chargeBattery();

//Animate Battery every 5 sec
setInterval(chargeBattery, 5000);

//Hour glass tip Animation
function hourGlass() {
  let hour = document.getElementById('hour');
  hour.innerHTML = "&#xf251;";

  setTimeout(function(){
    hour.innerHTML = '&#xf252';
  }, 1000);

  setTimeout(function(){
    hour.innerHTML = '&#xf253';
  }, 2000);
}

//call function
hourGlass();


setInterval(hourGlass, 3000);
