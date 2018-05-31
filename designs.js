function makeGrid(height, width) {

	// conditional reset to prevent persistent grids
	if (document.querySelector("#pixelCanvas").firstChild) {
		document.querySelector("#pixelCanvas").firstChild.remove();
	};

	// create grid
	tbody = document.createElement("tbody");

	for (i = 0; i < height; i++) {
		const row = tbody.insertRow(0);
		for (j = 0; j < width; j++) {
			const col = row.insertCell(0);
		};

	// pick color
	const color = {
		pickedColor: document.querySelector("input[type=\"color\"]").value
	};

	document.querySelector("input[type=\"color\"]").addEventListener("change", function() {
		color.pickedColor = document.querySelector("input[type=\"color\"]").value;
	});	

	// add painting functionality
	tbody.addEventListener("click", function(e) {
		e.stopPropagation();
		e.target.style.backgroundColor = color.pickedColor;
	});

	document.querySelector("#pixelCanvas").appendChild(tbody);
	}
}

const submit = document.querySelector("input[type=\"submit\"]");

submit.addEventListener("click", function(e) {

	const height = document.querySelector("#inputHeight").value;
	const width = document.querySelector("#inputWidth").value;

	e.preventDefault();
	makeGrid(height, width);
});