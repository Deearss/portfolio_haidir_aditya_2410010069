// Set tahun otomatis
document.getElementById("year").textContent = new Date().getFullYear();

// popup fakta menarik
let fyiButton = document.querySelector(".fyi");
let facts = [
  "Saya suka menulis novel fantasi di waktu luang saya.",
  "Saya suka main catur.",
  "Saya penyuka musik orkestra.",
  "Saya suka menonton film horror, terutama yang bertemakan eksorsisme.",
];
fyiButton.addEventListener("click", () => {
  let randomFact = facts[Math.floor(Math.random() * facts.length)];
  alert(randomFact);
});
