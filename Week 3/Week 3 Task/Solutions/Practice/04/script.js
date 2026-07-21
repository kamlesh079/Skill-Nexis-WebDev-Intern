function displayDate() {
    const today = new Date();
    
    // Formats date to a readable string (e.g., "Thursday, July 9, 2026")
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
    
    document.getElementById('dateDisplay').innerText = formattedDate;
}

// Run the function when the page loads
window.onload = displayDate;