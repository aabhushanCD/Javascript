let currentDisplay = '';
document.querySelector('#display').value = currentDisplay;


function backspace() {
    let currentDisplay = document.querySelector('#display');
    currentDisplay.value = currentDisplay.value.slice(0, -1); // Remove the last character
}
