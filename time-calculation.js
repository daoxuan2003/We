 // JavaScript to calculate days since a specific date
function calculateDaysTogether(startDate) {
    const currentDate = new Date();
    const timeDifference = currentDate - startDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}

// Set the start date here (YYYY-MM-DD format)
const startDate = new Date('2023-10-22');

// Display the calculated days
document.getElementById('days-number').textContent = calculateDaysTogether(startDate);