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
    
    $('.arcane-scepter').click (arcaneAttack)
    $('.entangle').click (entangleAttack)
    $('.dragon-blade').click(dragonAttack)
    $('.star-fire').click(starFireAttack)

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
    playerAP = Number($('#attack-points').text())
    let weaponCost = Number(playerAP) - 12
    if (weaponCost < 0) {
        weaponCost = 0
        $(this).prop('disabled', true)
        deathOfPlayer()
    }
    fungusHP = Number($("#fungus-points").text())
    let weaponDamage = Number(fungusHP) - 14
    if (weaponDamage < 0) {
        weaponDamage = 0
        deathOfFungus()
    }
    $('#fungus-points').text(weaponDamage)
    $('#attack-points').text(weaponCost)
}

// Entangle

// - **AP Cost:** 23
// - **HP Damage:** 9


function entangleAttack() {
    playerAP = Number($('#attack-points').text())
    let weaponCost = Number(playerAP) - 23
    if (weaponCost < 0) {
        weaponCost = 0
        $(this).prop('disabled', true)
        deathOfPlayer()
    }
    fungusHP = Number($("#fungus-points").text())
    let weaponDamage = Number(fungusHP) - 9
    if (weaponDamage < 0) {
        weaponDamage = 0
        deathOfFungus()
    }
    $('#fungus-points').text(weaponDamage)
    $('#attack-points').text(weaponCost)
}

// Dragon Blade

// - **AP Cost:** 38
// - **HP Damage:** 47

function dragonAttack(){
    playerAP = Number($('#attack-points').text())
    let weaponCost = Number(playerAP) - 38
    if (weaponCost < 0) {
        weaponCost = 0
        $(this).prop('disabled', true)
        deathOfPlayer()
    }
    fungusHP = Number($("#fungus-points").text())
    let weaponDamage = Number(fungusHP) - 47
    if (weaponDamage < 0) {
        weaponDamage = 0
        deathOfFungus()
    }
    $('#fungus-points').text(weaponDamage)
    $('#attack-points').text(weaponCost)
}

// Star Fire

// - **AP Cost:** 33
// - **HP Damage:** 25

function starFireAttack() {
    playerAP = Number($('#attack-points').text())
    let weaponCost = Number(playerAP) - 33
    if (weaponCost < 0) {
        weaponCost = 0
        $(this).prop('disabled', true)
        deathOfPlayer()
    }
    fungusHP = Number($("#fungus-points").text())
    let weaponDamage = Number(fungusHP) - 25
    if (weaponDamage < 0) {
        weaponDamage = 0
        deathOfFungus()
    }
    $('#fungus-points').text(weaponDamage)
    $('#attack-points').text(weaponCost)
}


// - If the Freaky Fungus runs out of HP, the monster is 
// dead and you win! Replace the `walk` class with a `dead` 
// class on the freaky-fungus element, to make them fall 
// over and die.

function deathOfFungus() {
        $('#fungus-animation').removeClass('walk') 
        $('#fungus-animation').addClass('hurt')
}

// - If you run out of AP, the monster wins and humanity is 
// doomed 😢 Replace the `walk` class with a `jump` class on 
// the freaky-fungus element, to make them jump for the glory 
// of the fungal race.

function deathOfPlayer() {
    $('#fungus-animation').removeClass('walk')
    $('#fungus-animation').addClass('jump')
}

// function disableAttack() {
//     $(this).prop('disabled', true)
// }

// function render() {
//     if (weaponDamage < 0) {
//         weaponDamage = 0
//         deathOfFungus()
//     }
//     if (weaponCost < 1) {
//         weaponCost = 0
//         deathOfPlayer()
//     }
// // $('#fungus-points').text(weaponDamage)
// // $('#attack-points').text(weaponCost)
// }