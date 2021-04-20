class Setting {
  constructor(props) {
    this.props = props;
    this.state = {
      elem: document.querySelectorAll(".href"),
    };
  }

  linker(elem, nav) {
    elem.forEach((item) => {
      item.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = e.target.dataset.link;
        nav.checked = false;
      });
    });
  }
}

class YadiElementer extends Setting {
  constructor(props) {
    super(props);
    this.state = {
      childElem: "",
      par: "",
    };
  }

  elementMaker(parent = "", childName = "", className) {
    this.state.par = document.querySelector(parent);
    this.state.childElem = document.createElement(childName);
    this.state.childElem.classList.add(className);

    return this;
  }

  eleText(text) {
    this.state.childElem.innerHTML = text;
    return this;
  }

  gabung() {
    this.state.par.appendChild(this.state.childElem);
    return this;
  }
}
