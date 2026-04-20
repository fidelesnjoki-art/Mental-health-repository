async function getQuote() {
  try {
    let response = await fetch("https://api.quotable.io/random");
    let data = await response.json();

    document.getElementById("Quote").innerText =
      data.content + " — " + data.author;
  } catch (error) {
    document.getElementById("Quote").innerText ="Stay strong. You are not alone ";
  }
}


getQuote();

if (document.getElementById("quote")) {
  getQuote();
}

// ===== MOOD =====
function setMood(mood) {
  localStorage.setItem("mood", mood);

  let msg = document.getElementById("moodMessage");
  if (!msg) return;

  msg.innerText = "mood saved: " + mood;
}


// ===== ADMIN =====
let MoodElement = document.getElementById("mood");
let AppointmentElement = document.getElementById("Appointments");

if (moodElement && AppointmentElement) {
  let Mood = localStorage.getItem("mood");
  moodElement.innerText = mood || "No mood recorded";
}
// window.onload = function () {
//   let data = JSON.parse(localStorage.getItem("appointment"));

//   if (data) {
//     document.getElementById("details").innerHTML = `
//       Name: ${data.name} <br>
//       Date: ${data.date} <br>
//       Time: ${data.time} <br>
//       Doctor: ${data.doctor}
//     `;
//   }
// };

// let mood = localStorage.getItem("mood");
// document.getElementById("mood").innerText = mood || "No data yet";

// let data = JSON.parse(localStorage.getItem("appointment"));

// if (data) {
//   document.getElementById("appointments").innerHTML = `
//     Name: ${data.name} <br>
//     Date: ${data.date} <br>
//     Time: ${data.time} <br>
//     Doctor: ${data.doctor}
//   `;
// } else {
//   document.getElementById("appointments").innerText = "No bookings yet";
// }