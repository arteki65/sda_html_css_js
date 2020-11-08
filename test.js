function btnClickHandler() {
  const p = document.createElement("p");
  p.innerText = "Hello SDA from JS";
  document.getElementById("container").appendChild(p);
  setTimeout(veryExpensiveFunction, 0);
}

function veryExpensiveFunction() {
  let sum = 0;
  for (var i = 0; i < 100000000; i++) {
    const c = (((i * 5) / 8) % 12) + ((5000 * 8945) % 32);
    const c1 = c / 100;
    sum += c1;
  }
  console.log(sum);
}
