// Utility helper to format numbers to 2 digits (e.g., 4 -> "04")
const formatZero = (num) => String(num).padStart(2, '0');

// 1. Live Digital Clock Functional Logic
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = formatZero(now.getMinutes());
    const seconds = formatZero(now.getSeconds());
    const amPm = hours >= 12 ? 'PM' : 'AM';

    // Convert 24h format to 12h format
    hours = hours % 12;
    hours = hours ? hours : 12; // if hour is 0, make it 12
    const formattedHours = formatZero(hours);

    document.getElementById('digital-clock').textContent = 
        `${formattedHours}:${minutes}:${seconds} ${amPm}`;
}

// 2. Countdown Timer Functional Logic
function updateCountdown() {
    const currentYear = new Date().getFullYear();
    const nextNewYear = new Date(`January 1, ${currentYear + 1} 00:00:00`).getTime();
    const now = new Date().getTime();
    
    const difference = nextNewYear - now;

    // Time calculations for days, hours, minutes and seconds
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    const h = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((difference % (1000 * 60)) / 1000);

    // Render numbers inside the DOM elements
    document.getElementById('days').textContent = formatZero(d);
    document.getElementById('hours').textContent = formatZero(h);
    document.getElementById('minutes').textContent = formatZero(m);
    document.getElementById('seconds').textContent = formatZero(s);
}

// Initialize and setup intervals for real-time loops
setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);

// Run immediately once on loading so there is no 1-second delay lag
updateClock();
updateCountdown();