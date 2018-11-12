"use strict";

!function () {
    var view = View("#message");
    var model = Model({
        resourceName: "Message"
    });
    var controller = Controller({
        messageList: null,
        form: null,
        init: function init(view, model) {
            this.form = view.querySelector("#myForm");
            this.messageList = view.querySelector("#messageList");
            this.loadMessages();
        },
        bindEvents: function bindEvents() {
            var _this = this;

            this.form.addEventListener("submit", function (e) {
                e.preventDefault();
                _this.saveMessage();
            });
        },
        loadMessages: function loadMessages() {
            var _this2 = this;

            this.model.fetch().then(function (message) {
                var contentArr = message.map(function (item) {
                    return item.attributes;
                });
                contentArr.forEach(function (item) {
                    var li = document.createElement("li");
                    li.innerText = item.name + ":" + item.content;
                    _this2.messageList.appendChild(li);
                });
            }).then(function (todos) {
                // 更新成功

            }, function (error) {
                // 异常处理
                console.log(error);
            });
        },
        saveMessage: function saveMessage() {
            var _this3 = this;

            var name = this.form.querySelector("input[name=name]").value;
            var content = this.form.querySelector("input[name=content]").value;
            if (content === "") {
                alert("请输入内容：");
            } else {
                this.model.save({
                    name: name,
                    content: content
                }).then(function (object) {
                    var messageList = _this3.view.querySelector("#messageList");
                    var li = document.createElement("li");
                    li.innerText = name + ":" + content;
                    messageList.appendChild(li);
                    _this3.form.querySelector("input[name=content]").value = "";
                });
            }
        }
    });

    controller.init(view, model);
}.call();

// 取出数据