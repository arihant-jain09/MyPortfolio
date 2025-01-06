// Toggle Theme
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
// Contact Form Submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent successfully.`);
        contactForm.reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});

// Search Functionality
const searchBar = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

searchButton.addEventListener('click', () => {
    const query = searchBar.value.toLowerCase();
    const sections = document.querySelectorAll('section');
    let results = '';

    sections.forEach(section => {
        if (section.textContent.toLowerCase().includes(query)) {
            results += `<p>Found in section: <strong>${section.id}</strong></p>`;
        }
    });

    searchResults.innerHTML = results || '<p>No matches found.</p>';
});

// GitHub API Integration
const projectsSection = document.getElementById('projects');

async function fetchGitHubRepos() {
    try {
        const response = await fetch('https://api.github.com/users/yourusername/repos');
        const repos = await response.json();

        const repoList = document.createElement('div');
        repoList.innerHTML = '<h3>My GitHub Repositories:</h3>';

        repos.forEach(repo => {
            const repoItem = document.createElement('div');
            repoItem.classList.add('repo');
            repoItem.innerHTML = `
                <h4>${repo.name}</h4>
                <p>${repo.description || 'No description available.'}</p>
                <a href="${repo.html_url}" target="_blank">View Repository</a>
            `;
            repoList.appendChild(repoItem);
        });

        projectsSection.appendChild(repoList);
    } catch (error) {
        console.error('Error fetching repositories:', error);
    }
}

fetchGitHubRepos();
