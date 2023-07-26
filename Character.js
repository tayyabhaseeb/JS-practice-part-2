import { getDiceRollArray, getDicePlaceholderHtml } from './utils.js'

const getPercentage = (remainingHealth, maximumHealth) => 
    (100 * remainingHealth) / maximumHealth
/*   
CHALLENGE
1. Set up a new method called getHealthBarHtml
2. Create a const called "percent" and set it equals to the 
returned value from our getPercentage function (think what 
arguments you want to pass in).
3. For now, just log out the value of the new const "percent". 
4. Down in the getCharacterHtml method, set up a const
called healthBar and set it equal to the returned value
of the getHealthBarHtml method.
*/

function Character(data) {
    Object.assign(this, data)
    this.maxHealth = this.health

    this.diceArray = getDicePlaceholderHtml(this.diceCount)

    this.getDiceHtml = function () {
        this.currentDiceScore = getDiceRollArray(this.diceCount);
        this.diceArray = this.currentDiceScore.map((num) =>
            `<div class="dice">${num}</div>`).join("")
    }
    
    this.takeDamage = function(attackScoreArray){  
        const totalAttackScore = attackScoreArray.reduce((total, num) => total + num)
        this.health -= totalAttackScore
        if (this.health <= 0){
            this.dead = true  
            this.health = 0
        } 
    }
    
    this.getCharacterHtml = function () {
        const { elementId, name, avatar, health, diceCount } = this;
        return `
            <div class="character-card">
                <h4 class="name"> ${name} </h4>
                <img class="avatar" src="${avatar}" />
                <div class="health">health: <b> ${health} </b></div>
                <div class="dice-container">
                    ${this.diceArray}
                </div>
            </div>`
    }
}

export default Character