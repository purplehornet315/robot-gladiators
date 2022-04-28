var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also do multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
     // Alert players that they are starting the round
    window.alert("Welcome to Robot Gladiators!");

    var promptFight = window.prompt("Would you like to fight or skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
  if(promptFight === "fight" || promptFight === "FIGHT"){

   enemyHealth = enemyHealth - playerAttack;
   console.log(
    playerName + " attacked " + enemyName + "." + enemyName + " now has " + enemyHealth + " health remaining."
);

// check enemy's health
if (enemyHealth<=0){
  window.alert(enemyName + ' has died!');
}
else{
  window.alert(enemyName + ' still has ' + enemyHealth + ' health left.');
}

  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
playerHealth = playerHealth - enemyAttack;
  console.log(
      enemyName + " attacked " + playerName +". " + playerName + " now has " + playerHealth + " health remaining."
  );

  // check players health
  if(playerHealth <=0){
    window.alert(playerName + ' has died!');
  }
  else{
    window.alert(playerName + ' still has ' + playerHealth + ' health left.');
  }
} else if(promptFight === "skip" || promptFight === "SKIP"){
  // confirm the player wants to skip.
  var confirmSkip = window.confirm('Are you sure you want to quit?');

  // if yes ,leave fight
if (confirmSkip){
  window.alert(playerName + ' has decided to skip the fight. Goodbye!');
  // subtract money as a penalty to skipping
  playerMoney = playerMoney - 2;
}

// if no (false), ask question again by running fight() again
else{
  fight()
}

window.alert(playerName + ' has chosen to skip the fight!');
 } else{
  window.alert('You need to choose a valid option. Try Again!')
}
}
fight();