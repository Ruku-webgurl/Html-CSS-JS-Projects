const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const Words = ["fun", "interesting", "amazing", "awesome", "incredible", "fantastic"];
const typingDelay = 200;
const erasingDelay = 200;
const newLetterDelay = 2000; // Delay between current and next text

let index = 0;
let charIndex = 0;

document.addEventListener("DOMContentLoaded", () =>{
    if(Words.length){
        setTimeout(type, newLetterDelay)
    }

});

function type() {
    if (charIndex < Words[index].length) {
        typedTextSpan.textContent += Words[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else{
        setTimeout(erase, newLetterDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = Words[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
        
    } else{
        index++;
        if(index >= Words.length){
            index = 0;

        }
        setTimeout(type, typingDelay + 1100);
    }
}