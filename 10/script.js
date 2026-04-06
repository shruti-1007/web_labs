// Default theme object
let theme = {
    background: "#ffffff",
    text: "#000000",
    button: "#007bff"
};

// DOM elements
const bgInput = document.getElementById("bgColor");
const textInput = document.getElementById("textColor");
const btnInput = document.getElementById("btnColor");
const resetBtn = document.getElementById("resetBtn");
const content = document.querySelector(".content");

// Initialize inputs with default theme
bgInput.value = theme.background;
textInput.value = theme.text;
btnInput.value = theme.button;

// Function to apply theme
function applyTheme() {
    document.body.style.backgroundColor = theme.background;
    document.body.style.color = theme.text;

    const buttons = document.querySelectorAll("button");
    buttons.forEach(btn => {
        btn.style.backgroundColor = theme.button;
        btn.style.color = "#fff"; // ensure button text is visible
    });
}

// Event listeners for color pickers
bgInput.addEventListener("change", (e) => {
    theme.background = e.target.value;
    applyTheme();
});

textInput.addEventListener("change", (e) => {
    theme.text = e.target.value;
    applyTheme();
});

btnInput.addEventListener("change", (e) => {
    theme.button = e.target.value;
    applyTheme();
});

// Reset button functionality
resetBtn.addEventListener("click", () => {
    theme.background = "#ffffff";
    theme.text = "#000000";
    theme.button = "#007bff";

    bgInput.value = theme.background;
    textInput.value = theme.text;
    btnInput.value = theme.button;

    applyTheme();
});