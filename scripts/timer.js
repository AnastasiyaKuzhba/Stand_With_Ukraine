document.addEventListener('DOMContentLoaded', function() {
    const warStartDate = new Date('2014-02-26');
    const timerElement = document.getElementById('war-timer');
    
    function updateTimer() {
        const now = new Date();
        const diff = now - warStartDate;
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);
        
        const timerUnits = document.createElement('div');
        timerUnits.className = 'timer-units-container';
        timerUnits.innerHTML = `
            <div class="timer-unit">
                <span class="timer-value">${years}</span>
                <span class="timer-label">Years</span>
            </div>
            <div class="timer-unit">
                <span class="timer-value">${days}</span>
                <span class="timer-label">Days</span>
            </div>
            <div class="timer-unit">
                <span class="timer-value">${hours}</span>
                <span class="timer-label">Hours</span>
            </div>
            <div class="timer-unit">
                <span class="timer-value">${minutes}</span>
                <span class="timer-label">Minutes</span>
            </div>
            <div class="timer-unit">
                <span class="timer-value">${seconds}</span>
                <span class="timer-label">Seconds</span>
            </div>
        `;
        
        // Remove existing timer units if they exist
        const existingUnits = timerElement.querySelector('.timer-units-container');
        if (existingUnits) {
            existingUnits.remove();
        }
        
        // Add new timer units
        timerElement.appendChild(timerUnits);
    }
    
    updateTimer();
    setInterval(updateTimer, 1000); // Update every second
}); 