//Colors array
const colors = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];

//get button
const button = document.querySelector('.btn');

//add event listener
button.addEventListener('click', function() {
    //randomizer
    const radndomColor = colors[Math.floor(Math.random() * colors.length)]
    // get container
    let container = document.querySelector('body');

    container.style.background = radndomColor
})
