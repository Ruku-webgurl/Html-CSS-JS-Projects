const typedTextSpan = document.querySelector(".typed-text");
const cursor = document.querySelector(".cursor");

const Words = ["Muhammad (محمد)", "Ahmad (أحمد)", "Al-Mustafa (المصطفى)", "Al-Amin (الأمين)", "Al-Haadi (الهادي)", "Ar-Rasul (الرسول)", "Al-Mukhtar", "Al-Bashir (البشير)", "Al-Nadhir (النذير)", "Al-Shafi (الشفيع) ", "Al-Mubashir (المبشر)", "Al-Musaddiq (المصدق)", "Al-Muzakkir (المذكر)", "Al-Mu’izz (المعز)", "Al-Mudhakkir (المذكر)", "Al-Muhsin (المحسن)", "Al-Mujtaba (المجتبى)", "Al-Mukaffir (المكفر)", "Al-Mubarak (المبارك)", "Al-Mufti (المفتي)", "Al-Muqarrab (المقرب)", "Al-Muharri (المحرّي)", "Al-Muhsin (المحسن)", "Al-Mutawakkil (المتوكل)",
    "Al-Muhaimin (المهيمن) ", "Al-Mujahid (المجاهد)", "Al-Mu’tasim (المعتصم)", "Al-Mutawwir (المتوّر)", "Al-Muflih (المفلح) ", "Al-Muballigh (المبلغ)",
    "Al-Mu’ayyad (المؤيد)", "Al-Mufakkir (المفكّر) ", "Al-Muhtaram (المحترم)", "Al-Mu’min (المؤمن) ", "Al-Mudarris (المدرّس)", "Al-Mu’ti (المعطي)", "Al-Mu’akhkhir (المؤخّر) ", "Al-Muhibb (المحبّ)",
    "Al-Mutahhir (المطهر)", "Al-Muwahhid (الموحّد)", "Al-Muqit (المقيت)", "Al-Mujarrad (المجرّد)", "Al-Munazzah (المنزّه) ", "Al-Mughni (المغني)", "Al-Mutahayyir (المتحيّر) ", "Al-Muharib (المحارب)", "Al-Mujtahid (المجتهد)", "Al-Mutawaffi (المتوفّي)", "Al-Muntasir (المنتصر)", "Al-Musharraf (المشرّف)",
"Al-Muqabil (المقابل)", "Al-Murshid (المرشد)", "Al-Mufeed (المفيد) ", "Al-Muntaqim (المنتقم)", "Al-Musawwir (المصوّر) ", "Al-Muhafiz (المحافظ)", "Al-Munazim (المنظّم)", "Al-Mufarrij (المفرّج) ",
"Al-Muqasim (المقسم) ", "Al-Muwakkil (الموكّل)", "Al-Mufakir (المفكّر) ", "Al-Muqim (المقيم) ", "Al-Muslih (المصلح)", "Al-Mustahabb (المستحبّ)", 
 "Al-Mutaqaddim (المتقدّم)", "Al-Musta’adil (المستعادل) ", "Al-Munawwar (المنوّر) ", "Al-Mufid (المفيد)", "Al-Munqidh (المنقذ)", "Al-Mu’izz (المعز) ", "Al-Muta’akhir (المتأخر)", "Al-Muhyi (المحيي) ", "Al-Munajjid (المنجد)", "Al-Munawwir (المنوّر)", "Al-Mun’im (المنعم)", "Al-Mujtabir (المجتبير) ",
"Al-Mu’izz (المعز)", "Al-Mutamanni (المتمنّي)", "Al-Musalli (المصلّي)", "Al-Muqaddir (المقدّر)", "Al-Murabit (المرابط)", "Al-Musta’id (المستعيد)", "Al-Mukhlis (المخلص)", "Al-Mu’tadil (المعتدل) ", "Al-Munfarij (المنفرج)", "Al-Mutazawwir (المتزوّر)", "Al-Mu’izz (المعز) ", "Al-Mustajab (المستجاب)", "Al-Muhib (المحب) ", "Al-Munqid (المنقد) ",
"Al-Mu’min (المؤمن) ", "Al-Mu’ti (المعطي)", "Al-Mukhtar (المختار)", "Al-Mujaddid (المجدّد)", "Al-Muhsin (المحسن)", "Al-Mu’izz (المعز) ", "Al-Mukhlas (المخلص) ", "Al-Muwakkil (الموكّل)", "Al-Mustaw’ib (المستوعب)"];
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