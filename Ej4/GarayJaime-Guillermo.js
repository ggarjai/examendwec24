let inputNum = prompt('Adivina el numero') || 0;
const adivinaNum = Math.floor(Math.random() * 101);
console.log(adivinaNum);
let count = 0;

while (inputNum != adivinaNum) {

    if (inputNum > adivinaNum) {
        alert(`El número es más bajo`);
        count++;
    }

    if (inputNum < adivinaNum) {
        alert(`El número es más alto`);
        count++;
    }

    if (inputNum === adivinaNum) {
        alert(`Felicidades, has acertado`);
        break;
    }
}

