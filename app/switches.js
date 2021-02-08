// 1. Given a string with the value of a day of the week, return the number that that day is in the week. A second argument will be provided to determine if should start week on Monday if true, else Sunday if false. If the string is not a day of the week but is bad input, then return the string 'That's not a day of the week'.
// Example: 
    // input: 'Sunday', false
    // output: 1
//Example:
    // input: 'Sunday', true
    // output: 7

function daysPosition(day, offset) {
    if (offset) {
        let week = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
        switch(day) {
            case "monday":
              return week.indexOf("monday") + 1
              break;
            case "tuesday":
              return week.indexOf("tuesday") + 1
              break;
            case "wednesday":
              return week.indexOf("wednesday") + 1
              break;
            case "thursday":
              return week.indexOf("thursday") + 1
              break;
            case "friday":
              return week.indexOf("friday") + 1
              break;
            case "saturday":
              return week.indexOf("saturday") + 1
              break;
            case "sunday":
              return week.indexOf("sunday") + 1
              break;
            default:
              return "That's not a day of the week"
          } 
    } else {
        let week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
        switch(day) {
            case "sunday":
              return week.indexOf("sunday") + 1
              break;
            case "monday":
              return week.indexOf("monday") + 1
              break;
            case "tuesday":
              return week.indexOf("tuesday") + 1
              break;
            case "wednesday":
              return week.indexOf("wednesday") + 1
              break;
            case "thursday":
              return week.indexOf("Thursday") + 1
              break;
            case "friday":
              return week.indexOf("friday") + 1
              break;
            case "saturday":
              return week.indexOf("saturday") + 1
              break;
            default:
              return "That's not a day of the week"
          } 
    }
}


// --------------------------------------------


/** 2. Given a both a score and a score for par, return the corresponding term:
 *           difference |   term
 *    -----------------------------------
 *  (score == 1) || -3  |   "Ace"
 *            -2        |   "Eagle"
 *            -1        |   "Birdie"
 *             0        |   "Par"
 *            +1        |   "Bogie"
 *            +2        |   "Double Bogie"
 *            >= +3     |   "Ouch"
 */

 function golfScore(score, par) {
    let diff = score-par
    switch (true) {
        case diff <= -3:
          return "Ace"
          break;
        case diff == -2:
          return "Eagle"
          break;
        case diff == -1:
          return "Birdie"
          break;
        case diff == 0:
          return "Par"
          break;
        case diff == 1:
          return "Bogie"
          break;
        case diff == 2:
          return "Double Bogie"
          break;
        case diff >= 3:
          return "Ouch"
          break;
        default:
          return "error"
      } 
 }
 

// --------------------------------------------


// 3. Counting Cards. In the casino game Blackjack, a player can gain an advantage over the house by keeping track of the relative number of high and low cards remaining in the deck. This is called card counting.  
// Having more high cards remaining in the deck favors the player. Each card is assigned a value according to the table below. When the count is positive, the player should bet high. When the count is zero or negative, the player should bet low.
/**
 *      Value   |   Cards
 *   --------------------------------
 *       +1     |   '2', '3', '4', '5', '6'
 *        0     |	'7', '8', '9' 
 *       -1	    |   '10', 'J', 'Q', 'K','A' 
 */
// Write a card counting function that will receive a card. The function will increment or decrement the global count variable according to the card's value (see table above). The function will then return the current count and the string "Bet" if the count is positive, or "Hold" if the count is zero or negative.
// Example:
    // output: '-5 Hold'
// Example:
    // output: '2 Bet'

let count = 0

function cardCounter(card) {
    switch(card) {
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
            count++
            break;
        case '7':
        case '8':
        case '9':
            break;
        case '10':
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--
            break;
        default:
            return "error"
      }
      if (count > 0) {
          return count + " Bet"
      } else {
          return count + " Hold"
      }
}
