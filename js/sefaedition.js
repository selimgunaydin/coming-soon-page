var countDownDate = new Date("July 5, 2021 00:00:00").getTime();
var dayssfa,hourssfa,minutessfa,secondssfa;
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  
 // Time calculations for days, hours, minutes and seconds
 
   dayssfa = Math.floor(distance/(1000 * 60 * 60 * 24));
   hourssfa = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   minutessfa = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   secondssfa = Math.floor((distance % (1000 * 60)) / 1000);
  
   //2 basamaklı gösteriyorum
  
   var yenisaat=String(hourssfa).padStart(2, '0');
   var yenigun= String(dayssfa).padStart(2, '0');
   var yenidakika= String(minutessfa).padStart(2, '0');
   var yenisaniye= String(secondssfa).padStart(2, '0');
  
   // Output the result in an element with id="demo"

  document.getElementById("countdown").innerHTML = ("<div>" + yenigun + "<span>days</span></div>" + "<div>" +  yenisaat + " <span>hrs</span></div>"   +"<div>" + yenidakika + " <span>min</span></div>" + "<div>" + yenisaniye  + " <span>sec</span></div>"); 
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

