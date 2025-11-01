// Set tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// popup fakta menarik
let fyiButton = document.querySelector(".fyi");
let facts = [
  "Saya suka menulis novel fantasi di waktu luang saya.",
  "Saya suka main catur.",
  "Saya penyuka musik orkestra.",
  "Saya terkadang berlatih stand up comedy di waktu luang.",
  "Saya suka berlatih public speaking di depan cermin.",
];
fyiButton.addEventListener("click", () => {
  let randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert(randomFact);
});
