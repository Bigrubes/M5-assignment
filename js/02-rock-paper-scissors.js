const rps = (computer) =>{
    user = prompt("Let's play Rock, Paper Scissors! Rock, Paper, Scissors. Shoot!")
  
    console.log(user)
    while (user !== "rock" && user !== "paper" && user !== "scissors"){
        alert('You must type "rock", "paper" or "scissors" to play.')
        user = prompt("Let's play Rock, Paper Scissors! Rock, Paper, Scissors. Shoot!")
    }

      const  num = Math.round(Math.random()*3+1)
        switch (num){
            case 1:
                computer="rock"
                break
            case 2:
                computer="paper"
                break
            case 3:
                computer="scissors"
                break
                }  

            if(user===computer){
                        alert("Tie Game. You chose the same as the computer.")
                    }else if(user==="rock" && computer ==="paper"){
                        alert(`You chose ${user} and the computer chose ${computer}. You Lose!`)
                    } else if(user==="rock" && computer==="scissors"){
                        alert(`You chose ${user} and the computer chose ${computer}. You Win!`)
                    } else if(user==="paper" && computer==="scissors"){
                        alert(`You chose ${user} and the computer chose ${computer}. You Lose!`)
                    } else if(user==="paper" && computer==="rock"){
                        alert(`You chose ${user} and the computer chose ${computer}. You Win!`)
                    } else if(user==="scissors" && computer ==="paper"){
                        alert(`You chose ${user} and the computer chose ${computer}. You Win!`)
                    }  else{(user==="scissors" && computer==="rock")
                        alert(`You chose ${user} and the computer chose ${computer}. You Lose!`)
                    }
                }
rps()
