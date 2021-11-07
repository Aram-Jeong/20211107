// array3.js(Array.map, Array.filter)

function User(id, name, point) {
    this.name = name;
    this.id = id;
    this.point = point;

};

const users = [new User('user1', '산초', 90),
    new User('user2', '산톨', 110),
    new User('user3', '별이', 200),
    new User('user4', '달이', 30)
];

console.log(users);

const newUsers = users.map(function(val, ind, ary){
    let newObj = {} // 오브젝트는 중괄호로 선언
    newObj.uid = val.id;
    newObj.uname = val.name;
    newObj.score = val.point;
    newObj.idx = ind;

    return newObj;
});
console.log(newUsers);
console.clear();
const filterUsers = newUsers.filter(function(val, ind){
    return val.idx;  // idx값이 null과 0이면 반환 안 함(false)
}); // 리턴값이 참이면 반환 
console.log(filterUsers);

