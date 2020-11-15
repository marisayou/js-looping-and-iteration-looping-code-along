// Code your solutions in this file

function writeCards(names, event) {
    let messages = [names.length];
    for (let i = 0; i < names.length; i++) {
        messages[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
    return messages;
}

function countDown(num) {
    while (num > -1) {
        console.log(num);
        num--;
    }
}