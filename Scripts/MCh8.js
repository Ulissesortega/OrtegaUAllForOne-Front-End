//inout
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
//
let helloReturn = document.getElementById("helloReturn");

let addingBtn = document.getElementById("addingBtn");


addingBtn.addEventListener("click", function () {
  GetData()
  GetData1()
})

function GetData() {
  fetch("https://ulisesallforone.azurewebsites.net/All4One/GetStudentByFirstName/" + input1.value ).then(
    response => response.json()).then(
      data => {helloReturn.textContent = "Student first Name : " + data.firstName + "Student last Name : " +  data.lastName + data.slackName
      }
    )
}

function GetData1() {
  fetch("https://ulisesallforone.azurewebsites.net/All4One/GetStudentBylastName/" + input2.value).then(
    response => response.json()).then(
      data => {helloReturn.textContent = "Student first Name : " + data.firstName + "Student last Name : " +  data.lastName + data.slackName
      }
    )
}