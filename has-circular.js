/*
// EXAMPLE

var objectA = {
    property1: 'test'
};

objectA.self = objectA;

hasCircular(objectA);

var objectB = {
    property1: 'test',
    property2 : {
    }
};

objectB.property2.self = objectB;

hasCircular(objectB);

*/

function hasCircular(o, visited = []) {
    for(let key of Object.keys(o)) {
        if(typeof o[key] === 'object') {
            if(visited.indexOf(o[key]) > -1) { 
                console.log('circular reference detected in key: ' + key);
                break;
            }

            visited.push(o[key]);

            hasCircular(o[key], visited);
        }
    }
}
