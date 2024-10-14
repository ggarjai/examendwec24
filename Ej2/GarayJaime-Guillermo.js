'use strict'

let inputNum = parseInt(prompt('Introduce un número entre 0 y 100'));

function calculateMark (inputNum) {
    
    if (typeof(inputNum) === 'number' && inputNum >= 0 && inputNum <= 100) {
        if (inputNum >= 90) {
            alert(`Tu calificación ${inputNum}
                Nota: A`);
        }
        else if (inputNum < 90 && inputNum >= 80) {
            alert(`Tu calificación ${inputNum}
                Nota: B`);
        }
        else if (inputNum < 80 && inputNum >= 70) {
            alert(`Tu calificación ${inputNum}
                Nota: C`);
        }
        else if (inputNum < 70 && inputNum >= 60) {
            alert(`Tu calificación ${inputNum}
                Nota: D`);
        }
        else {
            alert(`Tu calificación ${inputNum}
                Nota: F`);
        }
    }
    else {
        alert(`El tipo de dato no es correcto. Introduce Num de 0 a 100`);
        inputNum = parseInt(prompt('Introduce un número entre 0 y 100'));
    }
}

calculateMark(inputNum);