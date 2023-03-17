// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // Grab information from DOM
    const element = document.getElementById("grid");
    const cellrow = document.createElement("tr");
    const cellchild = document.createElement("td");

    // Add a table row + table data
    element.appendChild(cellrow);
    cellrow.appendChild(cellchild);
}

// Add a column
function addC() {
    // Grab information from DOM
    const cellrows = document.getElementsByTagName("tr");

    // Add a table data to all table rows
    for(var i=0; i < cellrows.length; i++){
        // Create new cellchild for every table row parent
        const cellchild = document.createElement("td");

        // Append child to each table row
        cellrows[i].appendChild(cellchild);
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}