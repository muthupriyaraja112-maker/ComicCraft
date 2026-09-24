// Function to dynamically add a new comic panel to the grid
function addPanel() {
    const grid = document.querySelector('.comic-grid');
    if (!grid) return;

    const panelCount = grid.children.length + 1;

    // Create the main panel container
    const newPanel = document.createElement('div');
    newPanel.className = 'panel';

    // Create speech bubble element
    const speechBubble = document.createElement('div');
    speechBubble.className = 'speech-bubble';
    speechBubble.contentEditable = "true"; // Allows inline text editing
    speechBubble.innerText = `Panel ${panelCount}: Edit text...`;

    // Create panel content area
    const panelContent = document.createElement('p');
    panelContent.innerText = '🎨 Click to upload or generate scene art';

    // Append elements to panel
    newPanel.appendChild(speechBubble);
    newPanel.appendChild(panelContent);

    // Append panel to comic grid
    grid.appendChild(newPanel);
}

// Function to handle export action
function exportComic() {
    const panels = document.querySelectorAll('.panel');
    alert(`Exporting project with ${panels.length} panel(s)...`);
}

// Attach event listeners after DOM content loads
document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.querySelector('.btn-group .btn:not(.btn-secondary)');
    const exportButton = document.querySelector('.btn-group .btn-secondary');

    if (addButton) {
        addButton.addEventListener('click', addPanel);
    }

    if (exportButton) {
        exportButton.addEventListener('click', exportComic);
    }
});
