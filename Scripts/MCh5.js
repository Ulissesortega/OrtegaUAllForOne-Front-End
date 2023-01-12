function MadLib(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/madlib/beach/skimboarding/burger/fries/coke/waves/sleep/2/home/day')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
  MadLib();