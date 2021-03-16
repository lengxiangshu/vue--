// Function.prototype.bind2 = function (context) {
//     const _this = this;
//     const args = Array.prototype.slice.call(arguments, 1);
//     console.log(args);
//     var fBound = function () {
//         // 此时的arguments是bind返回的函数调用时传入的参数
//         const retAgrs = Array.prototype.slice.call(arguments);
//         return _this.apply(this instanceof fbound ? this : context, args.concat(retAgrs));
//     }
//     var FNOP = function () { }
//     FNOP.prototype = this.prototype;
//     fBound = new FNOP();
//     return fBound;

// }

Function.prototype.bind2 = function (context) {
    if (typeof this !== "function") {
        throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
    }
    var self = this;
    var args = Array.prototype.slice.call(arguments, 1);
    var fNOP = function () { };
    var fBound = function () {
        var bindArgs = Array.prototype.slice.call(arguments);
        return self.apply(this instanceof fNOP ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();
    return fBound;
}

var value = 2;
var foo = {
    value: 1
};
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value);
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'kevin';
var bindFoo = bar.bind2(foo, 'daisy');
var obj = new bindFoo('18');
// undefined
// daisy
// 18
console.log(obj.habit);
console.log(obj.friend);
// shopping
// kevin