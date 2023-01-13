let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let input3 = document.getElementById("input3");
let input4 = document.getElementById("input4");
let input5 = document.getElementById("input5");
let input6 = document.getElementById("input6");
let input7 = document.getElementById("input7");
let input8 = document.getElementById("input8");
let input9 = document.getElementById("input9");
let input10 = document.getElementById("input10");
let helloReturn = document.getElementById("helloReturn");
let addingBtn = document.getElementById("addingBtn");


addingBtn.addEventListener("click", function () {
  GetData()
})

function GetData() {
  fetch("https://ulisesallforone.azurewebsites.net/All4One/madlib/" + input1.value + "/" + input2.value + "/" + input3.value + "/" + input4.value + "/" + input5.value + "/" + input6.value + "/" + input7.value + "/" + input8.value + "/" + input9.value + "/" + input10.value).then(
    response => response.text()).then(
      data => helloReturn.textContent = data
    )
}


