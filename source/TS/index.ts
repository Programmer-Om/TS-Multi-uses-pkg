import { randomInt } from "crypto";

// IDENTIFIERS : 
type stnum = string|number;

// THE FUNCTIONS & Clases :

// INVERSE TO STRING : Inverse numbers and other things to a string
class inverseToString {
    constructor(inverser : number) {
        return inverser.toString();
    };
};


//INVERSE A BOOLEAN : Inverse between true & false
class inverseBoolean {
    constructor(inverser : Boolean) {
        if (inverser === true) {
            return inverser = false ;
        }if (inverser === false) {
            return inverser = true ;
        };
    };
};


//GENERATE A RANDOM NUMBERS AND STRINGS

//letters and numbers
const smallLetters:string[] = ['1','2','3','4','5','6','7','8','9','a','b','c','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','G','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',"!","@","#","$","%","^","&","*","(",")","_","-","+","=","?"];
//class
class random {
    constructor(randomVar:stnum) { 
        for(let index = 0; index < 14; index++) {
            if(index>=1){
                randomVar += smallLetters[randomInt(76)];
        }};
      console.log(randomVar);
    
    };
};

function handleData(data:stnum){
    if(typeof data === 'string'){
        return data.toLowerCase();
    }if(typeof data === "number"){
        return data.toString();
    };
};

// EXPORT 
module.exports={
    inverseToString,inverseBoolean,random
};