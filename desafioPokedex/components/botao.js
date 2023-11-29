class Botao extends HTMLElement {
    constructor(){
        super();

        const shadow = this.attachShadow({ mode: "open"});
        shadow.innerHTML = "<button id="loadMoreButton" type="button"> Carregar Mais </button>";
    }
    build() {}

    styles() {}
}

customElements.define("pagination", Botao);