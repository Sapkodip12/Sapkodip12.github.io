// script.js

const forgivenessForm = document.getElementById('forgivenessForm');
const anotherChanceForm = document.getElementById('anotherChanceForm');
const reasonForm = document.getElementById('reasonForm');

forgivenessForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(forgivenessForm);
    const forgiveValue = formData.get('forgive');

    if (forgiveValue === 'yes') {
        window.location.href = 'anotherchance.html';
    } else if (forgiveValue === 'no') {
        window.location.href = 'sorry.html';
    }
});

anotherChanceForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(anotherChanceForm);
    const chanceValue = formData.get('chance');

    if (chanceValue === 'yes') {
        alert('You chose to give another chance.');
        // Handle notification or further action here
    } else if (chanceValue === 'no') {
        alert('You chose not to give another chance. Please provide a reason.');
        window.location.href = 'sorry.html';
    }
});

reasonForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(reasonForm);
    const reasonValue = formData.get('reason');

    // Handle the reason provided (e.g., send it to server or display it)
    alert('Reason provided: ' + reasonValue);
});
