function Asking(){
  fetch('https://ulisesallforone.azurewebsites.net/All4One/questions/Ulises/6:30 AM')
    .then((response) => response.text())
    .then((data) => console.log(data));
  }

Asking();