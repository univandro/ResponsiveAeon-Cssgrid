/*	Responsive Aeon Grid v2.0
	Designed & Built by Fernando Monteiro, http://www.newaeonweb.com.br	
	Licensed under GPL license, http://www.gnu.org/licenses/gpl-3.0-standalone.html
	
	Base stylesheet with CSS Reset, grid and progressive responsiveness*/



//Basic script for Responsive navigation

$(document).ready(function () {
  selectnav('nav', {
		  label: '--- Table of content --- ',//first select field
		  nested: true,
		  indent: '-'
	 });
});

