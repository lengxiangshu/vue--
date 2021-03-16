function a(name, age) {
    console.log(arguments, ...arguments)
}
// a('Song', 17)
const obj = {
    name: "朵你吧",
    age: 33
}
var showfn = () => {
    console.log(this);
    return { a: 'song' }
}
console.log(showfn());
showfn.call(obj);