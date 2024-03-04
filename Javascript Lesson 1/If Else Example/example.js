function checkAge() {

    let age = parseInt(document.getElementById('ageInput').value);

    if (age >= 18){
        alert("You are an adult!");
    }else{
        alert("You are a minor.");
    }

}