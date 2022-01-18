
 function letsPlay() {
 	let userScore = 0;
	let compScore = 0;
	let delay;
	const userScore_updated = document.getElementById("userScore");
	const compScore_updated = document.getElementById("compScore");
	const rock_select = document.getElementById("rock_select");
	const paper_select = document.getElementById("paper_select");
	const scissor_select = document.getElementById("scissor_select");

	function cleareScorecard(){
		userscore = 0;
		compChoice = 0;
		userScore_updated.innerHTML = 0;
		compScore_updated.innerHTML = 0;
	}
	cleareScorecard();

  	document.getElementById("result").innerHTML = "Make Your Move";
  	document.getElementById("play").innerHTML = "Restart";
  	document.getElementById("rock_select").className = "round_border";
  	document.getElementById("paper_select").className = "round_border";
  	document.getElementById("scissor_select").className = "round_border";

  	function gameOver(){

  		document.getElementById("result").innerHTML = " Game Over. Please Restart Game.";
  		document.getElementById("play").innerHTML = "Restart";
  		document.getElementById("userSelect").src = "images/user.png";
  		document.getElementById("userSelect").className = "round_choice";
  		document.getElementById("compSelect").src = "images/computer.png";
  		document.getElementById("compSelect").className = "round_choice";
  		clearInterval(delay);
  		cleareScorecard();
  		return;
  	 }
  	function winner(userScore, compScore){

  		if(userScore > compScore){
  			document.getElementById("result").innerHTML = " Congradulation! You Won The Game.";
  			document.getElementById("play").innerHTML = "Play Again";
    	}

  		else{
  			document.getElementById("result").innerHTML = " Sorry! You Loose The Game. Please Try Again.";
  			document.getElementById("play").innerHTML = "Play Again";
  		}


  	}

  	function computerChoice(){
  		const choises = [ "rock_select", "paper_select", "scissor_select" ];
  		const randomChoice = Math.floor(Math.random() * 3);
  		return choises[randomChoice];
  	}

  	function userUpdateScore(){
  		userScore += 1 ;

  		if (( userScore <= 5 ) && ( compScore < 5 )){
  			userScore_updated.innerHTML = userScore;
  			compScore_updated.innerHTML = compScore;
   		}
  		
  		if((userScore == 5) && (compScore < 5)){
  			winner(userScore, compScore);
   		}
	   
	    if (userScore > 5){
	    	gameOver();
	    }
  	}

  	function compUpdateScore(){
  		compScore += 1;

  		if (( compScore <= 5 ) && ( userScore < 5 )) {
  			userScore_updated.innerHTML = userScore;
  			compScore_updated.innerHTML = compScore;
   		}

  		if(( compScore == 5 ) && ( userScore < 5 )){
  			winner(userScore, compScore); 
  		}

  		if( compScore > 5 ){
  			gameOver();
   		}
  	}

  	function drawUpdateScore(){

  		userScore_updated.innerHTML = userScore;
  		compScore_updated.innerHTML = compScore;
  		
  		if (( userScore >= 5) || ( compScore >= 5 )){
  			gameOver();
  		}
  	}

  	function userChoice(choice){

  		const compChoice = computerChoice();
  		document.getElementById("rock_select").className = "round_border";
  		document.getElementById("paper_select").className = "round_border";
  		document.getElementById("scissor_select").className = "round_border";
  		if (userScore >= 5){
	    	gameOver();
	    }
	    else if( compScore >= 5 ){
  			gameOver();
   		}
   		else{
   			switch(choice + compChoice){
  			case "rock_selectscissor_select":
  				document.getElementById("result").innerHTML = " Rock Smash!! Scissor. You win.";
  				if(choice == "rock_select")
  					document.getElementById("rock_select").className = "winMove";

  				document.getElementById("userSelect").src = "images/rock.png";
  				document.getElementById("userSelect").className = "selectWin";
  				document.getElementById("compSelect").src = "images/scissor.png";
  				document.getElementById("compSelect").className = "selectLoose";

  				clearInterval(delay);
  				userUpdateScore();
  				break;
  			case "paper_selectrock_select":
  				document.getElementById("result").innerHTML = " Paper Wraps Rock. You win.";
  				if(choice == "paper_select")
  					document.getElementById("paper_select").className = "winMove";

  				document.getElementById("userSelect").src = "images/paper.png";
  				document.getElementById("userSelect").className = "selectWin";
  				document.getElementById("compSelect").src = "images/rock.png";
  				document.getElementById("compSelect").className = "selectLoose";
  
  				clearInterval(delay);
  				userUpdateScore();
  				break;
  			case "scissor_selectpaper_select":
  				document.getElementById("result").innerHTML = " Scissor Cuts Paper. You win.";
  				if(choice == "scissor_select")
  					document.getElementById("scissor_select").className = "winMove";

  				document.getElementById("userSelect").src = "images/scissor.png";
  				document.getElementById("userSelect").className = "selectWin";
  				document.getElementById("compSelect").src = "images/paper.png";
  				document.getElementById("compSelect").className = "selectLoose";
  		
  				clearInterval(delay);
  				userUpdateScore();
  				break;
  			case "rock_selectpaper_select":
  				document.getElementById("result").innerHTML = " Paper Wraps Rock. You Loose.";
  				if(compChoice == "paper_select" )
  					document.getElementById("rock_select").className = "looseMove";

  				document.getElementById("userSelect").src = "images/rock.png";
  				document.getElementById("userSelect").className = "selectLoose";
  				document.getElementById("compSelect").src = "images/paper.png";
  				document.getElementById("compSelect").className = "selectWin";

  				clearInterval(delay);
  				compUpdateScore();
  				break;
  			case "paper_selectscissor_select":
  				document.getElementById("result").innerHTML = " Scissor Cuts Paper. You Loose.";
  				if(compChoice == "scissor_select")
  					document.getElementById("paper_select").className = "looseMove";

  				document.getElementById("userSelect").src = "images/paper.png";
  				document.getElementById("userSelect").className = "selectLoose";
  				document.getElementById("compSelect").src = "images/scissor.png";
  				document.getElementById("compSelect").className = "selectWin";

  				clearInterval(delay);
  				compUpdateScore();
  				break;
  			case "scissor_selectrock_select":
  				document.getElementById("result").innerHTML = " Rock Smash!! Scissor. You Loose.";
  				if(compChoice == "rock_select")
  					document.getElementById("scissor_select").className = "looseMove";

  				document.getElementById("userSelect").src = "images/scissor.png";
  				document.getElementById("userSelect").className = "selectLoose";
  				document.getElementById("compSelect").src = "images/rock.png";
  				document.getElementById("compSelect").className = "selectWin";

  				clearInterval(delay);
  				compUpdateScore();
   				break;
  			default:
  				document.getElementById("result").innerHTML = " Its Draw. Make Your Next Move.";
  				if(choice == "rock_select"){
  					document.getElementById("rock_select").className = "drawMove";
  					document.getElementById("userSelect").src = "images/rock.png";
  					document.getElementById("userSelect").className = "selectDraw";
  					document.getElementById("compSelect").src = "images/rock.png";
  					document.getElementById("compSelect").className = "selectDraw";
  				}
  				else if(choice == "paper_select"){
  					document.getElementById("paper_select").className = "drawMove";
  					document.getElementById("userSelect").src = "images/paper.png";
  					document.getElementById("userSelect").className = "selectDraw";
  					document.getElementById("compSelect").src = "images/paper.png";
  					document.getElementById("compSelect").className = "selectDraw";
  				}
  				else {
  					document.getElementById("scissor_select").className = "drawMove";
  					document.getElementById("userSelect").src = "images/scissor.png";
  					document.getElementById("userSelect").className = "selectDraw";
  					document.getElementById("compSelect").src = "images/scissor.png";
  					document.getElementById("compSelect").className = "selectDraw";
  				}

  				clearInterval(delay);
  				drawUpdateScore();
  			}
   		}	
  	}
  	
  	rock_select.addEventListener("click", function(){
  		document.getElementById("result").innerHTML = " ";
  		delay = setInterval(userChoice, 2000, "rock_select");
  	});

  	paper_select.addEventListener("click", function(){
  		document.getElementById("result").innerHTML = " ";
  		delay = setInterval(userChoice, 2000, "paper_select");
  	});

  	scissor_select.addEventListener("click", function(){
  		document.getElementById("result").innerHTML = " ";
  		delay = setInterval(userChoice, 2000, "scissor_select");
  	});

}