const rps = (user,computer) =>{
    user = prompt("please choose rock paper or scissors")
    console.log(user)
    rock = "rock"
    paper = "paper"
    scissors = "scissors"
    computer = Math.round(Math.random()*2)
    console.log(computer)

    if (user=== rock && computer===0 || user === paper && computer===1 || user===scissors && computer===2){
        document.write("Tie game you chose the same as the computer")
    }else if(user===rock && computer ===1){
        document.write(`You chose ${user} and the computer chose paper. You Lose!`)
    } else if(user===rock && computer===2){
        document.write(`You chose ${user} and the computer chose scissors. You Win!`)
    } else if(user===paper && computer===2){
        document.write(`You chose ${user} and the computer chose scissors. You Lose!`)
    } else if(user===paper && computer===0){
        document.write(`You chose ${user} and the computer chose rock. You Win!`)
    } else if(user===scissors && computer===1){
        document.write(`You chose ${user} and the computer chose paper. You Win!`)
    } else{(user===scissors && computer===0)
        document.write(`You chose ${user} and the computer chose rock. You Lose!`)
    }
}
rps()