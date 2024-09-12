let screen = document.getElementById("screen").querySelector("img");
let ch1 = document.getElementById('one');
let ch2 = document.getElementById('two');
let ch3 = document.getElementById('three');
let ch4 = document.getElementById('four');
let ch5 = document.getElementById('five');
let ch6 = document.getElementById('six');
let ch7 = document.getElementById('seven');
let ch8 = document.getElementById('eight');
let ch9 = document.getElementById('nine');

function channel(chnum) {
  if (chnum === 1)
     {
    screen.src = "  https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/blue-planet.jpg";
  } 
  else if (chnum === 2) {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/deadpool.jpg";
  } 
  else if (chnum === 3)
     {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/gravity.jpg";
  } 
  else if (chnum === 4) {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/good-will-hunting.jpg";
  }
   else if (chnum === 5) {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/cnn.jpg";
  }
   else if (chnum === 6) 
    {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/koyaanisqatsi.jpg";
  }
   else if (chnum === 7) {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/parts-unknown.jpg";
  } 
  else if (chnum === 8) 
    {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/star-wars-solo.jpeg";
  }
   else if (chnum === 9) {
    screen.src = "https://ga-instruction.s3.amazonaws.com/assets/front-end-web-development/fewd-conditionals-images/stranger-things.jpg";
  }
}

ch1.addEventListener('click', function() {
  channel(1);
});

ch2.addEventListener('click', function() {
  channel(2);
});

ch3.addEventListener('click', function() {
  channel(3);
});

ch4.addEventListener('click', function() {
  channel(4);
});

ch5.addEventListener('click', function() {
  channel(5);
});

ch6.addEventListener('click', function() {
  channel(6);
});

ch7.addEventListener('click', function() {
  channel(7);
});

ch8.addEventListener('click', function() {
  channel(8);
});

ch9.addEventListener('click', function() {
  channel(9);
});
