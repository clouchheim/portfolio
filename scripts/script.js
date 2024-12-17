// Function to display a project description
function showDescription(projectName) {
    let descriptions = {
        "Project 1": "Project 1 is about ...",
        "Project 2": "Project 2 focuses on ...",
        "Project 3": "Project 3 involves ..."
    };
    
    // If a description exists for the clicked project, display it
    if (descriptions[projectName]) {
        alert(descriptions[projectName]);
    } else {
        alert("No description available.");
    }
}

// Attach event listeners to project links when the page loads
document.addEventListener("DOMContentLoaded", () => {
    // Get all project links
    let projectLinks = document.querySelectorAll(".project-link");
    
    // Add click event to each project link
    projectLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            let projectName = event.target.textContent;
            showDescription(projectName);
        });
    });
});