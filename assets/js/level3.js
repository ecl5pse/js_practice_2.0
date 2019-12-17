'use strict';

class PrintMachine {

    /**
     *
     * @param {number} sizeFont
     * @param {string} colorFont
     * @param {string} familyFont
     * @param {string} text
     */

    constructor (sizeFont, colorFont, familyFont, text) {
        this.sizeFont = sizeFont;
        this.colorFont = colorFont;
        this.familyFont = familyFont;
        this.text = text;

    }

    print () {

        const textContentElement = document.createElement('p');
        textContentElement.innerText = this.text;
        textContentElement.style.color = this.colorFont;
        textContentElement.style.fontSize = `${this.sizeFont}px`;
        textContentElement.style.fontFamily = this.familyFont;
        document.body.append(textContentElement);

    }

}

const prMachine = new PrintMachine(20, 'red', 'monospace', 'Hello World');
prMachine.print();

