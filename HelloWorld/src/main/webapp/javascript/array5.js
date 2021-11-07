// array5.js
// 요소(태그) 생성: document.createElement('element')
// 상위요소 > 하위요소: 상위요소.appendChild(하위요소)

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

// 표형식(table)으로 생성
document.write('<button onclick="createContent()">생성</button>');
document.write('<div id="show"></div>');
// <ul><li>아이디, 이름, 점수</li></ul>

function createContent(){

    let tableTag, tbodyTag, trTag, tdTag
    tableTag = document.createElement('table');
    tableTag.border="1px";
    tableTag.width="200px";
    tbodyTag = document.createElement('tbody');
    
    for(let i=0; i<users.length; i++){
        trTag = document.createElement('tr');
        for(let user in users[i]){
            tdTag = document.createElement('td');
            tdTag.innerHTML = users[i][user];
            tdTag.id = user.toLowerCase();
            trTag.appendChild(tdTag);
            
    }
    tbodyTag.appendChild(trTag);
    tableTag.appendChild(tbodyTag);
   
    }
    document.getElementById("show").appendChild(tableTag);
}