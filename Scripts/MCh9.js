function Restaurant(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/pick/1')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
Restaurant();