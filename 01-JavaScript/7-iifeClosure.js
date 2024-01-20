function makeFunctionArrayWithBug() {
    const arr = [];

    for(var i=0; i<5; i++) {
        arr.push((function (x) {
            return function () { console.log(x) }
        })(i));
    }

    return arr;
}

const arr = makeFunctionArrayWithBug();

arr[3]();
arr[1]();
arr[0]();
arr[2]();