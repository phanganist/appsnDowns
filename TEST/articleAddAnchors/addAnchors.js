const fs = require('fs');
const path = require('path');

// Read the HTML file
const htmlContent = fs.readFileSync(path.join(__dirname, 'haadrin.html'), 'utf8');

// Create a DOM parser
const { JSDOM } = require('jsdom');
const dom = new JSDOM(htmlContent);
const document = dom.window.document;

// Function to convert text to ID format
function textToId(text) {
    return text.toLowerCase().replace(/\s+/g, '_');
}

// Get all H2 elements and create navigation menu
const h2Elements = document.getElementsByTagName('h2');
const navigationLinks = [];

// Add IDs to H2 elements and collect navigation links
Array.from(h2Elements).forEach(h2 => {
    const id = textToId(h2.textContent);
    h2.id = id;
    navigationLinks.push({
        text: h2.textContent,
        id: id
    });
});

// Create navigation menu HTML
const navigationHtml = `
<div class="horizontal-scroll-container">
<h4>|${navigationLinks.map(link => `&nbsp;<a class="hotel-anchor-link" href="#${link.id}">↓${link.text}</a>&nbsp;|`).join('')}</h4>
</div>
`;

// Insert navigation menu at the beginning of the body
const body = document.body;
body.insertAdjacentHTML('afterbegin', navigationHtml);

// Write the modified HTML to a new file
const modifiedHtml = dom.serialize();
fs.writeFileSync(path.join(__dirname, 'haadrin_New.html'), modifiedHtml);

console.log('HTML file has been processed successfully!');
