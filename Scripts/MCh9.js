function Restaurant(){
    fetch('https://ulisesallforone.azurewebsites.net/All4One/pick/1')
      .then((response) => response.text())
      .then((data) => console.log(data));
    }
  
Restaurant();

let input1 = document.getElementById("input1");

let helloReturn = document.getElementById("helloReturn");
let addingBtn = document.getElementById("addingBtn");


addingBtn.addEventListener("click", function () {
  GetData()
})

function GetData() {
  fetch("https://ulisesallforone.azurewebsites.net/All4One/Pick/" + input1.value).then(
    response => response.text()).then(
      data => helloReturn.textContent = data
    )
}