// array2.js
const numbers = [3, 34, 28, 12, 5];

let sum = 0;
numbers.forEach(function (val, ind, ary) {
    // if(ind % 2 === 0) // 홀수 위치값들만
    // if(val > 10)
    // sum += val;
   // document.write(`<h1>${val}</h1>`)
});

console.log(`합계: ${sum}`);

document.write('<button onclick="createList()">생성</button>');
document.write('<div id="show"></div>');

function createList(){
    let fruits = ['Apple', 'Banana', 'Cherry'];
    let ulTag, liTag;
    ulTag = document.createElement('ul'); //<ul></ul>

    for(let fruit of fruits){
        liTag=document.createElement('li');
        liTag.innerHTML = fruit;
        liTag.id = fruit.toLocaleLowerCase();
        ulTag.appendChild(liTag);
    }

    // let liTag = document.createElement('li'); //<li></li>
    // liTag.innerHTML = 'Apple'; //<li>Apple</li>
    // liTag.id = 'apple';
    // ulTag.appendChild(liTag); //<ul><li>Apple</li></ul>
    
    // liTag=document.createElement('li');
    // liTag.innerHTML = 'Banana';
    // liTag.id = 'Banana';
    // ulTag.appendChild(liTag);

    // liTag=document.createElement('li');
    // liTag.innerHTML = 'Cherry';
    // liTag.id = 'Cherry';
    // ulTag.appendChild(liTag);
    // console.log(ulTag);

    document.getElementById("show").appendChild(ulTag);
    
}

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

let str
function showList(){
let str = '<h1>회원리스트</h1>';
str += '<table border="1">';
str += '<tbody>';
users.forEach(callBackFnc); 
str += '</tbody>';
str += '</table>';
document.write(str);
}
function callBackFnc(val, ind, ary) {
    str += '<tr><td>' + val.id + '</td><td>' + val.name + '</td><td>' + val.point + '</td></tr>';
}
