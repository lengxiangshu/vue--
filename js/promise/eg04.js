var promiseOfBoilWater = boilWater()

promiseOfBoilWater
    .then(takeOutInstantNoodle)
    .then(eat)

function takeOutInstantNoodle(boiledWater) {
    return boiledWater + '煮泡面'
}

function eat(noodle) {
    console.log(noodle + ' 味道就是好！')
}
// 实现链式调用----暂未实现 去看其他的内容了