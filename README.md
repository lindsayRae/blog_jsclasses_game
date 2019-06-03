"# blog_jsclasses_game" 

JavaScript Classes 

Today we are going to talk about JavaScript Classes. A class is a type of function,  not a new programming concept.  Many other languages use Classes and the addition of Classes in ES6 JS makes it an easier transition for developers to move between languages. You will often see Classes in JS referred as “syntactical sugar” over prototypes and inheritance. This can offer cleaner, easier to read and maintain code. In this article you will learn what a Class is, an example of why you would want to use classes then we will go through and build one together. 


 

What is a Class? 
Class is a concept or style in Object Oriented Programming where inheritance occurs by defining classes of objects.  As you probably already know, objects can have variables, functions and data structures. Classes are like a blueprint for creating objects. In this article we are going to cover the concept of blueprints in reference to a house blueprint and then we will take that idea and build a Monster class for a factitious game. The Monster class will be a great example were we can create one class with a name, actions etc and then create many instances of this class as we create new instances of the Monster class (just more monsters). This will make more sense as you read on.  
Blueprints
To understand the initial concept of classes, we are going to think about building a neighborhood. Pretty big task right? For the sake of this article, assume that all the homes will be almost identical with walls, windows, rooms etc. A builder would start planning by making a blueprint of the basic home. The builder makes a decision that all the homes will have a painted front door, a backyard that may or may not be fenced in and a roof with either shingles or solar panels.  Having the main blueprint will make construction easier, have less room for error, save time, and probably money. We can think of classes in this sense; a JavaScript Class is like the blueprint. When the builder starts to plan the neighborhood they take that blueprint, let’s call it MainHome, and starts duplicating it for each address with slight variations. House1 will use the MainHome blueprint and it will have a red door, no fenced in yard, but does have a solar panel roof. Next house, House2, again will be like the MainHouse but this one has a blue door, a fenced in yard and a solar panel roof. Last house on the street is still like the MainHouse but this one has a yellow door, no fenced in yard and a shingled roof. This pattern continues until they are done with the neighborhood.   The point that I am trying to illustrate is that a Class really is just like a blueprint. This can be very helpful when you know you will be building many things that have the same basic structure with different values for the variables. 

Another example that is a little more specific to programming is building a game with monsters. There will be many monsters in our factitious game that have a name, power level etc... but instead of  writing out each and every monster in the game we are going to make a blueprint of one. Let’s get started building our first class!
Creating a Class
Class Declaration 
We are going to define our first class using a class declaration. This is going to look very similar to a function declaration but we will add in the keyword: ‘class’ before our class name. An important note to keep in mind is that class declarations are NOT hoisted like a function declaration, so be sure to declare the class before you try to use it. Another thing to note is that class naming convention always starts with a capital letter. You can also declare a class as an expression but for the purpose of this demo we will only be using the class declaration. 

class Monster {
	// class body 
}

“Important note to keep in mind: class declaration is NOT hoisted like a function declaration so be sure to declare the class before you try to access it”

Class Body 
Within the curly braces is our class body. Everything within the class is automatically put in strict mode whether you added it elsewhere in your code or not. This will just hold you to stricter syntax rules and can only help you in the long run; also you will get better performance with strict mode and it can eliminate some silent JS errors that will help you debug. 
Constructor Method
The next piece of the class you will need is the constructor method.  Technically the constructor is just a regular function and it is the best way to initialize objects. A constructor’s main purpose is to implement reusable code.  It is best practice to declare your variables in the constructor so when you are instantiating the new instance you can pass in the specific variable values.  In our case of the Monster Class, it will always have a name and health. We want to define this in our constructor; also note that each class can only have one constructor method. A SyntaxError will be thrown if you have more than one constructor occurence in a class. 


class Monster {
	constructor(name, health) { // only one constructor allowed
	      this.name = name;
	      this.health = health;
      } 
}
Keyword this 
You might be wondering what this is all about. It took me a while to understand but it might have different meanings depending on where it is used, which is why it can be confusing. You can dive deeper into all the this variations in my article called What is JavaScript this but for our purposes we are referring to the object Method use case where it is  a reference to the object that it belongs to. So when we look at the Monster class and see this.name = name, this is just pointing to the Monster class that contains it. 
Instantiate a New Instance of Class 
Next is the fun part. We are going to instantiate a new instance of the Monster Class. This is where we can create many instances of that main Monster “blueprint”. As you see below it looks like we are creating a new variable except instead of giving it a value (string, boolean, number ect..) we are going to use the keyword new, to instantiate our class “Monster” and then add parameters we want to pass to the constructor we set up earlier. Notice when we instantiate a new instance of Monster we can pass in anything for the Monster name and health. This is one of the main reasons we use classes! I might want 5 monsters in my game but I don't want to rewrite all of that code. I can just keep creating new instances of the monster and pass it a specific name and health. 

