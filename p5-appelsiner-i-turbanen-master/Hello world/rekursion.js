let tidligere = 0;
let sidste = 1;
let nyetal = 0;
let end = 100;

function fibo() {
    if (nyetal < end){
        nyetal = tidligere + sidste
        tidligere = sidste
        sidste = nyetal
    }
    console.log(nyetal)
    if( nyetal < end ) {
        fibo();
    }

}
