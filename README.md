Javascript Elements Maker

Membuat sebuah elemen :
.elemenMaker(classParent, nameElement, className)

masukan text :
.eleText(yourText) //Its work with html

gabungkan semuanya :
.gabung()

Example : 
(index.html)
<div class="root"></div>
(script.js)
const elemen = new YadiElementer();

elemen.elementMaker(".root", "div", "second").eleText("Hello world").gabung();