const monsterOne = new Monster("Cyclops", 100)

console.log(monsterOne) // Monster {name: "Cyclops", health: 100}
console.log(monsterOne.name) // Cyclops

const monsterTwo = new Monster("Hydra", 80)
const monsterThree = new Monster("Medusa", 100)

console.log(monsterTwo) // Monster {name: "Hydra", health: 80}
console.log(monsterThree) // Monster {name: "Medusa", health: 100}


So Far So Good
We have proven that we can create new monster and pass in new names and health as parameters. What happens if we declare a new variable in the constructor but do not pass it as a parameter? In this case we can certainly have access to this variable and use it, however we cannot assign it a different value when we are instantiating the class. Take a look at the example below ‘hitPoints’. I declared my variable in the constructor and as you can see it does print out in my console. However I want you to notice that when I tried to pass a third parameter to monsterOne with intentions of changing the hitPoints to 50 it gets ignored. The takeaway here would be that if you have a variable that you want to change per new instance of a class, make sure to add that variable as a parameter in the constructor.  



class Monster {
	constructor(name, health) { // notice hitPoints was NOT passed here
	      this.name = name;
	      this.health = health;
            this.hitPoints = 10;
      } 
}

const monsterOne = new Monster("Cyclops", 100, 77)
const monsterTwo = new Monster("Hydra", 80)
const monsterThree = new Monster("Medusa", 100)

console.log(monsterOne) // Monster {name: "Cyclops", health: 100, hitPoints: 10}
console.log(monsterTwo) // Monster {name: "Hydra", health: 80, hitPoints: 10}
console.log(monsterThree) // Monster {name: "Medusa", health: 100, hitPoints: 10}

Methods
After you are done creating your constructor and variables you can also add methods to the class. At first when you think about methods you will recognized the below syntax

class Monster {
	constructor(name, health) {
	      this.name = name;
	      this.health = health;
      },
      attackDamage = function(){
            // do stuff here..
            return 10;  
      } 
}
const monsterOne = new Monster("Cyclops", 100)

console.log(monsterOne.attackDamage()) // 10




With ES6 there is now shorter syntax for methods definitions on object initializers. We can remove the semicolon and ‘function’ keyword like this: 

class Monster {
	constructor(name, health) {
	      this.name = name;
	      this.health = health;
      },
      attackDamage(){
            // do stuff here..
            return 10;  
      } 
}
const monsterOne = new Monster("Cyclops", 100)

console.log(monsterOne.attackDamage()) // 10

All of your methods should be within the class but outside the constructor function. Because this method is outside the constructor, the attackDamage() will always return 10 and that’s a good thing because in my case I want all of my monsters to have the same attackDamage(). 

Bonus - Classes Interacting
The last thing I want to go over is how classes can interact with each other with a very small (and not pretty) game I created. My game has a Monster class, similar to what we already created and also a Hero class. I added a button for the Monster to attack the Hero and the Hero has an attack and a heal button.  Below is my HTML markup or you can also download the source code on my GItHub. THey both start with a life of 100 and when the Monster or Hero Attack button is clicked, it generated a random number of attack points that is subtracted from life. It is a little silly right now because the Hero can Heal an unlimited amount of time, but I didn't want to get too detailed. You can certainly take this starter code and build your own rules from there! 
HTML/CSS

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Game</title>

    <style>
        .container {
            display: flex;
        }

        .heroBox {
            border: 3px solid aqua;
            padding: 5rem;    
        }

        .monsterBox {
            border: 3px solid red;
            padding: 5rem;
            margin-left: 1rem;
        }    
    </style>

