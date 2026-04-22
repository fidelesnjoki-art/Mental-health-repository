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

if (document.getElementById("Quote")) {
  getQuote();
}

// function getQuote() {
//    const quoteEl = document.getElementById("Quote");

    
//     if (!quoteEl) return;
//     fetch("https://zenquotes.io/api/random")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data[0].q);
//         })
//         .catch(() => {
//             console.log("Quote unavailable");
//         });
// }

// window.onload = function () {
//     if (document.getElementById("Quote")) {
//         getQuote();
//     }
// };


// if (document.getElementById("Quote")) {
//   getQuote();
// }


window.onload = function () {

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
}

if (document.getElementById("appointments")) {
    loadAppointments();
}
