let button = document.getElementById('myButton'); 

button.addEventListener('click',function() {
    button.classList.add('clicked');

    alert('Button clicked!');
});