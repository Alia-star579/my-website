let Container = document.querySelector(".container");
let Choices = document.querySelectorAll(".choice");

let msg = document.querySelector("#msg")

let userscore = 0;
let compscore = 0;

let  userscorepara = document.querySelector("#user-score")
let  compscorepara = document.querySelector("#comp-score")


 const genComChoice = () =>{
      const option = ["rock" , "paper" , "scissor"]
      const randIdx = Math.floor(Math.random() * 3);
      return option[randIdx];
 }

 const showWinner = (userwin , userchoice , comChoice) => {
      if(userwin){
           // console.log (" you win!");

            userscore++;
            userscorepara.innerText = userscore; 
            msg.innerText  = `you win!  ${userchoice}  beats ${comChoice}`;
            msg.style.backgroundColor = "green";
      }  
      else{
     // console.log("you loss");

      compscore++;
      compscorepara.innerText = compscore;
      msg.innerText  =  `you win!  ${comChoice}  beats ${userchoice}`;
      msg.style.backgroundColor = "red";
      }
 }


 const DrawGame = () =>{
      console.log(" Game was draw");
      msg.innerText  = "Game was draw again!";
 }

       const playGame = ( userchoice) =>{
      //console.log(" userchoice =" ,  userchoice);
      const compChoice = genComChoice();
    //  console.log("comChoice =",compChoice )
  
      if(userchoice ===compChoice){

            DrawGame();
      }
      else{

            let userwin = true;
            if(userchoice === "rock"){
                 // scissor  , paper
                 userwin = compChoice === "paper" ? false :true 
            }
           else if(userchoice === "paper"){
                  // rock  , scissor
                  userwin = compChoice === "scissor" ? false :true 
             }
             else{
                 
                  // rock , paper  
                  userwin = compChoice === "rock" ? false :true 
             }

              showWinner(userwin ,userchoice, compChoice );
      }

}

Choices.forEach((choice) =>{
      // console.log(choice)
  choice.addEventListener("click", () => {
  const userchoice= choice.getAttribute("id");
      console.log("choice was clicked" ,  userchoice);
      playGame( userchoice);



  });
});