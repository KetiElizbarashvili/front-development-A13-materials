document.getElementById('changeColorButton').addEventListener('click',function(){

    var randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = randomColor;

});


document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var emailInput = document.getElementById('emailInput');
    var email = emailInput.value.trim();
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (emailPattern.test(email)) {
     alert('Thanks for subscribing!');
     emailInput.value = ' ';
    } else {
      alert('Please enter a valid email address');
    }
  }); 








