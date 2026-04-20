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









// function showAdminMoods() {
//     let moods = JSON.parse(localStorage.getItem("moods")) || [];
//     let container = document.getElementById("adminMoods");

//     container.innerHTML = "";

//     moods.forEach(m => {
//         container.innerHTML += `<p>${m.mood} - ${m.date}</p>`;
//     });
// }

// showAdminMoods();

// function showAppointments() {
//     let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
//     let container = document.getElementById("adminAppointments");

//     container.innerHTML = "";

//     appointments.forEach(a => {
//         container.innerHTML += `<p>${a.name} - ${a.date} at ${a.time}</p>`;
//     });
// }

// showAppointments();

function bookAppointment(event) {
    event.preventDefault();

    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    const newAppointment = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        time: document.getElementById("time").value,
        createdAt: new Date().toLocaleString()
    };

    appointments.push(newAppointment);

    localStorage.setItem("appointments", JSON.stringify(appointments));

    // go to confirmation page
    window.location.href = "Confirmation.html";
}



function loadAppointments() {
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    let container = document.getElementById("appointments");

    container.innerHTML = "";

    if (appointments.length === 0) {
        container.innerHTML = "<p>No appointments yet</p>";
        return;
    }

    appointments.forEach((a, index) => {
        container.innerHTML += `
            <div style="border:1px solid #ccc; padding:10px; margin:10px;">
                <p><strong>Name:</strong> ${a.name}</p>
                <p><strong>Date:</strong> ${a.date}</p>
                <p><strong>Time:</strong> ${a.time}</p>
                <p><strong>Booked:</strong> ${a.createdAt}</p>
            </div>
        `;
    });
}

loadAppointments();