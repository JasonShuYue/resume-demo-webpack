


var APP_ID = 'GIJjsXdt0vgwoK3OntvjLr80-gzGzoHsz';
var APP_KEY = '2suDuzV5c04yj22wGhxwhj4k';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});


let myForm = document.querySelector("#myForm");
let button = myForm.querySelector("input[type=submit]");
let input = myForm.querySelector("input[name=content]");


myForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let content = myForm.querySelector("input[name=content]").value;
    let Message = AV.Object.extend('Message');
    let message = new Message();
    message.save({
        content: content
    }).then(function(object) {
        alert("success!")
    });
});

// 取出数据
var query = new AV.Query('Message');
query.find().then(function (message) {
    let contentArr = message.map(item => {
        return item.attributes;
    });
    let messageList = document.querySelector("#messageList");
    contentArr.forEach( (item) => {
        let li = document.createElement("li");
        li.innerText = item.content;
        messageList.appendChild(li);
    });
    console.log(contentArr)
    // return AV.Object.saveAll(todos);
}).then(function(todos) {
    // 更新成功
}, function (error) {
    // 异常处理
});