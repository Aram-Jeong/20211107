// array4.js

const data = [{
        "id": 1,
        "first_name": "Adrian",
        "last_name": "Burhouse",
        "email": "aburhouse0@cargocollective.com",
        "gender": "Male",
        "ip_address": "10.144.80.120"
    },
    {
        "id": 2,
        "first_name": "Archambault",
        "last_name": "Lightwood",
        "email": "alightwood1@ezinearticles.com",
        "gender": "Polygender",
        "ip_address": "128.93.170.75"
    },
    {
        "id": 3,
        "first_name": "Sada",
        "last_name": "Sleightholm",
        "email": "ssleightholm2@wordpress.org",
        "gender": "Agender",
        "ip_address": "250.120.252.247"
    },
    {
        "id": 4,
        "first_name": "Allx",
        "last_name": "Mill",
        "email": "amill3@i2i.jp",
        "gender": "Non-binary",
        "ip_address": "18.108.97.169"
    },
    {
        "id": 5,
        "first_name": "Joline",
        "last_name": "Maysor",
        "email": "jmaysor4@xrea.com",
        "gender": "Bigender",
        "ip_address": "213.69.250.251"
    },
    {
        "id": 6,
        "first_name": "Adelle",
        "last_name": "Dotson",
        "email": "adotson5@bing.com",
        "gender": "Genderqueer",
        "ip_address": "197.50.101.29"
    },
    {
        "id": 7,
        "first_name": "Keen",
        "last_name": "Ackroyd",
        "email": "kackroyd6@businesswire.com",
        "gender": "Bigender",
        "ip_address": "246.93.240.248"
    },
    {
        "id": 8,
        "first_name": "Milena",
        "last_name": "Gregorace",
        "email": "mgregorace7@vinaora.com",
        "gender": "Bigender",
        "ip_address": "243.169.189.228"
    },
    {
        "id": 9,
        "first_name": "Tommie",
        "last_name": "Mounce",
        "email": "tmounce8@last.fm",
        "gender": "Non-binary",
        "ip_address": "3.232.126.183"
    },
    {
        "id": 10,
        "first_name": "Dennie",
        "last_name": "Readitt",
        "email": "dreaditt9@examiner.com",
        "gender": "Genderqueer",
        "ip_address": "78.215.206.87"
    },
    {
        "id": 11,
        "first_name": "Buckie",
        "last_name": "Leas",
        "email": "bleasa@diigo.com",
        "gender": "Female",
        "ip_address": "118.122.175.112"
    },
    {
        "id": 12,
        "first_name": "Allyson",
        "last_name": "Landes",
        "email": "alandesb@toplist.cz",
        "gender": "Bigender",
        "ip_address": "158.94.171.175"
    },
    {
        "id": 13,
        "first_name": "Sigrid",
        "last_name": "Bacchus",
        "email": "sbacchusc@dyndns.org",
        "gender": "Non-binary",
        "ip_address": "68.112.180.196"
    },
    {
        "id": 14,
        "first_name": "Fernande",
        "last_name": "Gritskov",
        "email": "fgritskovd@instagram.com",
        "gender": "Female",
        "ip_address": "12.173.166.123"
    },
    {
        "id": 15,
        "first_name": "Con",
        "last_name": "Hutchison",
        "email": "chutchisone@blogger.com",
        "gender": "Genderfluid",
        "ip_address": "252.13.134.39"
    }
]

console.log(data);

// filter -> forEach
// 여자회원 목록 아이디, 성, 이름, 이메일


const filterGender = data.filter(function (val) {
    return val.gender === 'Female';
});
console.log(filterGender);

let str = '<h2 text align="center">Female List</h2>';
str += '<table border="1" width="650px" height="120px">';
str += '<tbody>';
str += '<tr style="background-color: yellow"><th>ID</th><th>FIRST_NAME</th><th>LAST_NAME</th><th>EMAIL</th></tr>';
filterGender.forEach(callBackFnc);
str += '</tbody>';
str += '</table>';

document.write(str);

function callBackFnc(val, ind, ary) {
    str += '<tr text align="center"><td>' + val.id + '</td><td>' + val.first_name + '</td><td>' + val.last_name + '</td><td>' + val.email + '</td></tr>';
}