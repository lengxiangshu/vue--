function getUserId() {
    return new Promise(function (resolve) {
        resolve(1);
    })
}
function showUserId(id) {
    console.log(id);
}
getUserId().then(showUserId)

// 实现基本功能--resovle之后能进入then方法
function Promise(fn) {
    var callbacks = null;
    this.then = function (cb) {
        callbacks = cb;
    }
    function resolve(val) {
        setTimeout(function () {
            callbacks(val);
        })
    }
    fn(resolve);
}