function Reverse(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/reverse/Ulises Ortega')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
Reverse();