function hasCircular(o, visited = []) {
    for(let key of Object.keys(o)) {
        if(typeof o[key] === 'object') {
            if(visited.indexOf(o[key]) > -1) { 
                console.log('circular reference detected in key: ' + key);
                break;
            }

            visited.push(o[key]);

            isInfinite(o[key], visited);
        }
    }
}
