fetch('https://ulisesallforone.azurewebsites.net/All4One/questions/a/b')
  .then((response) => response.text())
  .then((data) => console.log(data));