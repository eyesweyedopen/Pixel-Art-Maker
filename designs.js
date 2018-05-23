// Select color input
const color = document.querySelector('#colorPicker');
// Select size input

// When size is submitted by the user, call makeGrid()
const button = document.querySelector('input[type="submit"]');
button.addEventListener("click", function(e) {
		e.preventDefault();
		makeGrid();
	});

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
};