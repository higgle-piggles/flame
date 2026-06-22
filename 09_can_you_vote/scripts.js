// Instructions in the CSS

function checkAge() {
  
  let age = Number(document.getElementById("ageBox").value);
  let message = "Blah blah blah";


   if (age >= 100) {
    message = "To old budster!"

  }else if (age >= 18) {
    message = "Queen ej is happy!";
  } else if (age >= 16) {
    message = "You can join us, your new family.";
    }else if (age >= 5) {
    message = "You can join infant workers";
  } else {
    message = "Sorry, we are going to have to feed you into the jaws of doom";
  }
  

  document.getElementById("results").innerHTML = message;
}


document.getElementById("submit").onclick = checkAge
