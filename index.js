
const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = [];

for (let i = 0; i < a.length; i = i + 1){

    if (a[i] % 2 === 1){ // malý tahák (postup) na rozpoznání sudých/lichých čísel jsem dostal od přítelkyně, ale správný zápis jsem zvládl vymyslet sám 
        odd.push(a[i]); // funkci push jsem si dohledal na Google, nepamatuji si přesný zápis
    }

}

console.log(odd);

// Na google jsem dohledal i funkci filter, která by problém také vyřešila.