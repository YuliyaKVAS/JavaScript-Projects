function myMap(arr, then){
    let result = new Array();
    arr.forEach(function(currentValue){
        result.push(then(currentValue));
    });

    return result;
}

/*let names = ['HTML', 'CSS', 'JavaScript'];
console.log(myMap(names, function(name){
    return name.length;
}));*/

let users = [
    {
        name: 'Yuliya',
        surname: 'Kusakina'
    },
    {
        name: 'Ivan',
        surname: 'Petrov'
    },
    {
        name: 'Bob',
        surname: 'Stivenov'
    },
    {
        name: 'Tom',
        surname: 'Smith'
    },
    {
        name: 'Leo',
        surname: 'Hamilton'
    }
];

console.log(myMap(users, function(user){
    return user.name;
}));
