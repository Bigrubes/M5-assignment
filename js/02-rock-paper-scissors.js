const rps = (user,computer) =>{
    user = prompt("Let's play Rock, Paper Scissors! Rock, Paper, Scissors. Shoot!")
  
    console.log(user)
    // rock = "rock"
    // paper = "paper"
    // scissors = "scissors"
    if (user !== "rock" && user !== "paper" && user !== "scissors"){
        alert('You must type "rock", "paper" or "scissors".')
    }
    computer = Math.round(Math.random()*2)
    if (computer===1){
        parseInt(computer==="paper")
    }else if(computer===2){
        parseInt(computer==="scissors")
    }else{(computer===0)
        parseInt(computer==="rock")

    }
    console.log(computer)

    // if (user=== rock && computer===0 || user === paper && computer===1 || user===scissors && computer===2){
    //     alert("Tie game you chose the same as the computer")
    if(user===computer){
        alert("You chose the same as the computer")
    } if(user==="rock" && computer ==="paper"){
        alert(`You chose ${user} and the computer chose paper. You Lose!`)
    }  if(user==="rock" && computer==="scissors"){
        alert(`You chose ${user} and the computer chose scissors. You Win!`)
    }  if(user==="paper" && computer==="scissors"){
        alert(`You chose ${user} and the computer chose scissors. You Lose!`)
    }  if(user==="paper" && computer==="rock"){
        alert(`You chose ${user} and the computer chose rock. You Win!`)
    }  if(user==="scissors" && computer==="paper"){
        alert(`You chose ${user} and the computer chose paper. You Win!`)
    }  if(user==="scissors" && computer==="rock"){
        alert(`You chose ${user} and the computer chose rock. You Lose!`)
    }
}
rps()