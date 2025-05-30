function announceStop() {
  updateScreen("Next Stop: Morgantown Crossings");
}

function showRoute() {
  updateScreen("Route 24 – Morgantown > Business Park");
}

function emergencyAlert() {
  updateScreen("⚠️ Emergency Alert Sent");
}

function updateScreen(text) {
  document.getElementById("screen").innerText = text;
}
