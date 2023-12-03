
// Function to create a circle element
function createCircle(cx, cy, r, fill, opacity) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", cx);
    circle.setAttribute("cy", cy);
    circle.setAttribute("r", r);
    circle.setAttribute("fill", fill);
    circle.setAttribute("opacity", opacity);
    return circle;
}

// Function to create a rectangle element
function createRectangle(x, y, width, height, fill, opacity) {
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", x);
    rect.setAttribute("y", y);
    rect.setAttribute("width", width);
    rect.setAttribute("height", height);
    rect.setAttribute("fill", fill);
    rect.setAttribute("opacity", opacity);
    return rect;
}
  

async function generateShapes(){
    // Get the SVG element
    const svg = document.querySelector('.background-shapes');

    // Example: Add circles and rectangles dynamically
    for (let i = 0; i < 3; i++) {
        const x = Math.floor(Math.random() * 120); // Random number between 0 and 120
        const y = Math.floor(Math.random() * 80) + 10; // Random number between 10 and 90
        const opacity = Math.random() * 0.5; // Random opacity between 0 and 0.5
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
    
        const circle = createCircle(x, y, 10, `rgb(${r},${g},${b})`, opacity);
        svg.appendChild(circle);
    
        const rect = createRectangle(x, y, 20, 20, `rgb(${r},${g},${b})`, opacity);
        svg.appendChild(rect);
    }
}