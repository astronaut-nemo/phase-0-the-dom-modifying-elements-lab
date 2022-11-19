// Write your code here!
// No lnger has DOM node #main
const main = document.getElementById("main");
main.remove();

// Has a 'newHeader' variable pointing to a <h1> node
const newHeader = document.createElement('h1');

// 'newHeader' node has an id of victory
newHeader.id = 'victory';

// 'newHeader' has the text "YOUR-NAME" is the champion" in it
newHeader.textContent = 'Jo is the champion';
