// const person: {name: string, age: number} ={}
// const person: {
//   name: string
//   age: number
//   hobbies: string[]
//   role: [number, string]
// } = {
//   name: 'Manish',
//   age: 35,
//   hobbies: ['sports', 'Cooking'],
//   role: [2, 'author']
// }
// const Admin = 0
// const Read_Only = 1
// const Author = 2
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Read_only"] = 1] = "Read_only";
    Role[Role["Author"] = 2] = "Author";
})(Role || (Role = {}));
;
var person = {
    name: 'Manish',
    age: 35,
    hobbies: ['sports', 'Cooking'],
    role: Role.Admin
};
// person.role.push('admin')
// person.role[1] = 10
var favoriteActivities;
favoriteActivities = ['sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
if (person.role === Role.Admin) {
    console.log("is admin");
}
