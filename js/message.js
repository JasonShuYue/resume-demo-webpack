!function() {
    var view = document.querySelector("#message");
    var model = {
        init: function() {
            var APP_ID = 'GIJjsXdt0vgwoK3OntvjLr80-gzGzoHsz';
            var APP_KEY = '2suDuzV5c04yj22wGhxwhj4k';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        //  获取数据
        fetch: function() {
            var query = new AV.Query('Message');
            return query.find();
        },
        //  保存数据
        save: function(obj) {
            let Message = AV.Object.extend('Message');
            let message = new Message();
            return message.save({
                name: obj.name,
                content: obj.content,
            });
        },
    };
    var controller = {
        view: null,
        messageList: null,
        form: null,
        init: function(view, model) {
            this.view = view;
            this.messageList = view.querySelector("#messageList");
            this.form = view.querySelector("#myForm");
            model.init();
            this.loadMessages();
            this.bindEvents();
        },
        loadMessages: function() {
            model.fetch().then((message) => {
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
        bindEvents: function() {
            this.form.addEventListener("submit", (e) => {
                e.preventDefault();
                this.saveMessage();
            });
        },
        saveMessage: function() {
            let name = this.form.querySelector("input[name=name]").value;
            console.log(name)
            let content = this.form.querySelector("input[name=content]").value;
            if(content === "") {
                alert("请输入内容：");
            } else {
                model.save({
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
    };

    controller.init(view, model);
}.call();







// 取出数据
