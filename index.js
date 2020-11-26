// proj2

// libraries
const rs = require('readline-sync');
const chalk = require('chalk');

//declaring global variable 
var score =0;

//games starting point
console.log(chalk.bgCyan(" Welcome to this Marvel Game \n"));
console.log(chalk.bold.bgWhite.blue(" Rules \n 1. Enter Your Name \n 2. Need Some Marvel Knowledge \n 3. Just Type Option Number That's it \n"));

//asking name
var name = rs.question(chalk.yellow("Hello Player what's ur name : "));

//concatinating name with welcome string
console.log(chalk.green(name)+" so that's your name , that's good\n");


//function to reduce code repeatation
function qusEvaluater(arrOpt,qusStr,ansStr){
    var ansVal =  rs.keyInSelect(arrOpt,chalk.yellow(qusStr));
    if(arrOpt[ansVal] == ansStr){
        
        console.log(chalk.green("right"));
        score+=2;
        console.log("\nscore is : "+score )
        console.log(chalk.bgGreen("\n----------------------------------\n"))
    }
    else{
        
        console.log(chalk.red("wrong"));
        console.log(chalk.green("Correct answer is: "+ansStr));
        score-=1;
        console.log("\nscore is : "+score )
        console.log(chalk.bgRed("\n----------------------------------\n"))
    }
}

//array of qus and answes
qusArray =[
    {
        question:"What's the name of Thor Hammer  : ",
        options:["Mjolnir", "Staff", "Mionir","Beta-ray"],
        answer: "Mjolnir"
    },
    {
        question:"What's the meatal of Thor Hammer  : ",
        options :["Vibraninum","Adamantium","Uru","Iron"],
        answer:"Uru"
    },
    {
        question:"From what ray Hulk is infected : ",
        options:["Beta","Gama","UV","Sunlight"],
        answer:"Gama"
    },
    {
        question:"Thanos son's name is : ",
        options:["Thor","Groot","Thanus","Thane"],
        answer:"Thane"
    },
    {
        question:"Father of wanda and quicksilver is : ",
        options:["Mafiesto","Magneto","Wolverine","Prof X"],
        answer:"Magneto"
    },
    {
        question:"Wolverine is rip-off of DC charecter : ",
        options:["Yes","No"],
        answer:"Yes"
    },
];

//itterating array and calling function
for(let i =0 ; i<qusArray.length;i++){
    qusEvaluater(qusArray[i].options,qusArray[i].question,qusArray[i].answer);

}

//Displaying Score
console.log(chalk.bgMagenta(` Your score is \n ${name} : ${score} \n\n`))

//array of highscore
highScore = [
    {
        username: "SuperMan",
        point: 5
    },
    {
        username: "BatMan",
        point: 3
    },
    {
        username: "HuMan",
        point: 2
    }
];

//displaying highscore
console.log(chalk.bgYellow(" High Score "));

console.table(highScore);

// getting high score
var max = highScore[0].point;
for (let i = 1; i < highScore.length; ++i) {
  if (highScore[i].point > max) {
    max = highScore[i].point;
  }
}

//checking if user beat the hihg score
if(score>max){
    console.log(chalk.inverse.bold("\n Congrats u beat high score \n"));
}
else{
    console.log(chalk.inverse.bold("\n Better Luck Next Time \n"));

}
