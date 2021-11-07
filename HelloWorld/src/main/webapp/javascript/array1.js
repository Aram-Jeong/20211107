// array1.js
const persons = [];

function addFnc() {
    let addBtn = document.getElementById('add');
    let val = addBtn.value;
    persons.unshift(val); // 배열에 요소를 추가

    console.log(persons);
}

function remFnc() {
    // persons.shift();
    let findVal = document.getElementById('add').value;
    let cnt = -1; //초깃값이 0이 되면 조건만족하지 않을 경우 인덱스 0이 삭제될 수 있어서 0대신 넣음
    for (let i = 0; i < persons.length; i++) {
        if (persons[i] === findVal) {
            cnt = i;
            break;
        }
    }
    if (cnt >= 0) {
        persons.splice(cnt, 1); // 대체값을 안 주면 삭제 기능으로 쓸 수 있다.
    }
    console.log(persons);
} // remFnc end

document.write('<input type="text" id="add">');
document.write('<button onclick="addFnc()">추가</button>');
document.write('<button onclick="remFnc()">삭제</button>');

const ary = ['hong', 'hwang']; // new Array();
console.log(ary[0])
ary[0] = 'hong1';
ary[1] = 'hwang1';
ary[2] = 'park';


ary.push('choi'); // 마지막에 추가
//ary.pop(); // 배열의 제일 마지막 위치에 있는 값 제거
// delete ary[3]; // 값은 지워도 공간은 남음 undefined
// ary.splice(3, 2, 'new park', 'new kim', 'new lee');  // (인덱스 위치, 그 위치부터 n개까지, 새로운 값으로 대체)
ary.splice(3, 0, 'new choi'); // Splice: index, size, replace 0으로 하면 추가만 함
ary.unshift('first'); // 제일 앞쪽에 추가
ary.shift(); // 제일 앞쪽 값 삭제


for (let i = 0; i < ary.length; i++) {
    console.log(ary[i]);
}
console.log('-------------------');
for (let val of ary) {
    console.log(val);
}

const newAry = ary.slice(1, 2); // slice(include, exclude)
console.log(newAry)

const mergeAry = ary.concat(newAry); // 합치기
mergeAry.sort(); // 합쳐진 값 정렬
mergeAry.reverse(); // 역순으로 정렬
console.log(mergeAry);

const numbers = [2, 10, 100, 24, 4];
numbers.sort(function (f, l) { //first, last
    // if (f < l) {
    //     return -1; // 오름차순 정렬
    // } else {
    //     return 1;
    // }
    return f - l; //역순으로 정렬하고 싶으면 f와 l의 순서만 바꾸면 됨
}); //sort()만 할 경우 크기순이 아닌 사전순으로 정렬됨...1, 100, 2, 24, 4
console.log(numbers);

const s1 = {
    name: 'hwang',
    score: 70
}
const s2 = {
    name: 'park',
    score: 80
}
const s3 = {
    name: 'choi',
    score: 90
}
const students = [s1, s2, s3];
students.sort(function(f, l){
    if(f.name < l.name){
        return -100; // 음수 아무거나
    }else{
        return 1; // 양수
    }
});

console.log(students);