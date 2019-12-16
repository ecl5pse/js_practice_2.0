'use strict';

class PrintMachine {
    constructor(sizeFont,colorFont,familyFont) {
        this.sizeFont = sizeFont;
        this.colorFont = colorFont;
        this.familyFont = familyFont;

    };



    print (){


        const textContentElement = document.createElement("div")
        textContentElement.classList.add("text");
        textContentElement.innerText = "alalala";
        textContentElement.style.color = this.colorFont;
        textContentElement.style.fontSize = this.sizeFont;
        textContentElement.style.fontFamily = this.familyFont;


    }

}

