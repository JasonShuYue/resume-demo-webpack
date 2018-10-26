!function() {
    var view = View("#message");
    var model = Model({
        resourceName: "Message",
    });
    var controller = Controller({
        messageList: null,
        form: null,
        init: function(view, model) {
            this.form = view.querySelector("#myForm");
            this.messageList = view.querySelector("#messageList");
            this.loadMessages();
        },
        bindEvents: function() {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveMessage();
            });
        },
        loadMessages: function() {
            this.model.fetch().then((message) => {
                let contentArr = message.map(item => {
                    return item.attributes;
                });
                contentArr.forEach( (item) => {
                    let li = document.createElement("li");
                    li.innerText = item.name + ":" + item.content;
                    this.messageList.appendChild(li);
                });
            }).then(function(todos) {
                // 更新成功

            }, function (error) {
                // 异常处理
                console.log(error)
            });
        },
        saveMessage: function() {
            let name = this.form.querySelector("input[name=name]").value;
            let content = this.form.querySelector("input[name=content]").value;
            if(content === "") {
                alert("请输入内容：");
            } else {
                this.model.save({
                    name: name,
                    content: content,
                }).then((object) => {
                    let messageList = this.view.querySelector("#messageList");
                    let li = document.createElement("li");
                    li.innerText = name + ":" + content;
                    messageList.appendChild(li);
                    this.form.querySelector("input[name=content]").value = "";
                });
            }
        },
    });


    controller.init(view, model);
}.call();







// 取出数据
