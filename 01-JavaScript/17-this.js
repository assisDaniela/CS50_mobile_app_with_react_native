const person = {
    name: 'jordan',
    greet: function() { console.log(`Hello ${this.name}`)}
}

person.greet(); // Hello jordan
const greet1 = person.greet
greet1(); // Hello undefined
const greet2 = person.greet.bind({name: 'this is a bound object'});
greet2(); // Hello this is a bound object
// Invoca imediatamente
person.greet.apply({name: 'this is a bound object'});
person.greet.call({name: 'this is a bound object'});

const newPerson = {
    name: 'NewPerson',
    greet: () => { console.log(`Hello, ${this.name}`); }
}

newPerson.greet(); // Hello, undefined

const friend = {
    name: 'david',
}

friend.greet = person.greet
friend.greet() // Hello david