let keepPrime = []; //create array for keep prime number from loop fuction 
//this fuction made for get value and send to loop fuction
function printPrime() {
    let n = document.getElementById('takenumbers').value //this line create parameter n and keep value from method getElementByID
    n = parseInt(n); //this line change type of parameter n from string to int by method parseint
    if (n === "" || n <= 2) { //this line is in case that user enter number lower than 2 or the form is empyty and click button the alert will appear on user screen
        alert('Please enter number greater or equal 2');
    } else {
        loop(n) //and if user enter number equal 2 or greater it'll call loop fuction and give agurement n from the form that user enter 
    }
    showPrime()
}
//this fuction made for loop number 2 to n and called checkPrime fuction 
function loop(n) {
    for (let i = 2; i <= n; i++) { //this line we used to loop number from 2 to n 
        if (checkPrime(i)) { //this line we called fuction checkPrime and give i agurement to this fuction
            keepPrime.push(i);// this line we keep prime number that return from checkprime function
        }
    }
}

// take agurement "n" for check that n is prime or not 
// 1.prime = true
// 2.prime = false
function checkPrime(n) {
    // n will be prime number if can divide by 1 and itself
    //loop number 2 --> n-1
    for (let i = 2; i < n; i++)   // we get 2 --> n-1 to modular n
        if (n % i === 0) {
            return false;
        }
    //from below is all number is mudular and not equal to 0 that's mean n is prime number
    return true;
}

//This fuction have made for show prime number from array
function showPrime() {   //this fuction is not available for now it should be able to deploy before 28/7/67
    let print = document.getElementById('showPrime');
    print.innerHTML = "";
    print.innerHTML = `(${keepPrime})`;
}









