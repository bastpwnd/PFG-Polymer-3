import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class Catalogo extends PolymerElement {
  static get template() {
    return html`
       <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
		  background: #ffffff;
		  color: #dce1df;
		  
        }
		div.cards {
		  margin: 80px auto;
		  max-width: 960px;
		  text-align: center;
		  background: #ffffff;
		  
		}
		img {
			max-width: 850px;
			max-height: 200px;
		  }
		
      </style>
      <h1>Componente catalogo</h1>
	  

	  <div class="cards">
		  <div class="card">
			<img class="card__image" src="../images/tiendaUFV.PNG"  />
			<div class="card-title">
			  <h2>Tienda UFV</h2>
			</div>
			<div class="card-flap flap1">
				<div class="card-actions">
				  <a href="https://www.ufv.es/la-universidad/servicios-de-la-ufv/u-shop/" class="btn">Visitar Tienda</a>
				</div>
			</div>
		  </div>
		  <div class="cards">
		  <div class="card">
			<img class="card__image" src="../images/pcComponentes.PNG"  />
			<div class="card-title">
			  <h2>Tienda PCCOMPONENTES</h2>
			</div>
			<div class="card-flap flap1">
				<div class="card-actions">
				  <a href="https://www.pccomponentes.com/?gclid=Cj0KCQjwz6PnBRCPARIsANOtCw0sxCZQTPxd0FbdW03TJcr5SwAPUM2duaE_n5IGewUiZsozMiUYHnYaAmj9EALw_wcB" class="btn">Visitar Tienda</a>
				</div>
			</div>
		  </div>
		  <div class="cards">
		  <div class="card">
			<img class="card__image" src="../images/amazon.PNG"  />
			<div class="card-title">
			  <h2>Tienda AMAZON</h2>
			</div>
			<div class="card-flap flap1">
				<div class="card-actions">
				  <a href="https://www.amazon.es/" class="btn">Visitar Tienda</a>
				</div>
			</div>
		  </div>
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

window.customElements.define('catalogo-ivan', Catalogo);