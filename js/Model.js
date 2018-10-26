window.Model = function(options) {
    let resourceName = options.resourceName;
    return {
        init: function() {
            var APP_ID = 'GIJjsXdt0vgwoK3OntvjLr80-gzGzoHsz';
            var APP_KEY = '2suDuzV5c04yj22wGhxwhj4k';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        fetch: function() {
            var query = new AV.Query(resourceName);
            return query.find();    //  return Promise对象
        },
        save: function(obj) {
            let Message = AV.Object.extend(resourceName);
            let message = new Message();
            return message.save(obj);
        },
    };
}