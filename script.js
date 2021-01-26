let myName = "Jeff Johnston";
let age = 31;
let birthday = "December 28";
let grandRapidsGC = true;
let lifeEvents = [
  "I was born in St. Claire Shores, MI",
  "I am a former Architectural Design Student",
  "Fishing is my biggest passion",
  "I'm an amazing chef!",
];

if ((grandRapidsGC = true)) {
  console.log(
    "My name is " +
      myName +
      " and I am a student at Grand Circus in Grand Rapids MI."
  );
} else {
  console.log(
    "My name is" + myName + "and I am a student at Grand Circus in Detroit MI."
  );
}

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents[i]);
}

let counter = 0;
let randomNumber = Math.floor(Math.random() * 10 + 1);

while (true) {
  if (randomNumber !== 5) {
    counter <= 10;
    counter++;
    console.log(randomNumber + "!== 5");
  }
}
