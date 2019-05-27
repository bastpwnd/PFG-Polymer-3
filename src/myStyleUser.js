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
$_documentContainer.innerHTML = `<dom-module id="user-styles">
  <template>
    <style>
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

		#gradient {
		  background: #999955;
		  background-image: linear-gradient(#DAB046 20%, #D73B25 20%, #D73B25 40%, #C71B25 40%, #C71B25 60%, #961A39 60%, #961A39 80%, #601035 80%);
		  margin: 0 auto;
		  margin-top: 100px;
		  width: 80%;
		  height: 125px;
		}

		#gradient:after {
		  content: "";
		  position: absolute;
		  background: #E9E2D0;
		  left: 50%;
		  margin-top: -67.5px;
		  margin-left: -270px;
		  padding-left: 20px;
		  border-radius: 5px;
		  width: 520px;
		  height: 275px;
		  z-index: -1;
		}

		#card {
		  position: absolute;
		  width: 450px;
		  height: 225px;
		  padding: 25px;
		  padding-top: 50px;
		  padding-bottom: 0;
		  left: 50%;
		  top: 220.5px;
		  margin-left: -250px;
		  background: #E9E2D0;
		  box-shadow: -20px 0 35px -25px black, 20px 0 35px -25px black;
		  z-index: 5;
		}

		#card img {
		  width: 150px;
		  float: left;
		  border-radius: 5px;
		  margin-right: 20px;
		  -webkit-filter: sepia(1);
		  -moz-filter: sepia(1);
		  filter: sepia(1);
		}

		#card h2 {
		  font-family: courier;
		  color: #333;
		  margin: 0 auto;
		  padding: 0;
		  font-size: 15pt;
		}

		#card p {
		  font-family: courier;
		  color: #555;
		  font-size: 13px;
		}

		#card span {
		  font-family: courier;
		}		
    </style>
  </template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
