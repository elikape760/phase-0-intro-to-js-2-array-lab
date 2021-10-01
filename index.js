// Write your solution here!
//const cats  = ["Milo", "Otis", "Garfield"];
const cats  = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(`${name}`);
    console.log(cats);
}

function destructivelyPrependCat(name) {
    cats.unshift(`${name}`);
    console.log(cats);
}

function destructivelyRemoveLastCat() {
    cats.pop();
    console.log(cats);
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    console.log(cats);
}

function appendCat(name) {
    const cats1 = [...cats, `${name}`];
    return cats1;
    console.log(cats1);
}

function prependCat(name) {
    const cats1 = [ `${name}`, ...cats];
    return cats1;
    console.log(cats);
    console.log(cats1);
}

function removeLastCat() {
    const cats1 = cats.slice(0,2); 
    return (cats1);
    console.log (cats1);
}

function removeFirstCat() {
    const cats1 = cats.slice(-2); 
    return (cats1);
    console.log (cats1);
}




