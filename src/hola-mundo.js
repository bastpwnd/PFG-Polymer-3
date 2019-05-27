import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class MensajePersonalizado extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>[[prop1]]!</h2>
	  <div style="text-align:center;padding:1em 0;">
		<h3>
			<a style="text-decoration:none;" href="https://www.zeitverschiebung.net/es/city/3117735">
			<span style="color:gray;">Hora actual en</span><br />Madrid, España</a></h3> 
			<iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=es&size=medium&timezone=Europe%2FMadrid" width="100%" height="115" frameborder="0" seamless></iframe>
	  </div>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'mensaje-personalizado'
      }
    };
  }
}

window.customElements.define('mensaje-personalizado', MensajePersonalizado);
