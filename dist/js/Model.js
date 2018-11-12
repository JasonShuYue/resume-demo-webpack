'use strict';

window.Model = function (options) {
    var resourceName = options.resourceName;
    return {
        init: function init() {
            var APP_ID = 'GIJjsXdt0vgwoK3OntvjLr80-gzGzoHsz';
            var APP_KEY = '2suDuzV5c04yj22wGhxwhj4k';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function fetch() {
            var query = new AV.Query(resourceName);
            return query.find(); //  return Promise对象
        },
        save: function save(obj) {
            var Message = AV.Object.extend(resourceName);
            var message = new Message();
            return message.save(obj);
        }
    };
};