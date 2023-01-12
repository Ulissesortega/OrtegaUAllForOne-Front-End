function Odd(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/even/15')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
Odd();