</head>
<body>
    <h1>Awesome Hero Vs Monster Game</h1>
    <h5>Prepare to be amazed...</h5>
    
    <hr>
    <h3 id="winner"></h3>
    <div class="container">
        <div class="heroBox">
            <h1>Hero: <span id="heroName"></span></h1>
            <h2>Life: <span id="heroLife"></span></h2>
            <button id="heroAttack">Attack</button>      
            <button id="heroHeal">Heal</button>
        </div>

        <div class="monsterBox">
            <h1>Monster: <span id="monsterName"></span></h1>
            <h2>Life: <span id="monsterLife"></span></h2>
            <button id="monsterAttack">Attack</button>

        </div>
    </div>
    <script src="js/blogGame.js"></script>
</body>
*Note I do not recommend having the style tag in the HTML, having a separate stylesheet is always best. This is just for ease of demonstration. 
JavaScript
Set Up Classes
Next let’s work on the JavaScript file where all of the action takes place.  Both Monster and Hero have a name in the constructor function but this time I set the life variable outside of the constructor because I always want a new instance of Hero and Monster to start life at 100. Next we need to think about what the two class can do. 

What we know:
Monster has an Attack button
Monster has Life
Monster can be take damage where the life would decrease
Hero has an Attack button
Hero has Life
Hero has a Heal button
Hero can be take damage where the Life would decrease
Hero can Heal where the Life would increase
Whoever's Life reaches 0 first loses the game, 
When we have establishes winner, all the buttons are set to disabled and the winner is displayed on the screen. Game over. 

Read through the code and I encourage you to start this up in your editor. Try and visualize how this the characters can attack each other and when the takeDamage would come into play. My attack method is set up to dish out a random number between 1 and 10, but you could also just return a specific number that would be the same attack each time the method is used. 
class Monster {
   constructor(name) {
       this.name = name;    
   }      
 
   life = 100;    
  
   attack(){  
       // you could just return a number of your choice
       // return 8;  
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
       // you could just return a number of your choice
       // return 5;                 
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



Instantiate the New Instances of the Class 
Next we are going to create our new monster and hero from their respective classes. Here we pass in the characters name. Then you will get the HTML element by ID set the innerText the to name (that was passed in the constructor) and life (the was already set to 100 in the class) so the user can see it in the browser. 

// Monster Class
let monster = new Monster ("Cyclops");

document.getElementById("monsterName").innerText = monster.name;
document.getElementById("monsterLife").innerText = monster.life;

// Hero Class
let hero = new Hero ("Hercules");

document.getElementById("heroName").innerText = hero.name;
document.getElementById("heroLife").innerText = hero.life;

Interaction
Now we are going to attach event listeners as click events to our buttons and add logic in the anonymous function to really attack, take damage and heal (just for the hero). I am going to start with the monster attack button. Let’s tthink through what needs to happen:
User clicks Monster Attack button
We need to get the value of the monster attack and store it in a variable called monsterAttack
This attack is on the hero which will take the monsterAttack value, pass it through hero.takeDamage(monsterAttack)  and return the new life of the hero which we set in a variable called remainingLife
The remaining logic you will see in here is checking remainingLife against 0 to determine if the game is over or not. 

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


I have provided all of the code on my gitHub for the hero attack button and hero heal button but try it on your own first. You and also view the application here. Apply the same logic that we just went over but this time taking the hero.attack() and passing through monster.takeDamage(). You will also need to set up the event listener to heal the hero.  

Conclusion 
Congratulations! You just created a game using JavaScript classes! In this article we first talked about a high-level idea of classes with the ‘blueprint’ reference of a home and building a neighborhood from that blueprint. We broke down the syntax with class declaration, body, constructor, this and methods. Then we went through a specific use case with the Monster Class for a game. We walked through an actual set of a class and created three new instances of that class. Finally we took what we learned and created a little game with the classes interacting. My goal here was to show you the power of classes. With the Hero and Monster Class (blueprint) you can easily create more Heros and Monsters in the game, which I encourage you to do. 

I hope you found this introduction helpful  and I wish you luck on your learning path. You might notice that this little game is starting to really grow your JS file. To keep our code clean and easy to maintain, we want to start modularizing the codebase. This means you can write code in one file and share that code with other files. Check out my article on Import and Export and see how I take the example above and move the Monster Class, Hero Class and interactions all into separate files. Drop me a note if you have any comments or questions and if you do build out this game I would love to check it out. 

 Learning JS can be tough.. stick with it because it only gets better over time. - Lindsay  
