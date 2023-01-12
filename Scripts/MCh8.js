function Student(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/GetStudentByFirstName/Ulises')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
Student();