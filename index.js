// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return(`This Saturday, I want to ${activity}!`);

}
saturdayFun()

const mondayWork = function(boringActivity = "go to the office" ) {
    return(`This Monday, I will ${boringActivity}.`)
}
mondayWork()

function wrapAdjective(whateverYouLike = '*') {
    return function inner(howeverYouWish = 'special'){
        return(`You are ${whateverYouLike}${howeverYouWish}${whateverYouLike}!`)
    }

}
