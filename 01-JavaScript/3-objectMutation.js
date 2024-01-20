const o = {
    a: 'a',
    b: 'b',
}

const o2 = o;

o.a = 'new value 1';

console.log(o.a); // new value 1

const o3 = Object.assign({}, o);
o3.a = 'new value 2'

console.log(o.a); 
// new value 1
console.log(o3);
// o3: {
//     a: "new value 1",
//     b: "b"
// }

const o4 = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key',
    },
}

const o5 = Object.assign({}, o4);
o5.obj.key = 'new value';
console.log(o4.obj.key);
// new value

// deep copy
function deepCopy(obj) {
    const keys = Object.keys(obj);
    const newObject = {};
    for(let i=0; i < keys.length; i++) {
        const key = keys[i];
        if(typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key]);
        } else {
            newObject[key] = obj[key];
        }
    }

    return newObject;
}