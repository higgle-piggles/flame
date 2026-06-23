function matchRole() {
  let positionElement = document.querySelector('input[name="alignment"]:checked');
  let message = "";

  if (!positionElement) {
    message = "Please choose a party alignment.";
  } else {
    let position = positionElement.value;
    let selectedIssues = [];

    let issueBoxes = document.querySelectorAll('.issue');
    for (let i = 0; i < issueBoxes.length; i++) {
      if (issueBoxes[i].checked) {
        selectedIssues.push(issueBoxes[i].value);
      }
    }

    if (selectedIssues.length == 0) {
      message = "Please select your desired element";
    } else if (position == "progressive" && selectedIssues.includes("environment")) {
      message = "You can scrape hot coals to keep the fire of the pit of humidity alive";
    } else if (position == "moderate" && selectedIssues.includes("economy")) {
      message = "You can be enroled in the stoning program where you stone other constestants who didn't make the cut"
    } else if (position == "traditional" || selectedIssues.includes("education")) {
      message = "You can wash the floors!";
    } else if (position == "housing" || selectedIssues.includes("enviroment")) {
      message ="You can be part of the wizadary team where you explore how king patti is so amazing";
    } else {
      message = "🤝 You are not worthy you shall be expiremented by the knowing wizard";
    }
  }

  document.getElementById("matchResult").innerText = message;
}

document.getElementById("matchButton").onclick = matchRole;
