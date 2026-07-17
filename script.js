document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("part-request-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevents page reload
        
        const customerName = document.getElementById("name").value;
        alert(`Thanks, ${customerName}! Your request for Ramnagar Spares has been received.`);
        
        form.reset(); // Clears inputs
    });
});