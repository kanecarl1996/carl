const home = document.querySelector(".home");


home.onclick = changeCharacter;

function changeCharacter(){
    return home.innerText = ("You've click the Home");
}