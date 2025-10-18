//selectField
let selectField = document.getElementById('selectField')


//selectText
let selectText = document.getElementById('selectText')
//list
let list = document.getElementById('list')
//arrowicon
let arrowIcon = document.getElementById('arrowIcon')
//options
let options = document.getElementsByClassName('options')

selectField.addEventListener("click", () => {
    list.classList.toggle("hide")
    arrowIcon.classList.toggle("rotate")
});

for (option of options) {
    option.onclick = function () {
        selectText.innerHTML = this.textContent
        list.classList.toggle("hide")
        arrowIcon.classList.toggle("rotate")
    }
}


