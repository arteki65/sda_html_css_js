function displayText(mouseEvent) {
  console.log("Kliknięto w przycisk", mouseEvent);
}

// const elem = document.getElementById("id-button");
// elem.addEventListener("click", displayText);

function onMouseMove(event) {
  console.log(
    `mouse move on clientX ${event.clientX} and clientY ${event.clientY}`
  );
}
