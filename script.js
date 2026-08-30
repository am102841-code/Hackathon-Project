// Javascript Code File 

console.log("RecycleRight is running!");

// Variables 
const heading1 = document.querySelector("h1");
const paragraphs = document.querySelectorAll(".description"); 
const itemInput = document.querySelector(".item-input");
const camera = document.querySelector(".camera");
const photoButton = document.querySelector(".photo-button")
const canvas = document.querySelector(".snapshot");
const retakeButton = document.querySelector(".retake-button")
const analyzeButton = document.querySelector(".analyze-button")  
canvas.style.display = "none"; 
let cameraStream; 
let photoTaken = false; 

heading1.textContent = "Welcome to RecycleRight!";


// use document.querySelector to select elements or classes from the HTML file.
const scanButton = document.querySelector(".scan-button"); 

const Info = {
    plastic: {
        recyclable: true,
        message: "Recycling just one plastic bottle saves enough energy to power a light bulb for 3 hours." 
    },

    glass: {
        recyclable: true, 
        message: "Rinse glass containers before putting them in the recycling bin."
    },

    metal: {
        recyclable: true, 
        message: "Metal is valuable because it can often be recycled repeatedly without losing its useful properties."
    },

    paper: {
        recyclable: true, 
        message: "Keep paper clean and dry before putting it in the recycling bin."
    }
};


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
    let item = itemInput.value.trim().toLowerCase(); 
    
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

// getUserMedia() → requests camera/microphone access
// stream → the live camera data
// srcObject → connects that stream to the <video> element

scanButton.addEventListener("click", function() {
    startCamera(); 
});

// context.drawImage(source, x, y, width, height);

photoButton.addEventListener("click", function() {
    const context = canvas.getContext("2d"); 
    context.drawImage(camera, 0, 0, 400, 300);
    canvas.style.display = "block"; 
    photoTaken = true; 
    cameraStream.getTracks().forEach(function(track) {
        track.stop(); 
    });
});

function startCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(function(stream) {
            cameraStream = stream; 
            camera.srcObject = stream;
        });
}

// retakeButton 

retakeButton.addEventListener("click", function() {
    canvas.style.display = "none"; 
    startCamera(); 
});

// analyzeButton

analyzeButton.addEventListener("click", function() {
    if (photoTaken == false) {
        heading1.textContent = "No photo"; 
        paragraphs[0].textContent = "Please take a photo before analyzing"; 
        alert("No photo. Please take a photo before analyzing");
        return; 
    }
    let item = document.querySelector(".item-input").value.trim().toLowerCase();
    heading1.textContent = "Analyzing your item..."; 
    paragraphs[0].textContent = "Checking the photo for recyclable"; 
    paragraphs[1].textContent = "Please wait...";

    setTimeout(function () {
        if (item === "plastic") {
            heading1.textContent = "The item is Plastic";
            paragraphs[0].textContent = "Plastic detected!";
            paragraphs[1].textContent = "Check whether this type of plastic is recyclable.";
        }

        else if (item === "glass") {
            heading1.textContent = "The item is Glass"; 
            paragraphs[0].textContent = "Glass detected!";
            paragraphs[1].textContent = "Glass bottles and jars are easily recyclable."; 
        }

        else if (item === "metal") {
            heading1.textContent = "The item is Metal"; 
            paragraphs[0].textContent = "Metal detected!"; 
            paragraphs[1].textContent = "Most types of metals can be recycled.";
        }

        else {
            heading1.textContent = "Unknown Item"; 
            paragraphs[0].textContent = "Please scan the item again";
            paragraphs[1].textContent = "With a new view we can determine the proper measures.";
        }

    }, 2000); 
});


