//create array 'keepPrime' to get prime number and print in the end
//create an input to get n
//create function 'checkPrime'  .This fuction can check that number is prime or not if true push to keepPrime
//create function 'loop'        .This fuction was create to loop from 2 to n
//create function 'printPrime'  .

//on function checkPrime have to take n from input 
//  create const 'l' to take numbers from input   
let keepPrime = [];

function printPrime() {
    let n = document.getElementById('takenumbers').value
    n = parseInt(n);
    if (n === "" || n <= 2) {
        alert('Please enter number greater or equal 2');
    } else {
        loop(n)
    }
}

function loop(n) {

    for (let i = 2; i < n; i++) {
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}


function checkPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}








