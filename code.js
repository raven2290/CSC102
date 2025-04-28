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

    //display the 2 dice rolls
    results.innerHTML = "die1: "+ die1;
    results.innerHTML = "die2: "+ die2;

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

// checking for palindrome
function checkForPalindrome()
{
    //do palindrome check
    let inputField = document.getElementById("palindromeField");
    let results = document.getElementById("palindromeResult");
    console.log(inputField);
    

    let inputValue = inputField.value; // for testing purposes

    let stringLength = inputValue.length;

    if (stringLength > 0)
    {
        console.log("entering conditions");

        let iterationCount = Math.floor(stringLength/2);

        let lastCharacterIndex = inputValue.length - 1;
        
        let palindromeCheck = true;

        //allow to continue our palindrome check
        for(let i = 0; i < stringLength / 2; i++)
        {
           if (inputValue[i] !== inputValue[lastCharacterIndex - i])
            {
               console.log("not a palindrome");
                results.innerHTML = "not a palindrome, my guy";
                palindromeCheck = false;
               break;
            }
        }
        if (palindromeCheck)
        {
            console.log("is a palindrome");
            results.innerHTML = "great!! this is a palindrome";
            
        }
        
    }

}

function userInformation()
{
    console.log("checking user information");

    //get the values from the input fields
    let firstNameField = document.getElementById("firstNameField"); //first name

    let lastNameField = document.getElementById("lastNameField"); // last name

    let results = document.getElementById("userInfoResults"); // results

    let zipCode = document.getElementById("zipField"); // zip code

    results.innerHTML = ""; // clear results

    let firstNameValue = firstNameField.value; // first name value

    let lastNameValue = lastNameField.value; // last name value

    let firstLastName = firstNameValue + " " + lastNameValue; // full name

    let zipCodeValue = zipCode.value; // zip code value
     
    console.log(firstLastName)

    if(firstLastName.length > 20)
    {
        console.log("name is too long");
        results.innerHTML = "name is too long, my guy";
        return;
    }
    
    let zipRegex = /^\d{5}$/ // regex for zip code
 
    if (!zipRegex.test(zipCodeValue))
    {
        console.log("zip code is not valid");
        results.innerHTML = "zip code must be 5 digits long, my guy";
        return;
    }

    let zipNumValue = parseInt(zipCodeValue); // convert zip code to integer

    results.innerHTML = "yooo you lost the game!!"; // display hidden message

    console.log("input validated");

}



function testFunction()
{
    let timeoutId = setTimeout(testHello, 5000); // set timeout for 5 seconds
    console.log("rendering test button");
}

function testHello()
{
    console.log("rendering test button timer");
}

const memeImage = document.getElementById("memeImage"); 
let incrementor = 1; // increment value for the animation
let leftPos = 0;

function startAnimationFrame()
{
    let startButton = document.getElementById("startAnimation"); // start button

    startButton.disabled = true; 

    let stopButton = document.getElementById("stopAnimation"); // stop button
    
    stopButton.disabled = false; 


    console.log("say cheese");
    //animationLoop();
    requestAnimationFrame(animationLoop); 
}

function stopAnimationFrame()
{
    let startButton = document.getElementById("startAnimation"); // start button

    startButton.disabled = false; 

    let stopButton = document.getElementById("stopAnimation"); // stop button

    stopButton.disabled = true; 

    incrementor = 0

    console.log("helo worlds"); //helo is a a military term for helocopters
    console.log("STOP");
}


function animationLoop()
{
    console.log("animation loop");
    leftPos += incrementor; 
    console.log(leftPos, memeImage);
    memeImage.style.left = leftPos + "px"; //currently not rendering as per assignment

    requestAnimationFrame(animationLoop);
}

