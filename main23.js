//Bugs and Errors 


//Debugging

//Strict mode

function canYouSpotTheProblem(){
    "use strict";
    for( counter = 0; counter <  10;  counter ++){
        console.log("Happy Happy");
    }
}

// canYouSpotTheProblem();


"use strict";
function Person(name){
    this.name = name;
}

let ferdinand = Person("Ferdinand");

console.log(name);


//Types

//(villageStatee, Array) {direction:string, memory:Array}

function goalOrientedRobot(state, memory){
    //...
}

//randomPick ([T] -> T)
function randomPick(arr){

}

//Testing

//Anomated testing is the process of writing a program that atest another program;

function test(label, body){
    if(!body()) console.log(`Failed: ${label}`);
}

test("convert Latin text to uppercase", ()=>{
    return "hello".toUpperCase() == "HELLO";
});
test("convert Greek text to uppercase", ()=>{
    return " ".toUpperCase() == "";
});
test("don't convert case-less characters", ()=>{
    return "    ".toUpperCase() == "    ";
});

//test runners


//Debugging

function numberToString(n, base = 10){
    let result = "", sign ="";
    if(n < 0){
        sign = "-";
        n = -n;
    }

    do {
        result = String(n % base) + result;
        n = Math.floor(n /base);
    }while (n > 0){
        return sign + result;
    }
}

// console.log(numberToString(13, 10));

//Error Propagation

function promptNumber(question){
    let result = Number(prompt(question));
    if(Number .isNaN(result)) console.log(`Enter a valid value`);
    else return result; 
}

// console.log(promptNumber("How many trees do you see?"));

function lastElement(array){
    if(array == 0){
        return {failed: true};
    }else{
        return{element: array [array.length - 1]}
    }
};

let anArray = [];
//   

//Exceptions

function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase()=="left") return "L";

    // console.log(`Direction is ${result}`)

    if(result.toLowerCase()== "right") return "R";

    // console.log(`Direction is ${result}`);
    
    throw new Error("invalid direction:" + result);
}

// function look(){
//     if(promptDirection (" which way?")== "L"){
//         return "a house";
//     }else{
//         return "two angry bears";
//     }
// }

// try{
//     console.log("You see", look());
// }catch(error){
//     console.log("Something went wrong: " + error);
// }

function divideNumbers(a,b){
    if(b==0){
        throw new Error("Division by zero is not allowed");
    }

    return a / b;
}

function safeDivide(a,b){
    // try{
    //     let result = divideNumbers(a,b);
    //     console.log(`The result is ${result}`);
    // }catch(error){
    //     console.error("Error caught:", error.message);
    // }
}

// safeDivide(15,3);
// safeDivide(15,0);


//More exercises on exception

function checkage(age){
    let message = "Acess granted"
    if(age < 0  || typeof age !=="number" || isNaN(age)){
        throw new Error("Age must be a number");
    };

    if(age < 18){
        throw new Error("Age must be at least 18");
    }
    return message;
}
// try{
//     console.log(checkage("boy"))
// }catch(error){
//     console.log(error);
// }

function withdrawMoney(account, amount){
    if(typeof amount !== "number" || amount< 0){
        throw new Error("Invalid withdrawal amount");
    };
    if( account.balance < amount){
        throw new Error("insufficient funds");
    };

    account.balance -= amount;
    return account.balance;
}

let accountA = { owner:"Alice", balance:200};
let accountB = {owner:"Bob", balance:100};
// try{
//     console.log(withdrawMoney(accountA, 200));
// }catch(error){
//     console.log("Error:", error.message);
// }

function parseJson(jsonString){
    try{
        let parse = JSON.parse(jsonString);
        return parse;    
    }catch(error){
        throw new Error("Json string is invalid")
    }
    
}

// try{
//     let validJson = '{"name":"John", "age": 30}';
//     console.log(parseJson(validJson));

//     let invalidJson = '{"name":"John", age: 30}';
//     console.log(parseJson(invalidJson));

// }catch(error){
//     console.log("Error:", error.message);
// };

function getProperty(obj, propName){
    if(!obj.hasOwnProperty(propName)){
        throw new ("No such property found")
    }

    return obj[propName];
}

let cars = {
    Volvo: 1997,
    Toyota:1556
}
// try{
//     console.log(getProperty(cars, "Camry"));
// }catch(error){
//     console.log("Error:", error.message);
// }

//Cleaning Up After Exceptions

const accounts = {
    a:100,
    b:0,
    c:20
};

function getAccount(){
    let accountName = prompt("Enter an account name");
    if(!accounts.hasOwnProperty(accountName)){
        throw new Error(`No such account: ${accountName}`);
    }
    return accountName;
}

function transfer(from,amount){
    if (accounts[from] < amount) return;
    accounts[from] -= amount;
    accounts[getAccount()] += amount;
}

function transfer(from, amount){
    if(amount[from] < amount) return;
    let progress = 0;
    try{
        accounts[from] -=amount;
        progress = 1;
        accounts[getAccount()] += amount;
        progress = 2;
    }finally{
        if(progress == 1){
            accounts[from] += amount;
        }
    }
}

//More exercises on clearing exceptions

function safeDivide(a,b){
    if(b==0){
        throw new Error("can't divide by 0");
    }
    return a/b;
};

// try{
//     console.log (safeDivide(4,0));
// }catch(error){
//     console.log("Error:", error.message);
// }finally{
//     console.log("Division attempt completed");
// }

//selective catching
//Selective Catching

// for(;;){
//     try{
//         let dir = promtDirection("where");
//         console.log("You chose", dir);
//         break;
//     }catch(e){
//         console.log("Not a valid direction. Try again.");
//     }
// }

class InputError extends Error {}

function promptDirection(question){
    let result = prompt(question);
    if(result.toLowerCase()== "left") return "L";
    if(result.toLowerCase()== "right") return "R"
    throw new Error("Invalid direction: " + result);
}

// for(;;){
//     try{
//         let dir = promptDirection("where");
//         console.log("You chose", dir);
//         break;
//     }catch(e){
//         if(e instanceof InputError){
//         console.log("Not a valid direction. Try again.")
//         }else{
//             throw e;
//         }
//     }
// }

//Assertions (for pragrammers to handle mistakes they make  often)

// function firstElements(array){
//     if(array.length == 0){
//         throw new Error("First Element called with []")
//     }
//     return array[0];
// }

// let ourArray = [1, "boy"];
// console.log(firstElements(ourArray));

//EXercises

//Retry

function primitiveMultiply(a,b){
   if(Math.random() < 0.2){
    return a * b;
   }else{
    throw new Error("Not Working, Try again");
   }
}

function reliableMultiply(a,b){
    for(;;){
        try{
        let mul = primitiveMultiply(a,b)
        console.log("Answer: " + mul);
        }catch(e){
            if(!(e instanceof InputError))
                throw e;
        }
    }
}

// console.log(reliableMultiply(8, 8));

//The Locked Box

const box = new class {
    locked= true;
    #content=[];
    unlock(){ this.locked = false;}
    lock(){this.locked = true;}
    
    get content(){
        if(this.locked) throw new Error("Locked");
        return this.#content;
    }
};

function withBoxUnlocked(body){
    let isLocked = box.locked;
    if(isLocked){
        box.unlock();
    }

    try{
        return body();
    }finally{
        if(isLocked){
            box.lock();
        }
    }
}

withBoxUnlocked(() => {
    box.content.push("gold piece");
});

try{
    withBoxUnlocked(() =>{
        throw new Error("Pirates on the horizon! Abort!")
    });
}catch(e){
    console.log("Error raised:" + e);
}
    console.log(box.locked)