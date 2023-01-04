let gridContainer = document.querySelector("#gridContainer"); 
gridContainer.textContent= "bananas";

function gridCreate(dimensions){ 
    document.getElementById("gridContainer").innerHTML="";
    paddingPerSquare = (480 / dimensions); 
for(let i = 0; i < dimensions; i++){ 
    const rowGridContainer = document.createElement("div"); 
    rowGridContainer.classList = "gridRowContainer"; 
    gridContainer.append(rowGridContainer);
    for(let i = 0; i < dimensions; i++){ 
        const square = document.createElement("div");
        square.classList = "squareInGrid";
        square.style.padding = paddingPerSquare + "px"; 
        rowGridContainer.appendChild(square); 
        square.addEventListener("mouseover", (e) => { 
            square.style.background = "blue";
        })
    }
}
}

function dimensionsPrompt(){ 
    return prompt("Please enter a grid size under 100");
}

//Execute this when button clicked
const gridSizeButton = document.querySelector("#gridSizeButton");
gridSizeButton.addEventListener("click", (e) => { 
    let gridSize = dimensionsPrompt();
    let continueCondition = true;

    while(continueCondition){ 
    if(gridSize === ""){ 
        alert("You have entered an empty value. Please enter a value betwen 1 and 100."); 
        gridSize = dimensionsPrompt();
    }
    if(gridSize > 100 || gridSize < 1){ 
        alert("Please enter a gridSize over 1 and under 100");
        gridSize = dimensionsPrompt();
    } else { 
    gridCreate(gridSize);
    continueCondition = false;
    }
}

})


