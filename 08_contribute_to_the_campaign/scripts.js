let totalDonations = 0;

function giveTenDollars() {
  totalDonations = totalDonations + 10;

   document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Thanks for your donation...you get can get feed tonight!";
  

  if (totalDonations >= 50 && totalDonations < 100) {
    message = "🎉 King patti thanks you";
  } else if (totalDonations >= 100) {
    message = "Goal aqquired! You helped king patti and queen elj";
  }

  document.getElementById("thankYouMessage").innerText = message;
}

document.getElementById("giveButton").onclick = giveTenDollars

function takeTenDollars() {
  totalDonations = totalDonations - 10;

 if(totalDonations < 0){
    totalDonations = 0
  }

  document.getElementById("totalDisplay").innerText = "Total raised: $" + totalDonations;

  let message = "Sleep with one eye open tonight";
  document.getElementById("thankYouMessage").innerText = message;
}

document.getElementById("refundButton").onclick = takeTenDollars


