/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import '@polymer/polymer/polymer-element.js';

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="user2-styles">
  <template>
    <style>
	#card2 {
	  position: absolute;
	  width: 450px;
	  height: 225px;
	  padding: 25px;
	  padding-top: 50px;
	  padding-bottom: 0;
	  left: 50%;
	  top: 600.5px;
	  margin-left: -250px;
	  background: #E9E2D0;
	  box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
	  z-index: 5;
	}

	#card2 img {
	  width: 150px;
	  float: left;
	  border-radius: 5px;
	  margin-right: 20px;
	  -webkit-filter: sepia(1);
	  -moz-filter: sepia(1);
	  filter: sepia(1);
	}

	#card2 h2 {
	  font-family: courier;
	  color: #333;
	  margin: 0 auto;
	  padding: 0;
	  font-size: 15pt;
	}

	#card2 p {
	  font-family: courier;
	  color: #555;
	  font-size: 13px;
	}

	#card2 span {
	  font-family: courier;
	}
.left {
		  left: 25px;
		}

		.right {
		  right: 25px;
		}

		.center {
		  text-align: center;
		}

		.bottom {
		  position: absolute;
		  bottom: 25px;
		}
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
