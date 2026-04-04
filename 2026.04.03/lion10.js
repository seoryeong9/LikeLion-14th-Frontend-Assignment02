let people = [
    { name: "Tom", age: 25 },
    { name: "Jane", age: 25 },
    { name: "Mike", age: 30 }
];

let maxAge = 0;
let oldestName = "";

for (let i = 0; i < people.length; i++) {
    if (people[i].age > maxAge) {
        maxAge = people[i].age;
        oldestName = people[i].name;
    }
}

console.log(oldestName);