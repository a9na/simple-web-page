// Get the 2D rendering context for the canvas
const ctx = canvas.getContext("2d");

// Set up an event listener to regenerate the tree when the canvas is clicked
canvas.addEventListener("click", () => {
    treeSeed = Math.random() * 10000 | 0;  // Random seed for tree generation
    treeGrow = 0.1;  // Reset tree growth to initial value
});

// Function to generate random numbers based on a seed
const seededRandom = (() => {
    var seed = 1;
    return {
        max: 2576436549074795,
        reseed(s) { seed = s; },  // Set the seed
        random() {  // Generate a random number
            return seed = ((8765432352450986 * seed) + 8507698654323524) % this.max;
        }
    };
})();
const randSeed = (seed) => seededRandom.reseed(seed | 0);  // Reinitialize random number generator with a seed
const randSI = (min = 2, max = min + (min = 0)) => (seededRandom.random() % (max - min)) + min;  // Generate integer in a range
const randS = (min = 1, max = min + (min = 0)) => (seededRandom.random() / seededRandom.max) * (max - min) + min;  // Generate floating-point number in a range

// Constants for tree growth and branching parameters
const angMin = 0.01;  // Minimum branching angle
const angMax = 0.6;  // Maximum branching angle
const lengMin = 0.8;  // Minimum length reduction per branch
const lengMax = 0.9;  // Maximum length reduction per branch
const widthMin = 0.6;  // Minimum width reduction per branch
const widthMax = 0.8;  // Maximum width reduction per branch
const trunkMin = 6;  // Minimum trunk width
const trunkMax = 10;  // Maximum trunk width
const maxBranches = 200;  // Maximum number of branches

// Constants for wind simulation
const windX = -1;  // Wind direction vector (X-axis)
const windY = 0;  // Wind direction vector (Y-axis)
const bendability = 8;  // How much branches bend due to wind
const windStrength = 0.01 * bendability * ((200 ** 2) / (canvas.height ** 2));  // Strength of wind effect
const windBendRectSpeed = 0.01;  // Speed at which wind affects branches
const windBranchSpring = 0.98;  // Damping factor for branch movement
const gustProbability = 1 / 100;  // Probability of wind gusts

var windCycle = 0;  // Cycle for wind animation
var windCycleGust = 0;  // Gust strength in the wind cycle
var windCycleGustTime = 0;  // Duration of wind gusts
var currentWind = 0;  // Current strength of wind
var windFollow = 0;  // Wind-following effect
var windActual = 0;  // Actual wind effect

var treeSeed = Math.random() * 10000 | 0;  // Initial seed for tree generation

var branchCount = 0;  // Counter for branches
var maxTrunk = 0;  // Width of the trunk
var treeGrow = 0.01;  // Growth factor for the tree

// Function to draw the tree
function drawTree(seed) {
    branchCount = 0;  // Reset branch count
    treeGrow += 0.02;  // Increase tree growth factor
    randSeed(seed);  // Initialize random number generator with the seed
    maxTrunk = randSI(trunkMin, trunkMax);  // Determine trunk width
    drawBranch(canvas.width / 2, canvas.height, -Math.PI / 2, canvas.height / 5, maxTrunk);  // Start drawing from the canvas center
}

// Function to draw a branch
function drawBranch(x, y, dir, leng, width) {
    branchCount++;
    const treeGrowVal = (treeGrow > 1 ? 1 : treeGrow < 0.1 ? 0.1 : treeGrow) ** 2;  // Adjust growth value

    // Calculate the new branch end position
    const xx = Math.cos(dir) * leng * treeGrowVal;
    const yy = Math.sin(dir) * leng * treeGrowVal;
    const windSideWayForce = windX * yy - windY * xx;  // Effect of wind on branch direction

    // Adjust direction based on wind effect
    dir += (windStrength * windActual) * ((1 - width / maxTrunk) ** bendability) * windSideWayForce;
    
    ctx.lineWidth = width;  // Set the branch width
    ctx.beginPath();  // Start a new path for the branch
    ctx.lineTo(x, y);  // Draw line from current position
    x += Math.cos(dir) * leng * treeGrowVal;  // Update x position
    y += Math.sin(dir) * leng * treeGrowVal;  // Update y position
    ctx.lineTo(x, y);  // Draw line to new position
    ctx.stroke();  // Render the branch

    // Recursively draw the two branches from the current branch
    if (branchCount < maxBranches && leng > 5 && width > 1) {
        const rDir = randSI() ? -1 : 1;  // Randomly choose branch direction

        treeGrow -= 0.2;  // Adjust growth for the current branch
        drawBranch(
            x, y,
            dir + randS(angMin, angMax) * rDir, 
            leng * randS(lengMin, lengMax), 
            width * randS(widthMin, widthMax)
        );  // Draw first branch
        drawBranch(
            x, y,
            dir + randS(angMin, angMax) * -rDir, 
            leng * randS(lengMin, lengMax), 
            width * randS(widthMin, widthMax)
        );  // Draw second branch
        treeGrow += 0.2;  // Reset growth adjustment
    }
}

// Function to update wind effects
function updateWind() {
    if (Math.random() < gustProbability) {
        windCycleGustTime = (Math.random() * 10 + 1) | 0;  // Randomly generate wind gust duration
    }
    if (windCycleGustTime > 0) {
        windCycleGustTime--;
        windCycleGust += windCycleGustTime / 20;  // Update gust strength
    } else {
        windCycleGust *= 0.99;  // Gradually reduce gust strength
    }
    windCycle += windCycleGust;  // Update wind cycle
    currentWind = (Math.sin(windCycle / 40) * 0.6 + 0.4) ** 2;  // Calculate current wind strength
    currentWind = currentWind < 0 ? 0 : currentWind;  // Ensure non-negative wind strength
    windFollow += (currentWind - windActual) * windBendRectSpeed;  // Update wind-following effect
    windFollow *= windBranchSpring;  // Apply damping
    windActual += windFollow;  // Apply wind effect
}

// Animation loop to update the canvas
requestAnimationFrame(update);
function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
    updateWind();  // Update wind effects
    drawTree(treeSeed);  // Draw the tree
    requestAnimationFrame(update);  // Request the next animation frame
}
