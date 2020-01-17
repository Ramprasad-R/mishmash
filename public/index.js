
async function getSWApiData() {
  const response = await fetch("https://swapi.co/api/people/1/");
  const parsedResponse = await response.json();
  document.querySelector(".displaySWName").innerHTML = `<p> ${parsedResponse.name} </p>`
}

getSWApiData();
