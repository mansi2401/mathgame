//if we click on start or reset;
var playing = false;
var score;
var action;
var timeremaining;
var correctanswer;
document.getElementById("start").onclick =
function(){
    if(playing == true){//if we r playing reload page
        location.reload();
    }else{//if we r not playing
        //chnge plyaing to true; 
        playing=true;
        score=0;
        document.getElementById("scorevalue").innerHTML = score;
         //show countdown
        document.getElementById("time").style.display = "block";
             timeremaining=60;
             document.getElementById("timeremainingvalue").innerHTML=timeremaining;
              //change button to reset
              hide("gameover");
        document.getElementById("start").innerHTML = "reset";
        //start count down
        startcountdown();
        //generate a new question&ans
        generateqa();
    }
}

document.getElementById("box1").onclick=function(){
        if(playing==true)
        {
            if(this.innerHTML==correctanswer){
                //correct answer
                score++;
                document.getElementById("scorevalue").innerHTML=score;

            
            show("correct");
            hide("wrong");
            setTimeout(function(){
                 hide("correct");
            },1000);
            generateqa();
        }else{
            hide("correct");
            show("wrong");
            setTimeout(function(){
                 hide("wrong");
            },1000)
        }
}}
document.getElementById("box2").onclick=function(){
    if(playing==true)
    {
        if(this.innerHTML==correctanswer){
            //correct answer
            score++;
            document.getElementById("scorevalue").innerHTML=score;

        
        show("correct");
        hide("wrong");
        setTimeout(function(){
             hide("correct");
        },1000)
        generateqa();
    }else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
             hide("wrong");
        },1000)
    }
}}
document.getElementById("box3").onclick=function(){
    if(playing==true)
    {
        if(this.innerHTML==correctanswer){
            //correct answer
            score++;
            document.getElementById("scorevalue").innerHTML=score;

        
        show("correct");
        hide("wrong");
        setTimeout(function(){
             hide("correct");
        },1000)
        generateqa();
    }else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
             hide("wrong");
        },1000)
    }
}}
document.getElementById("box4").onclick=function(){
    if(playing==true)
    {
        if(this.innerHTML==correctanswer){
            //correct answer
            score++;
            document.getElementById("scorevalue").innerHTML=score;

        
        show("correct");
        hide("wrong");
        setTimeout(function(){
             hide("correct");
        },1000)
        generateqa();
    }else{
        hide("correct");
        show("wrong");
        setTimeout(function(){
             hide("wrong");
        },1000)
    }
}}
    //reduce time by 1 sec
    //time left??
       //yes continue
       //no game over
    
    //generate new q&a
//if we click on answer box
   // if we r playing
       //correct?
          //yes
              //increase score show correct box for 1 sec
              //generate new q
          //no
              //show try again         
function startcountdown(){
    action=setInterval(function(){
           timeremaining-=1;
           document.getElementById("timeremainingvalue").innerHTML=timeremaining;
           if(timeremaining==0){
               clearInterval(action);
               document.getElementById("gameover").style.display="block";
               document.getElementById("gameover").innerHTML="<p>game over!!</p><p>your score is "+score+".</p>";
               document.getElementById("time").style.display="none";
               hide(correct);

               hide(wrong);
               playing=false;
               document.getElementById("start").innerHTML = "START";
            }
    },1000);

}
function generateqa(){
        var x=1+Math.round(9*Math.random());
        var y=1+Math.round(9*Math.random());
        correctanswer=x*y;
        document.getElementById("question").innerHTML=x+" x "+y;
        var correctposition=1+Math.round(3*Math.random());
        document.getElementById("box"+correctposition).innerHTML=correctanswer;
        //fill other boxes;  
        var answers=[correctanswer];
        for(var i=1;i<5;i++)
        {
            if(i!=correctposition)
            {
                var wronganswer;

               do
               {
                wronganswer =1+Math.round(9*Math.random())*(1+Math.round(9*Math.random()));
               
               }while(answers.indexOf(wronganswer)>-1);
               
                document.getElementById("box"+i).innerHTML=wronganswer;  
                answers.push(wronganswer);              
            }
        }
        

}
function hide(Id){
    document.getElementById(Id).style.display="none";
}
function show(Id){
    document.getElementById(Id).style.display="block";
}
