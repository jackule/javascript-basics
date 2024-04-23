for (let i = 0; i < 10; i++) {
    console.log(i);
}



const users = ['Max', 'Leo', 'Gigi'];

for (const user of users) {
    console.log(user);
}

// for (let i = 0; i < users.length; i++) {
// console.log(users[i]);
// }


const loggedInUser = {
    name: 'Max',
    age: 32,
    isAdmin: true
}

for (const key in loggedInUser) {
    console.log(key);
    console.log(loggedInUser[key]);
}

let isFinished = false;

while (!isFinished) {
isFinished = confirm('do you want to quit?');
}

console.log('done');