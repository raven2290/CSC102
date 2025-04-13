// change context header text
function updateText(){
    document.getElementById("heading").innerHTML = " ITS OVER 9000!";
}
// change home header text
function linkText(){
    document.getElementById("home").innerHTML = "this is my home page & thats my meme";
}

// change the board header text
function boardText(){
    document.getElementById("board").innerHTML = "this is my course catolog";
}
// play craps
function playCraps()
{
    let results = document.getElementById("crapsResults");

    //generate two random numbers between 1 and 6
    let die1 = Math.floor(Math.random() * 6) + 1;
    let die2 = Math.floor(Math.random() * 6) + 1;

    //logs the 2 dice rolls to the console
    console.log("die1: "+ die1);
    console.log("die2: "+ die2);

    //sum of the 2 dice rolls
    let sum = die1 + die2;

    results.innerHTML = "die1: "+ die1 + "<br> die2: "+ die2; //display the 2 dice rolls

    // or operator
    if (sum == 7 || sum == 11) 
    {
        console.log("craps you lose");
        results.innerHTML = "craps you lose";
    }

    //and operator
     else if (die1 == die2 && die1 % 2 == 0)
        
    {
            console.log("you win!");
            results.innerHTML = "you win!";
    }
    else
    {
        console.log("pushed!");
        results.innerHTML = "pushed!";
    }

    
}