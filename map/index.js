function myMap(arr, foo){
    var result = new Array();
    arr.forEach(function(item){
        result.push(foo(item));
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
    }
];

console.log(myMap(users, function(user){
    return user.name;
}));