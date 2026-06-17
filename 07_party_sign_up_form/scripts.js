  function showSignupMessage() {
  let name = document.getElementById("nameInput").value;
  let region = document.getElementById("regionInput").value;
   let social = document.getElementById("socialInput").value;
  let dob = document.getElementById("dobInput").value;
  let fear = document.getElementById("fearInput").value;

  let message = `Welcome, ${name} from ${region} \nThanks for signing up for the pattison party we're going to be your new family. \nWe will be putting ${social} up online for sale be prepared to have your social secruity number stolen teheh! \nNow we know you were born on ${dob} and can use ${fear} against you somehow if you fall out of line.\n Queen Elj is sad and king patti is hungry...`
  document.getElementById("output").innerText = message;
}

document.getElementById("signupButton").onclick = showSignupMessage
