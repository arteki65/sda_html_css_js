function fetchRandomDate() {
  handleHttp("http://numbersapi.com/random/date");
}

function fetchRandomNumber() {
  handleHttp("http://numbersapi.com/random/math");
}

function handleHttp(url) {
  showProgressIndicator();
  fetch(url)
    .then((response) => response.text())
    .then((text) => displayResult(text, true))
    .catch(handleError);
}

function displayResult(result, isSuccess) {
  const resultEl = document.getElementById("result");
  resultEl.innerText = "";
  resultEl.innerHTML = `<span>${result}</span>`;

  if (isSuccess) {
    changeFetchBtnText("Fetch random date");
  }

  hideProgressIndicator();
}

function showProgressIndicator() {
  const progressIndicator = document.getElementById("progress-indicator");
  const main = document.getElementById("content");

  main.classList.add("hidden");
  progressIndicator.classList.remove("hidden");
}

function hideProgressIndicator() {
  const progressIndicator = document.getElementById("progress-indicator");
  const main = document.getElementById("content");

  main.classList.remove("hidden");
  progressIndicator.classList.add("hidden");
}

function handleError() {
  changeFetchBtnText("Retry");
  displayResult("Something went wrong...", false);
}

function changeFetchBtnText(text) {
  const fetchBtn = document.getElementById("fetchBtn");
  fetchBtn.innerText = text;
}
