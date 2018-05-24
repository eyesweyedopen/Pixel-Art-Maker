const colorPicker = {
	obj: document.getElementById('colorPicker'),
	color: document.getElementById('colorPicker').value
};

const button = document.querySelector('input[type="submit"]');

function makeGrid() {
  	// Your code goes here!

  	// reset
  	document.querySelector('#pixelCanvas').innerHTML = '';

  	// fetch dimensions
  	const height = document.querySelector('#inputHeight').value;
	const width = document.querySelector('#inputWidth').value;

  	// create table
  	const tbody = document.createElement('tbody');

  	for (i = 0; i < height; i++) {
  		const tr = document.createElement('tr');

		for (let j = 0; j < width; j++) {
			const el = document.createElement('td');
			tr.appendChild(el);
		};

		tbody.appendChild(tr);
	};
	
	// add table to document
	document.querySelector('#pixelCanvas').appendChild(tbody);
	tbody.setAttribute("id", "evtContainer")
};

function pickColor() {
	colorPicker.obj.addEventListener("change", function() {
		colorPicker.color = document.querySelector('#colorPicker').value;
		console.log(colorPicker.color);
	});
};

function painter() {
	const pixelCanvas = document.getElementById('evtContainer');
	pixelCanvas.addEventListener("click", function(e) {
		e.target.style.backgroundColor = colorPicker.color;
	});
};

// main
document.addEventListener("DOMContentLoaded", function() {

	// When size is submitted by the user, call all appropriate functions
	button.addEventListener("click", function(e) {
		e.preventDefault();
		makeGrid();
		pickColor();
		console.log(colorPicker.color);
		painter();
	});
})
