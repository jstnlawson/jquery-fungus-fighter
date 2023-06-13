$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

// -  update _state_ variable(s) to make the Freaky Fungus lose hit points (HP), and to reduce your attack points (AP). 
// - See [Attacks](#attacks) below, for the AP and HP values of each attack
// - State may be held in one our more variables of your choosing
// - HP and AP values may not be negative (set to zero, if they would otherwise be negative)

let fungusHP = 0
let playerAP = 0

function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    
    $('#arcane-scepter').click (arcaneAttack)

    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

// Arcane Scepter

// - **AP Cost:** 12
// - **HP Damage:** 14

function arcaneAttack() {
    console.log('in arcane attack')
    //take the fungus hp and player ap down by 10
    fungusHP = Number($("#fungus-points").text())
    let arcaneDamage = Number(fungusHP) - 14

    playerAP = Number($('#attack-points').text())
    let arcaneCost = Number(playerAP) - 12

    $('#fungus-points').text(arcaneDamage)
    $('#attack-points').text(arcaneCost)
    console.log(arcaneAttack)
       //playerAP -= 12     
}


