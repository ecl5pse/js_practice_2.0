'use strict';

function lengthComparisons(string1 , string2) {

    if (string1.length > string2.length){
        console.log("-1");
    }if (string1.length < string2.length){
        console.log("1");
    }else {
        console.log(string1.length);
    }

}



function createUppercaseFirstCharacter(string) {

    const str = string[0].toUpperCase();
    console.log("Первый символ"+" " +str+" "+"слова"+" "+string);


}


function searchVowel(string) {

    const reg = /[а,у,о,ы,и,э,я,ю,ё,е]/;

    const str = string.search(reg);
    console.log(str);

}

function checkSpan(string) {

    const stringSpan = "100% бесплатно,увеличение продаж, только сегодня, не удаляйте, ххх.Функция должна быть нечувствительна к регистру."

   /* if(string===stringSpan){

       console.log(true);
    }else {
        console.log(false);
    }*/

   return string.includes(stringSpan);

}

function croppingLine(string,maxLength) {

    if(string.length > maxLength){

        const str = string.replace(maxLength, "Hello...");

        return console.log(str);

    }

}

function isPalindrome(str) {
    const strReverse = str.split('').reverse().join('');


    if (strReverse == str) {
        return 'yes';
    } else {
        return 'no';
    }
}
