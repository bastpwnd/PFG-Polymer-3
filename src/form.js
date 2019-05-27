import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Formulario extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h1>Componente formulario</h1>
	  <form>
		  First name:<br>
		  <input type="text" name="firstname"><br>
		  Last name:<br>
		  <input type="text" name="lastname"><br>
		  Telephone:<br>
		  <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"><span>Format: 123-45-678</span><br>
		  Fecha Nacimiento:<br>
		  <input type="date" name="bday" max="1979-12-31"><br>
		
	 </form>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'formulario-ivan'
      }
    };
  }
}

window.customElements.define('formulario-ivan', Formulario);