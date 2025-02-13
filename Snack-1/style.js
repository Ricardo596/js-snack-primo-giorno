/*L'utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore*/

const number = parseFloat (prompt("10"));
const numbertwo = parseFloat(prompt("5"));

if (number > numbertwo){
 console.log ("il numero maggiore è" + number)

};

else if (number < numbertwo) {
    console.log("il numero maggiore è" + numbertwo)
};



const firstNumb = Number(prompt('Type the first number'));
const secondNumb = Number(prompt('Type the second number'));
console.log(firstNumb, secondNumb);

if (firstNumb > secondNumb) {
    console.log(`The first number is greater: ${firstNumb}`);
}; 

