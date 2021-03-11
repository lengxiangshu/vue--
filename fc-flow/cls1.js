/* @flow */

//flow check 或者 npm run flow
function fn(str){
    str.split(' ')
}
fn('11')

// 加法运算
// function add(x,y){
//     return x+y
// }

// add('hello','world')

//类型注释
function add(x: number,y: number): number{
    return x+y
}

add(10,18)

//泛型 Array<T>
var arr:Array < number > = [1,6,18]
arr.push('曹娜')

 
class Bar {
    x: string;           // x 是字符串
    y: string | number;  // y 可以是字符串或者数字
    z: boolean;
   
    constructor(x: string, y: string | number) {
      this.x = x
      this.y = y
      this.z = false
    }
  }
   
var bar :Bar = new Bar('caona',11)

 var obj: {a: string, b: number, c: Array<string>, d:Bar}={
     a: 'hello',
     b: 11,
     c: ['11','9'],
     d: bar
 }

//  多个？ 可以是null，undefined和string
 var foo: ? string=null