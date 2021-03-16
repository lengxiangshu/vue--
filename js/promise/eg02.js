function getUserId() {
    return new Promise(function (resolve) {
        resolve(1);
    })
}
function showUserId(id) {
    console.log(id);
}

var promise = getUserId()
promise.then(showUserId)
promise.then(showUserIdAgain);

function showUserIdAgain(id) {
    console.log('again !', id)
}


function Promise(fn) {
    var callbacks = [];
    this.then = function (cb) {
        callbacks.push(cb);
    }
    function resolve(val) {
        setTimeout(function () {
            callbacks.forEach(callback => {
                callback(val)
            })
        })
    }
    fn(resolve);
}