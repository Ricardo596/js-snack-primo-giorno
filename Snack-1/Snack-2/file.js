/* l'utente inserisce due parole in successione, con due prompt. Il softare stampa la parola più corta, poi la più lunga. */

const firstWord = prompt ("parallelepipedo");
const secondWord = prompt ("triangolo");

if (firstWord > secondWord){ console.log (`long word ${firstWord}is more long than ${secondWord}`)
};
else if (secondWord > firstWord) {
    console.log(`the first word: ${firstWord}is more smaller than ${secondWord}`)
};
else console.log (word are equal):