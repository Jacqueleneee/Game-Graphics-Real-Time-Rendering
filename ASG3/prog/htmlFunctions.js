/**
 * Updates the text within an HTML element.
 *
 * @param {String} htmlID The ID of an html element.
 * @param {value} x-coordinate of mouse pointer
 * @param {value} y-coordinate of mouse pointer
 CHANGE TEXT TO UPDATE x and y COORDINATES
 */
function sendTextToHTML(htmlID, x, y) {
	 let x_coord = Math.round(x * 100) / 100;
	 let y_coord = Math.round(y * 100) / 100;
  	document.getElementById(htmlID).innerHTML = "x: " + x_coord + "\ty: "  + y_coord;
}


