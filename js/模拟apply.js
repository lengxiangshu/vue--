Function.prototype.apply2 = function (context, array) {
    // context = context || window;
    context.fn = this;
    let result
    if (array) {
        let args = [];
        for (let i = 0; i < array.length; i++) {
            args.push('array[' + i + ']');
        }
        result = eval('context.fn(' + args.join(',') + ')');
    } else {
        result = context.fn();
    }
    delete context.fn;
    return result;
}

let fcfe = { teacher: 'Song' };
function describle(subject, course) {
    console.log(this.teacher);
    console.log(subject, course);
}
// describle.apply2(fcfe)
describle.apply2(fcfe, ['前端', 'javascript']);
