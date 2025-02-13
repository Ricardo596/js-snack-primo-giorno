/* l'utente inserisce due parole in successione, con due prompt. Il softare stampa la parola più corta, poi la più lunga. */

const firstWord = prompt ("type a word");
const secondWord = prompt ("type a word");

if (firstWord > secondWord){ console.log (`long word ${firstWord}is more long than ${secondWord}`)
};
else if (secondWord > firstWord) {
    console.log(`the first word: ${firstWord}is more smaller than ${secondWord}`)
};
else console.log (word are equal):