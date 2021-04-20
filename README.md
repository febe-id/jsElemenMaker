Javascript Elements Maker

JavaScript framework kecil²an. Fungsinya? Membuat element html menggunakan javascript, buat kalian yang takut script html nya takut di inspect atau view-source, cocok nih. Manfaat nya apa? Mungkin kalian bisa merasakan nya setelah memakainya.
Please Give me star, jika ramai pengguna akan saya tingkat kan lagi.

Membuat sebuah elemen :<br>
.elementMaker(classParent, nameElement, className)

masukan text : <br>
.eleText(yourText) //Its work with html

gabungkan semuanya :<br>
.gabung()

Example : 
(index.html)<br>
< div class="root"></ div> // U can use another tag<br>

(script.js)<br>
const elemen = new YadiElementer();<br>

elemen.elementMaker(".root", "div", "second").eleText("Hello world").gabung();


