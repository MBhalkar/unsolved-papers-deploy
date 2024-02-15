import {LitElement, html, css} from 'https://jspm.dev/lit-element@2';

export class HeaderTagElement extends LitElement{
    static properties = {
        version: {},
    }
    constructor(){
        super();
    }
    static get styles(){
        return css `
            .tagline{
                font-style: italic;
                font-size: medium;
                color: silver;                
            }
            .prevent-select {
                -webkit-user-select: none; /*Safari*/
                -ms-user-select: none; /*IE 10, 11*/
                user-select: none; /*Std syntax*/
            }
        `;
    }    
    render() {
        return html`
            <h1 id="title">UnsolvedPapers.com</h1>
            <div id="content" class="tagline prevent-select">
                <i>Find answers to academic questions</i>
            </div>
        `;
    }
}
customElements.define('header-tag-element', HeaderTagElement);