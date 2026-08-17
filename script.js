// Javascript Code File 

console.log("RecycleRight is running!");

// Variables 
const heading1 = document.querySelector("h1");
const paragraphs = document.querySelectorAll(".description"); 
const item = "metal";
let item = prompt("What item are you scanning?"); 

heading1.textContent = "Welcome to RecycleRight!";


// use document.querySelector to select elements or classes from the HTML file.
const scanButton = document.querySelector(".scan-button"); 


// Add an event listener to the scanButton that triggers an alert when clicked.
scanButton.addEventListener("click", function() {
    heading1.textContent = "Scanner Button Clicked!";
    paragraphs[0].textContent = "You have successfully scanned an item!";
    paragraphs[1].textContent = "Good work man"; 
});


// function with paragraph as the parameter 
paragraphs.forEach(function(paragraph, index) {
    paragraph.textContent = "Description #" + (index + 1); 
}); 


// Function to check items and update paragraph text based on it 
scanButton.addEventListener("click", function() {
    if (item === "plastic") {
        heading1.textContent = "The item is Plastic";
        paragraphs[0].textContent = "Plastic detected!";
        paragraphs[1].textContent = "Check whether this type of plastic is recyclable.";
    } else if (item === "glass") {
        paragraphs[0].textContent = "Glass Detected!";
        paragraphs[1].textContent = "Glass may need to be separated from other recyclables.";
    } else if (item === "metal") {
        paragraphs[0].textContent = "Metal Detected!"
        paragraphs[1].textContent = "Metal needs to be safely recycled or disposed based on its type.";

    }
    else {
        heading1.textContent = "Unknown item";
        paragraphs[0].textContent = "We couldn't identify this item.";
        paragraphs[1].textContent = "Try scanning again.";
    }
});