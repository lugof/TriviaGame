
 
 $(document).ready(function() {
   $("#myImage").toggle();
   //These variables contain all my trivia questions
 var  question1= "What's Anderson Silva Nickname?";
  var  question2="Who is the current heavyweight champion?";
  var  question3="Who is the UFC CEO?";
  var  question4= "Who is the main american ufc Commentator?";
  var  question5="What's the nickname of hall of fame member Chuck Lidell?";
  var  question6="Former UFC heavyweight champion who is widely known for his WWE career";
  var  question7=" Who is the only fighter who has defeated Conor McGregor in the UFC?";

  //These variables contain all my correct answers
  var  answer1="The spider";
  var  answer2="Daniel Cormier";
  var  answer3="Dana White";
  var  answer4="Joe Rogan";
  var  answer5= "The Iceman";
  var  answer6= "Brock Lesnar";
  var  answer7="Nate Diaz";

  var myInterval;
  var r =0;
  var time = 20;
  var timeup="assets/images/timeup.gif";
  

  
//these arrays contain all my wrong answers
  var  a1=["The pitbull", "Showtime", "Notorious"];//apuntamos con la r
  var  a2=["Cain Velasquez","Stipe Miocic","Jon Jones"];
  var  a3=["Lorenzo Fertitta", "Frank Fertitta", "Joe White"];
  var  a4=["Dan Hardy","Brian Stann", "Mike Goldberg"];
  var  a5=["Rock","Captain America","Rampage"];
  var  a6=["CM Punk","Batista","Cain Velasquez"];
  var  a7=["Jose Aldo","Eddie Alvarez","Chad Mendes"];


  //Array containing objects with questions, right answers and a nested array with wrong ansers. Winning and loosing images too.
  // We point at the current object with i.
var all = [{question:question1, answer:answer1, wronganswer:a1, img1:"assets/images/silvawin.gif",         img2: "assets/images/silvalose.gif"},    //index0
           {question:question2, answer:answer2, wronganswer:a2, img1:"assets/images/cormierdances.gif",    img2: "assets/images/cormiercries.gif"}, //index1
           {question:question3, answer:answer3, wronganswer:a3, img1:"assets/images/danawhitegoods.gif",   img2: "assets/images/danapissed.gif"},   //index2
           {question:question4, answer:answer4, wronganswer:a4, img1:"assets/images/joetryinghard.gif",    img2: "assets/images/joeroganconfused.gif"},    //index3
           {question:question5, answer:answer5, wronganswer:a5, img1:"assets/images/chuckhappy.gif",       img2: "assets/images/chuckmad.gif"},
           {question:question6, answer:answer6, wronganswer:a6, img1:"assets/images/brockwink.gif",        img2: "assets/images/brockmad.gif"},
           {question:question7, answer:answer7, wronganswer:a7, img1:"assets/images/natenotsurprised.gif", img2: "assets/images/nateslap.gif"},]


  var i=0;
  var a=0;
  var b=0;
  var c=0;
  var d=0;

//just my random function,  in order to show the possible answers in diff. order
  var   x;
  var   y;
  var   z;
  var   w;
    var newRandom= function(){
    x= Math.floor(Math.random() *4);
    w= Math.floor(Math.random() *4);
    y= Math.floor(Math.random() *4);
    z= Math.floor(Math.random() *4);
      if(x===w||x===y||x===z||w===y||w===z||y===z){
        newRandom();
      }
      console.log("los numeros al azar son: "+ w+ " "+ x + " "+y+ " "+z);
      
    }




  //function to print current question
var printQuestion = function(){
  $(".question").text(all[i].question);
}  


  //function to print all possible answers randomly(w,x,y,z)
var printAnswers = function(){
  $(".answers").show();
  $("#answer"+x).text(all[i].wronganswer[r]);
  r++;
  $("#answer"+y).text(all[i].wronganswer[r]);
  r++;
  $("#answer"+z).text(all[i].wronganswer[r]);
  $("#answer"+w).text(all[i].answer)
 
  $(".text-timer").text("Seconds left to pick your answer: ");
  console.log("on printAnswers w :"+w);
r=0;
}

// timer
var timer = function(){
    $(".timer").text(time);
    time--;
    
    if(time<=-2){                 //condition, in case time is up we need to go to (myTimeout) function
      clearInterval(myInterval);
      time=24;
      $(".timer").text(time);
      myTimeout();
      myInterval=setInterval(timer,1000);
      setTimeout(next,5000);
        return
    }
}


//function to skip to next question screen
var next = function(){
  if(i>=7){
    gameOver();
    
  }
  else{
    
    $("#myImage").hide();
 
    
    $(".result1").hide();
    $(".result2").hide();
    newRandom();
    printQuestion();
    printAnswers();
    $(".text-timer").show();
    $(".timer").show();
    $(".question").show();
    $(".answers").show();
  }
}

//function to show the winning screen, hiding non-required classes
function winning (){
  $("#myImage").attr("src",all[i].img1);
  $(".text-timer").hide();
  $(".timer").hide();
  $(".question").hide();
  $(".answers").hide();
  $(".result1").text("Correct! the right answer is: ")
  $(".result2").text(all[i].answer);
  $(".result1").show();
  $(".result2").show();
  
  $("#myImage").show();
  i++;
  a++;

}
  
//function to show the loosing screen, hiding non-required classes
function loosing(){
  $("#myImage").attr("src",all[i].img2);
  $(".text-timer").hide();
  $(".timer").hide();
  $(".answers").hide();
  $(".question").hide();
  $(".result1").text("Wrong, the right answer is: ")
  $(".result2").text(all[i].answer);
  $(".result1").show();
  $(".result2").show();
  $("#myImage").show();
  i++;
  b++;

}

//function to show the time-is-up screen
function myTimeout(){
  
  console.log("we are in timeout function");
  $("#myImage").attr("src",timeup);
  $(".text-timer").hide();
  $(".timer").hide();
  $(".answers").hide();
  $(".question").hide();
  $(".result1").text("Your time is up, the right answer was : ");
  $(".result2").text(all[i].answer);
  $(".result1").show();
  $(".result2").show();
  $("#myImage").show();
  i++;
  c++;
}

//function to show the results screen once the game is over and reset our variables
function gameOver(){
  clearInterval(myInterval);
  time=20;
  $(".text-timer").text("Correct Answers: "+a);
  $(".text-timer").show();
  $(".timer").text("Incorrect Answers: "+b);
  $(".timer").show();
  $("#myImage").hide();
  $(".answers").empty();
  $(".result2").text("Unanswered: "+c);
  $(".result2").show();
  $(".result1").text("All right let's check how you did: ");
  $(".result1").show();
  $(".question").hide();
  $(".btn").show()
  $(".btn").text("Startover?")
  $(".answers").hide();
  i=0;
  a=0;
  b=0;
  c=0
}




//button to start the game
    $(".btn").on("click", function() {
      $(".timer").empty();
      $(".btn").hide();
      $(".result1").hide();
      $(".result2").hide();
      newRandom();
      printQuestion();
      printAnswers();
      clearInterval(myInterval);
      myInterval= setInterval(timer,1000);
      console.log("on btn click w: "+w);
    

    })

  

    //Jquery listening for clicks on any possible answer
    $(".answers").on("click", function() {
       var guess = $(this).text();
       var guess2= $("#answer"+w).text();
       console.log("right answer is: "+guess2);
       console.log("text on clicked button is: "+guess);
     
      
       if(guess===guess2){                                //if clicked on right answer
        winning();
        setTimeout(next,5000);
        clearInterval(myInterval);
        time=24;
        myInterval=setInterval(timer,1000);
       }
       else{                                            //if clicked on wrong answer
         loosing();
         setTimeout(next,5000);

         clearInterval(myInterval);
         time=24;
         myInterval=setInterval(timer,1000);

         console.log("wrong answer");
       }
    })

    

  })


    
    
    //stylish my css in awesome manner
    //agregar preguntas

  