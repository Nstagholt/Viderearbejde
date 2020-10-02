console.log("hello world");

let result = 0;
console.log(result);

result = result + 5;
console.log(result);

result = result + 10;
console.log(result);

result -= 5;
console.log(result);

result += 100;
console.log(result);

result /= 3
console.log(result);

result *= 7
console.log(result);

function myFunction() {
    var svar = 199;
    var svar2 = 200;
    var greeting;
    if (svar === svar2) {
        greeting = "this is correct";
    } else {
        greeting = "This is not correct";
    }
    document.getElementById("demo").innerHTML = greeting;
}



function temperatur() {
    var temp = 10;
    var greeting;
    if (temp < 21) {
        greeting = "Under stuetemperatur"
    }
    else if(temp > 21){
        greeting = "over stuetemperatur"
    }
    else{
        greeting = "stuetemperatur"
    }
    document.getElementById("demo1").innerHTML = greeting;









}