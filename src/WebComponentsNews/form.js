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
	  <style include="form-styles">
        :host {
          display: block;
		  padding: 10px;
		  height: 1000px;
        }
      </style>
      <h1>Componente formulario</h1>
	  <div class="container">  
	  <form id="contact" action="" method="post">
		<h3>Datos del contacto</h3>
		<h4>Rellena toda la informacion para que te podamos ayudar!</h4>
		<fieldset>
		  <input placeholder="Nombre Contacto" type="text" tabindex="1" required autofocus>
		</fieldset>
		<fieldset>
		  <input placeholder="Email" type="email" tabindex="2" required>
		</fieldset>
		<fieldset>
		  <input placeholder="Numero de Telefono" type="tel" tabindex="3" required>
		</fieldset>
		<fieldset>
		  <input placeholder="Web Preferida" type="url" tabindex="4" required>
		</fieldset>
		<fieldset>
			<input type="radio" name="boton1"> Hombre
			<input type="radio" name="boton1"> Mujer
		</fieldset>
		<fieldset>
			Fecha Nacimiento: <input type="date" name="fecha" size="20">
		</fieldset>
		<fieldset>
			Indique su nivel de satisfacción(de 1 a 10):
			<input type="range" name="rango" min="1" max="10" step="1">
		</fieldset>
		
		<fieldset>
		  <textarea placeholder="Comentarios adicionales...." tabindex="5" required></textarea>
		</fieldset>
		<fieldset>
		  <button name="enviar" type="submit" id="contact-submit" data-submit="...Sending">Enviar</button>
		</fieldset>
	  </form>
	 
	  
	</div>
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