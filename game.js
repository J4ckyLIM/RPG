/***************** 
 *               *
 *   Variables   *
 *               *
 *****************/ 


var hero = {
    name: null,
    strength: 10,
    agility: 10,
    wisdom: 10,
    stamina: 100,
    hp: 100,
    po: 0,
    xp: 0,
    xpToUp: 100, // Xp needed to level up
    level: 1,
    equipement : {
        weapon: {
            attack: 0,
        },
        helmet: {
            hp: 0,
            defense: 0,
        },
        armor:{
            hp: 0,
            defense: 0
        }, 
        glove:{
            hp: 0,
            defense: 0
        },
        boot:{
            hp: 0,
            defense: 0 
        }
    },
    inventory : {
        hpPotion: 0,
        strengthPotion: 0,
        agilityPotion: 0,
        wisdomPotion: 0,
        staminaPotion: 0,
        gold: 0
    },
    skills : {  // List of each hero's skill's name
        skill_1 : {
            name: null,
        },
        skill_2 : {
            name: null,
        },
        skill_3 : {
            name: null,
        }
    }
}

var warrior = Objet.create(hero); // warrior/bowman/sorcerer inherit from hero 
warrior.name = null,
warrior.strength = 15,
warrior.agility = 8,
warrior.wisdom = 5,
warrior.stamina = 10,
warrior.hp = 150,
warrior.equipement = {  weapon: {
                            attack: 10,
                        },
                        helmet: {
                            hp: 20,
                            defense: 10,
                        },
                        armor:{
                            hp: 50,
                            defense: 20,
                        }, 
                        glove:{
                            hp: 20,
                            defense: 7
                        },
                        boot:{
                            hp: 20,
                            defense: 7 
                        }
}
warrior.skills = {  skill_1 : {
                        name: "Coup de marteau",
                    },
                    skill_2 : {
                        name: "Frappe d'ours",
                    },
                    skill_3 : {
                        name: "Double tranchant",
                    }
};

var bowman = Objet.create(hero);
bowman.name = null,
bowman.strength = 10,
bowman.agility = 20,
bowman.stamina = 5,
bowman.wisdom = 5,
bowman.hp = 120,
bowman.equipement = {  weapon: {
                            attack: 20,
                        },
                        helmet: {
                            hp: 10,
                            defense: 7,
                        },
                        armor:{
                            hp: 30,
                            defense: 12,
                        }, 
                        glove:{
                            hp: 10,
                            defense: 5
                        },
                        boot:{
                            hp: 10,
                            defense: 5 
                        }
}
bowman.skills = {  skill_1 : {
                        name: "Tir concentré",
                    },
                    skill_2 : {
                        name: "Flèche rotative",
                    },
                    skill_3 : {
                        name: "Tir perçant",
                    }
};

var sorcerer = Objet.create(hero);
sorcerer.name = null,
sorcerer.strength = 5,
sorcerer.agility = 10,
sorcerer.wisodm = 17,
sorcerer.stamina = 7,
sorcerer.hp = 130,
sorcerer.equipement = {  weapon: {
                            attack: 17,
                        },
                        helmet: {
                            hp: 12,
                            defense: 8,
                        },
                        armor:{
                            hp: 35,
                            defense: 12,
                        }, 
                        glove:{
                            hp: 12,
                            defense: 6
                        },
                        boot:{
                            hp: 12,
                            defense: 6 
                        }
}
sorcerer.skills = {  skill_1 : {
                        name: "Boule de feu",
                    },
                    skill_2 : {
                        name: "Météor",
                    },
                    skill_3 : {
                        name: "Laser de glace",
                    }
};

var monster = {
    name: null,
    attack: 20,
    defense: 12,
    hp: 100,
}

/**********
 *        *
 *  SHOP  *
 *        *  
 **********/

var shop = {
    strengthPotion: {
        price: 50,
        strength: 5
    },
    agilityPotion: {
        price: 50,
        agility: 5
},
    staminaPotion: {
        price: 50,
        stamina: 5
    },
    wisdomPotion: {
        price: 50,
        wisdom: 5
    },
    hpPotion: {
        price: 10,
        hp: 50
    }
};