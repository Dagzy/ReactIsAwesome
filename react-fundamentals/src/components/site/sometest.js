// var kvArray = [
//     { key: 1, value: 10 },
//     { key: 2, value: 20 },
//     { key: 3, value: 30 }
// ];

// console.log(kvArray);

// var reformattedArray = kvArray.map(obj => {
//     var rObj = {};
//     console.log(obj)
//     rObj[obj.key] = obj.value;
//     console.log(rObj);
//     return rObj;
// })
// console.log(reformattedArray)

import React from 'react';

export const doMath = (props) => {
    console.log(props);
    return <div>{props.title}</div>
}
