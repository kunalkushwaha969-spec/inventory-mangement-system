// Wait for the HTML document to fully load before running the script
document.addEventListener("DOMContentLoaded", () => {
    
    // Grab the form element by its ID
    const form = document.getElementById("part-request-form");

    // Listen for the user hitting the 'Submit' button
    form.addEventListener("submit", function(event) {
        
        // Prevent the default HTML behavior (which refreshes the page)
        event.preventDefault();
        
        // Grab the value the user typed into the 'name' input
        const customerName = document.getElementById("name").value;

        // Show a simple success message to the user
        alert(`Thank you, ${customerName}! Your part request has been received. We will contact you shortly.`);

        // Clear the form fields for the next entry
        form.reset();
    });
});