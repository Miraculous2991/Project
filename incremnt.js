// function increment() {
//     console.log("Button clicked!");  
// }

// let count = 0;

// // document.getElementById("count").innerText = count;

function increment() {
    count+= 1;
    document.getElementById("count").innerText = count;
}


// function save() {
//     console.log(count);
// }

// let username = "Alex";

// let message = "You have three new notifications";
// console.log("username:" + " " + username);

// let messageTouser = "Hey " + username + ", " + message + "!";
// console.log(messageTouser);

// let name = "Alex";
// let greetings = "Hi, my name is "
// let myGreeting = greetings+name
// console.log(myGreeting)

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}