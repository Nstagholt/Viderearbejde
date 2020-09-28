//skrive ting flere gange
// I her står for index.
for (let i = 0; i < 5; i++) {
    console.log("loop");
    //Nedenstående koder betyder at når index er lig med 3, så vil koden breake (stoppe)
    if (i === 3) break;
}

// hello world 5 gange.
for (let i = 0; i < 5; i++) {
    console.log("hello world");
}
//kode for at vise ulig numre. Her bruges der også et if statement.
for (let i = 0; i < 5; i++) {
    if (i / 2 !== 0) console.log(i);
}