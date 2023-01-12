function Adding(){
fetch('https://ulisesallforone.azurewebsites.net/All4One/adding/1/2')
  .then((response) => response.text())
  .then((data) => console.log(data));
}

Adding();