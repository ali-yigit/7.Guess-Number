const randomNumber = Math.floor(Math.random() * 100);
console.log(randomNumber);
let attemp = 0;
function increment() {
  attemp++;
  document.querySelector("#attemp").innerHTML = `Number of attemps: ${attemp}`;
}
function down() {
  attemp++;
  alert(`enter a number between ${randomNumber - 20} and ${randomNumber + 20}`);
  document.querySelector("#input-box").value = "";
  document.querySelector("#attemp").innerHTML = attemp;
}
function guessNumber() {
  let userGuessNumber = document.querySelector("#input-box").value;

  console.log(userGuessNumber);
  if (userGuessNumber == randomNumber) {
    document.querySelector("#result").innerHTML = "Congrats, You did!";
    attemp++;
    document.querySelector(
      "#attemp"
    ).innerHTML = `Number of attemps: ${attemp}`;
    window.print();
    window.location.reload();
  } else if (userGuessNumber > randomNumber) {
    document.querySelector("#result").innerHTML = "DOWN!";
    down();
  } else if (userGuessNumber < randomNumber) {
    document.querySelector("#result").innerHTML = "UP!";
    increment();
  } else {
    document.querySelector("#result").innerHTML =
      "It is not a proper entry, Please refresh";
    attemp++;
    document.querySelector("#attemp").innerHTML = attemp;
  }
}
