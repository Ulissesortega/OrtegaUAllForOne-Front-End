let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let helloReturn = document.getElementById("helloReturn");
let addingBtn = document.getElementById("addingBtn");


addingBtn.addEventListener("click", function () {
  GetData()
})

function GetData() {
  fetch("https://ulisesallforone.azurewebsites.net/All4One/Questions/" + input1.value + "/" + input2.value).then(
    response => response.text()).then(
      data => helloReturn.textContent = data
    )
}


