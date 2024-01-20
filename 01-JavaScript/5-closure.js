function makeHelloFunction() {
    const message = 'Hello!';
    function sayHello() {
        console.log(message);
    }

    return sayHello;
}

const sayHello = makeHelloFunction();
console.log('typeof message: ', typeof message);
console.log(sayHello.toString());
sayHello();

function makeFunctionArrayWithBug() {
    const arr = [];

    for(var i=0; i<5; i++) {
        arr.push(function () { console.log(i) })
    }

    console.log(i);
    return arr;
}

const arr = makeFunctionArrayWithBug();

arr[0]();
arr[2]();
arr[1]();
arr[3]();