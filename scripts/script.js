// Initial Handshake
console.log('Script: LOADED!');

// Initialize containers
const liveCoding = document.getElementById('live-coding');
const exercise = [];
let message = '';

// EXERCISE 1: 
message = `EX1 - ResultEx1: `;
exercise.push(message);



// RESULTS
for (let i = 0; i < exercise.length; i++) {
    const result = document.createElement('p');
    result.classList.add('result');
    result.innerHTML = exercise[i];
    liveCoding.append(result);
}
 