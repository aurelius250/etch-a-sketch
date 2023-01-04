let gridContainer = document.querySelector("#gridContainer"); 
gridContainer.textContent= "bananas";

function blackGradations(percent){ 
    const rgbValue = 255 - (percent * 2.5);
    return `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`
}
function randomizeRGB(){ 
    const rgbValueOne = Math.floor(Math.random() * 255);
    const rgbValueTwo = Math.floor(Math.random() * 255);
    const rgbValueThree = Math.floor(Math.random() * 255);
    const rgbValueFinal =  `rgb(${rgbValueOne}, ${rgbValueTwo}, ${rgbValueThree})`;
    return rgbValueFinal;
}
function gridCreate(dimensions, type){ 
    document.getElementById("gridContainer").innerHTML="";
    paddingPerSquare = ((600 * 1.0)/ dimensions); 
    for(let i = 0; i < dimensions; i++){ 
        const rowGridContainer = document.createElement("div"); 
        rowGridContainer.classList = "gridRowContainer"; 
        gridContainer.append(rowGridContainer);

        for(let i = 0; i < dimensions; i++){ 
            const square = document.createElement("div");
            square.classList = "squareInGrid";
            square.style.width = paddingPerSquare + "px"; 
            square.style.height = paddingPerSquare + "px";
            rowGridContainer.appendChild(square); 
            const gradationTracker = {colorPercent: 0}; 
            
            square.addEventListener("mouseover", (e) =>  { 
                if(type == "randomColorsMode") { 
                square.style.backgroundColor = randomizeRGB();
                return;
                }
                else if(type == "blackGradationsMode") { 
                    if(gradationTracker.colorPercent < 100){ 
                    gradationTracker.colorPercent += 10;
                    square.style.backgroundColor = blackGradations(gradationTracker.colorPercent); 
                    } else { 
                    return; 
                    }
                } else if (type == "black") {
                    square.style.backgroundColor = "black"; 
                    return;
                }
            })
        }
    }
}

function dimensionsPrompt(type){ 
    let gridSize = prompt("Please enter a grid size under 100");
    if(gridSize === "" ||  gridSize === null){ 
        return;
    }
    if(gridSize > 100 || gridSize < 1){ 
        alert("You have entered an invalid value. Please enter a value over 1 and under 100");
        dimensionsPrompt();
    } 
    if(gridSize) { 
        return gridCreate(gridSize, type);
    } 
    else { 
        return;
    }
}

//Execute this when button clicked
const gridSizeButton = document.querySelector("#gridSizeButton");
gridSizeButton.addEventListener("click", (e) => { 
    let type = "black";
    dimensionsPrompt(type);
})

const randomColorsButton = document.querySelector("#randomColorsButton"); 
randomColorsButton.addEventListener("click", () => { 
    const type = "randomColorsMode";
    dimensionsPrompt(type);
})

const blackGradationsButton = document.querySelector("#blackGradationsButton"); 
blackGradationsButton.addEventListener("click", () => { 
    const type = "blackGradationsMode";
    dimensionsPrompt(type);
})

console.log(randomizeRGB());
gridCreate(50, "black");