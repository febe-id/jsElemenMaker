Javascript Elements Maker

Membuat sebuah elemen :<br>
.elemenMaker(classParent, nameElement, className)

masukan text : <br>
.eleText(yourText) //Its work with html

gabungkan semuanya :<br>
.gabung()

Example : 
(index.html)<br>
<xmp><div class="root"></div></xmp>
(script.js)<br>
const elemen = new YadiElementer();<br>

elemen.elementMaker(".root", "div", "second").eleText("Hello world").gabung();


