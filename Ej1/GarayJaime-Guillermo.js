
let encrypt = prompt('Introduce una cadena de texto a cifrar en ROT10');
let decrypt = 'Otowzvy zyb mybdocsk no Xkyws';
const result = [];
function rot10 (encrypt) {
    if (encrypt.length !== 0) {

        for (let i = 0; i <= encrypt.length; i++) {
            let char = encrypt[i].charCodeAt(0);
            
            if (encrypt[i].charCodeAt(0) >= 65 && encrypt[i].charCodeAt(0) <= 90) {
                console.log(`Mayuscula: ${encrypt[i]}`);
                result.push(fromCharCode(encrypt[i].charCodeAt(0) + 10));
                console.log(`Mayuscuka encriptada:`);
            }
            else if (encrypt[i].charCodeAt(0) >= 97 && encrypt[i].charCodeAt(0) <= 122) {
                console.log(`Minus: ${encrypt[i]}`);
            } else {
                console.log(encrypt[i]);
            }
        }
    }
}

rot10(encrypt);
console.log(result);



