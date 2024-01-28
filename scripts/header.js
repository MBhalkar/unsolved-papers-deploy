import {LitElement, html, css} from 'lit';

export class HeaderTagElement extends LitElement{
    static properties = {
        version: {},
    }
    constructor(){
        super();
    }
    static get styles(){
        return css `
            .tagLine{
                font-style: italic;
                font-size: medium;
                color: gray;
            }
        `;
    }    
    render() {
        return html`
            <h1 id="title">UnsolvedPapers.com</h1>
            <div id="content" contenteditable="true" class="tagLine">
                <i>Find answers to academic questions</i>
            </div>
        `;
    }
}
customElements.define('header-tag-element', HeaderTagElement);