const diasplayDataContainer = document.querySelector(".displaySWName");
async function getSWApiData(url) {
  try {
    diasplayDataContainer.innerHTML = '<p> Loading data... </p>'
    const response = await fetch(url);
    const parsedResponse = await response.json();
    diasplayDataContainer.innerHTML = `<p> Name        :  ${parsedResponse.name} </p>`;
    diasplayDataContainer.innerHTML += `<p> Height     :  ${parsedResponse.height} </p>`;
    diasplayDataContainer.innerHTML += `<p> Birth Year :  ${parsedResponse.birth_year} </p>`;
  }
  catch (err) {
    console.log(err);
  }
}

getSWApiData("https://swapi.co/api/people/1/");
