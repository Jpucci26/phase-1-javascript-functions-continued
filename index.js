// code your solution here


function saturdayFun(activity1= "roller-skate"){
    return `This Saturday, I want to ${activity1}!`
    
}

function mondayWork(activity2= "go to the office"){
    return `This Monday, I will ${activity2}.`
}


function wrapAdjective(style="*"){
    return function(adjective= "special"){
        return `You are ${style}${adjective}${style}!`;


    }
}