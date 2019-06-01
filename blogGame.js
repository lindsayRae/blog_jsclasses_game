"use strict";

class Monster {
    constructor(name) {
        this.name = name;     
    }       
   
    life = 100;     
    
    attack(){           
        let attack = Math.floor(Math.random() * 10) + 1;
        return attack;
    }     
    takeDamage(damage){
      this.life = this.life - damage;
      return this.life; 
    }  
  }

class Hero {
    constructor(name) {
        this.name = name;        
    }     
    
    life = 100; 

    attack(){      
                           
        let attack = Math.floor(Math.random() * 10) + 1;    
        return attack;
    }    
    
    heal(){    

        let heal = Math.floor(Math.random() * 25) + 1;
        this.life = this.life + heal;           
        if(this.life >= 100) {
            this.life = 100;
        }    
        return this.life;
    }
    
    takeDamage(damage){
        this.life = this.life - damage;
        return this.life; 
    }
}

//? Monster Class
let monster = new Monster ("Cyclops");

document.getElementById("monsterName").innerText = monster.name;
document.getElementById("monsterLife").innerText = monster.life;

//? Hero Class 
let hero = new Hero ("Hercules");

document.getElementById("heroName").innerText = hero.name;
document.getElementById("heroLife").innerText = hero.life;


document.getElementById('monsterAttack').addEventListener("click", function(){
    let monsterAttack = monster.attack() 
    let remainingLife = hero.takeDamage(monsterAttack);
    
    if (remainingLife < 0){
        remainingLife = 0
    }

    document.getElementById("heroLife").innerText = remainingLife;
    if (remainingLife <= 0) {      
        document.getElementById("monsterAttack").setAttribute("disabled", true)
        document.getElementById("heroAttack").setAttribute("disabled", true)
        document.getElementById("heroHeal").setAttribute("disabled", true)
        document.getElementById("winner").innerText = "TKO... Monster Wins :( ";
        
        console.log("TKO... Monster Wins :( ")
    }   
})

document.getElementById('heroAttack').addEventListener("click", function(){
    let heroAttack = hero.attack()
    let remainingLife = monster.takeDamage(heroAttack);
   
    if (remainingLife < 0){
        remainingLife = 0
    }
    document.getElementById("monsterLife").innerText = remainingLife;
   
    if (remainingLife <= 0) {
        
        document.getElementById("heroAttack").setAttribute("disabled", true)
        document.getElementById("heroHeal").setAttribute("disabled", true)
        document.getElementById("monsterAttack").setAttribute("disabled", true)
        document.getElementById("winner").innerText = "TKO... Hero Wins! ";
        console.log("TKO.. HERO WINS!!!!!")
    } 
})

document.getElementById("heroHeal").addEventListener("click", function(){
    let remainingLife = hero.heal();
    document.getElementById("heroLife").innerText = remainingLife;
})
