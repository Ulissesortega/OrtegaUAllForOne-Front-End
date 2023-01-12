function Greater(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/greater/3/4')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
  Greater();