// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    // Update global variables
    numRows += 1;

    // Grab information from DOM
    const element = document.getElementById("grid");
    const cellrows = document.getElementsByTagName("tr");
    const cellrow = document.createElement("tr");
    const cellchild = document.createElement("td");

    // Add a table row + table data
    element.appendChild(cellrow);
    cellrow.appendChild(cellchild);

    // Fill row with cells until it equals to numColumns
    for(var i=0; i < numCols; i++){
        const cellchild = document.createElement("td");
        cellrows[numRows-1].appendChild(cellchild);
    }
}

// Add a column
function addC() {
    // Update global variables
    numCols += 1;

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
    // Update global variables
    numRows -= 1;

    // Grab information from DOM
    const cellrows = document.getElementsByTagName("tr");

    // Remove last row of table rows
    cellrows[cellrows.length-1].remove();
}

// Remove a column
function removeC() {
    // Update global variables
    numCols -= 1;

    // Grab information from DOM
    const cellrows = document.getElementsByTagName("tr");

    // Remove a column from every table row
    for(var i=0; i < cellrows.length; i++){
        cellrows[i].removeChild(cellrows[i].lastElementChild);
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    // Grab information from DOM
    const cellrows = document.getElementsByTagName("tr");

    // Iterate through entire matrix of cells
    for(var i=0; i < cellrows.length; i++){
        for(var j=0; j < numCols + 1; j++){

            // Checks if cell has no style attributes
            if(cellrows[i].children[j].getAttribute("style") == null){
                if(colorSelected == "Red"){
                    cellrows[i].children[j].style.backgroundColor = "red";
                }
                else if(colorSelected == "Blue"){
                    cellrows[i].children[j].style.backgroundColor = "blue";
                }
                else if(colorSelected == "Green"){
                    cellrows[i].children[j].style.backgroundColor = "green";
                }
                else if(colorSelected == "Yellow"){
                    cellrows[i].children[j].style.backgroundColor = "yellow";
                }
            }
        }
    }
}

// Fill all cells
function fillAll(){
    // Grab information from DOM
    const cellrows = document.getElementsByTagName("tr");

    // Iterate through entire matrix of cells
    for(var i=0; i < cellrows.length; i++){
        for(var j=0; j < numCols + 1; j++){

            // Fill cells with colorSelected
            if(colorSelected == "Red"){
                cellrows[i].children[j].style.backgroundColor = "red";
            }
            else if(colorSelected == "Blue"){
                cellrows[i].children[j].style.backgroundColor = "blue";
            }
            else if(colorSelected == "Green"){
                cellrows[i].children[j].style.backgroundColor = "green";
            }
            else if(colorSelected == "Yellow"){
                cellrows[i].children[j].style.backgroundColor = "yellow";
            }
        }
    }
}

// Clear all cells
function clearAll(){
    // Grab information from DOM
    const cellrows = document.getElementsByTagName("tr");

    // Iterate through entire matrix of cells
    for(var i=0; i < cellrows.length; i++){
        for(var j=0; j < numCols + 1; j++){

            // Remove style attribute from cells
            cellrows[i].children[j].removeAttribute("style");
        }
    }
}