/*There will be 7 input fields and a "timer" in our application:
0) The name of child
1) Possible minimum value of first strike
2) Possible maximum value of the first round
3) Possible minimum value of second impact
4) Possible maximum value of second hit
5) Total number of interactions
6) Ideal run time of a run (example: 1sn)

"timer": It will keep the elapsed time and display it on the screen.

By using the above information, the number of times the screen is executed will automatically be printed (depending on you whether it is short milk or rows).

At the end of the period (total number of exercises X)
1) The game screen will be deactivated
2) The right areas will be painted with green
3) Wrong areas of red paint
4) Areas with blanks will be painted with yellow
5) In a small reporting area, the number of correct, incorrect, unclear areas and time will be written.
6) (OPTIONAL) This information will be saved to "localstorage" for that child.

Topics:
- Adding information from DOM model to model
- Statistics / Reporting
- Keeping information permanently in the browser (localstorage)
- Stopping Javascript "Thread / Task" (setInterval) (clearInterval)*/


$(function(){
    countDown();  
  });
  function countDown(){
    let startTime = 120;
    let i = 0;
    let  countDownInterval = setInterval(function(){
    let  displayTime = startTime - i;
      $('#countdown-timer').html(displayTime);
      console.log('Countdown', displayTime);
      if(displayTime <= 0){
        clearInterval(countDownInterval);
        console.log('Countdown End');
      }
      i++;
    }, 1000);
  }




  //randomize and insert a number to quiz-area 


  let num1 = Math.floor(Math.random() * 10) + 1;
  
  let num2 = Math.floor(Math.random() * 10) + 1;
  let  sum = "X"
  let result = num1 * num2;
  
  document.getElementById("first").innerHTML = num1;
  document.getElementById("second").innerHTML = num2;
  document.getElementById("sum").innerHTML = " " + sum + " ";

  function checkAnswer() {
      let userAnswer1 = document.getElementById("userAnswer").value;
      let  userAnswer = parseInt(userAnswer1);
      console.log(userAnswer);

      if (result == userAnswer) {
          $(" #userAnswer").css ("background-color","green");
      } else {
           $(" #userAnswer").css ("background-color","red");
      }
  }
  if(userAnswer== null){
       $(" #userAnswer").css ("background-color","yellow");

  }
  document.getElementById("#newGame").addEventListener("click", newGame);

  function newGame() {
      location.reload();
  };


