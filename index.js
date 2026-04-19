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