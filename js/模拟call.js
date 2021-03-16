var fcfe = {
    name: '丰橙'
}
// function learn() {
//     console.log(this.name);
// }
// learn.call2(fcfe)

// 将函数挂载到需要绑定的对象上
// 执行该函数
// 删除对应的属性

Function.prototype.call2 = function (context) {
    // context = context || window
    // 调用当前方法的对象就是this，就是需要执行的函数
    context.fn = this;
    // 获取传入的参数
    console.log(arguments);
    var args = [];
    // 从第2个元素开始遍历，第一个是this指向的对象
    for (let i = 1; i < arguments.length; i++) {
        args.push('arguments[' + i + ']');
    }
    let argsStr = args.join(',')
    const result = eval('context.fn(' + argsStr + ')');
    delete context.fn;
    return result;
}

function learn(subject, course) {
    console.log(`在${this.name}学习${subject}:${course}`);
}
learn.call2(fcfe)
learn.call2(fcfe, '前端', 'JavaScript')
learn.call2(null)
