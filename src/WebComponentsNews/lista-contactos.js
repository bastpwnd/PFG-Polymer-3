import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Catalogo extends PolymerElement {
  static get template() {
    return html`
       <style include="user-styles">
        :host {
          display: block;
		  padding: 10px;
		  height: 1000px;
        }
      </style>
	  <style include="shared-styles">
        :host {
          display: block;
		  padding: 10px;
		  height: 1000px;
        }
      </style>
	  <style include="user2-styles">
        :host {
          display: block;
		  padding: 10px;
		  height: 1000px;
        }
      </style>

         <br></br>
		 <br></br>

		

<div id="card">
  <img src="../images/ivan.jpg" width="20" height="200"/>
  <h2>Iván Martín Alonso</h2>
  <p>Estudiante de Ingeniería Informática.</p>
  <p>Interested in Web technologies like HTML5, CSS3, JavaScript, PHP, MySQL, etc.</p>
  <p>Love Codepen.io and respect Chris Coyier. ;)</p>

</div>

<div id="card2">
  <img src="../images/floren.jpg" width="20" height="200"/>
  <h2>Iván Martín Alonso</h2>
  <p>Estudiante de Ingeniería Informática.</p>
  <p>Interested in Web technologies like HTML5, CSS3, JavaScript, PHP, MySQL, etc.</p>
  <p>Love Codepen.io and respect Chris Coyier. ;)</p>

</div>


    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'catalogo-ivan'
      }
    };
  }
}

window.customElements.define('lista-usuarios', Catalogo);