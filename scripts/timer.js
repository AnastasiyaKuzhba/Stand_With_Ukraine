document.addEventListener('DOMContentLoaded', function () {
  const warStartDate = new Date('2014-02-26');
  const timerElement = document.getElementById('war-timer');

  //Timer update function
  function updateTimer() {
    const now = new Date();
    const diff = now - warStartDate; //Calculates the difference between the current date and the war start date

    //Breaks down into different units of time
    //Math.floor rounds down to the nearest whole number
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    //HTML structure for the timer
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

  //Updates the timer immediately and then updates it every second
  updateTimer();
  setInterval(updateTimer, 1000); // Update every second
}); 