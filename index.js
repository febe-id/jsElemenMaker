const set = new Setting();
const elemen = new YadiElementer();
const nav = document.querySelector("#nav");

set.linker(document.querySelectorAll(".href"), nav);

elemen.elementMaker(".yadi", "div", "handi").eleText("Hello Yadi!").gabung();
