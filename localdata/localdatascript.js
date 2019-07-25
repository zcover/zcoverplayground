//////// TESTING LOCAL STORAGE IDEAS ///////////

//========   GLOBAL VARIABLES   ==============
var globalKey = "keypower";
var siteData = [];



//========= CONSTRUCTOR FUNCTION =============//
function User(name){
    this.name = name;
    this.key = key;

}

/////////// PAGE LAUNCH FUNCTION  //////////////
function returningUserPrompt(){
    var returnPrompt = prompt('Are you a returning User?');
    returnPrompt = returnPrompt.toLowerCase();
    if (returnPrompt === 'yes'){
        prompt(`placeholding prompt for when I am able to get local key data figured out.`)
        // not sure how to compare to local storage key at this point.
    }
    else if (returnPrompt === 'no'){
        userName = prompt('A challenger approaches! Please enter your name');
        console.log(userName);
        key = prompt(`Welcome ${userName}! In the unlikely scenario we lose connection, please create a simple return-code`);
        console.log(key);
        alert(`Your return key is "${key}" write it down!`);
    } else {
        alert('Unrecognized Response, please enter "yes" or "no"');
        returningUserPrompt();
    }
};
///////////////////////////////////////////////////////////

/////////// PULL ALL LOCAL STORAGE ///////////////////

//function below pulls all data from local storage.

function checkStorage(){
    localStorage.getItem(globalKey);
    



returningUserPrompt();