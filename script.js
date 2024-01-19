// Get references to DOM elements
const navLinks = document.querySelectorAll('nav ul li a');
const mainContent = document.querySelector('main');

// Function to load content for a specific section
function loadContent(section) {
    // You can fetch content from a server or manipulate the DOM here
    mainContent.textContent = `This is the ${section} section.`;
}

// Event listeners for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const section = this.textContent;
        loadContent(section);
    });
});

// Initial content (e.g., load the Home section by default)
loadContent('Home');



