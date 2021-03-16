function boilWater() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('开水')
        }, 1000)
    })
}

function buyInstantNoodle() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve('泡面')
        }, 2000)
    })
}

var promiseofBoilWater = boilWater();
buyInstantNoodle().then(function (instantNoodle) {
    promiseofBoilWater.then(function (boiledWater) {
        console.log('你用' + boiledWater + '泡' + instantNoodle)
    })
})

// promise进行异步操作
function Promise(fn) {
    var callbacks = [];
    var state = "pending";
    var value = null;
    this.then = function (cb) {
        // 等待状态，将回调函数存储起来，fullfiled时直接执行函数
        if (state === 'pending') {
            callbacks.push(cb);
        } else {
            cb(value);
        }
        return this;
    }
    function resolve(newValue) {
        state = "fullfiled";
        value = newValue;
        setTimeout(function () {
            callbacks.forEach(callback => {
                callback(value);
            })
        })
    }
    fn(resolve);
}