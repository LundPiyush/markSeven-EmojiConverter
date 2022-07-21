var btnTranslate = document.querySelector("#btn-translate")
var input = document.querySelector("#input")
var output = document.querySelector("#output")
var serverUrl = "https://api.funtranslations.com/translate/emoji.json";
// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

function getUrl(inputText) {
    return serverUrl + "?text=" + inputText
}
function errorHandler(error){
    alert("Some error occured, Please come back after some time")
    console.log(error)
}
function clickListener() {
    //console.log("clicked")
    var inputText = input.value; // fetches the value for id="input"
    console.log(inputText)

    fetch(getUrl(inputText))
        .then(response => response.json())
        .then(json => {
            //output.innerText = json.contents.translated
            document.getElementById("output").innerHTML=json.contents.translated})    
        .catch(errorHandler)
}

btnTranslate.addEventListener("click", clickListener) // call back function is called here that's why we don't pass error as args