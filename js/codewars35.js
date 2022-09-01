// TITLE: Define a card suit


// DESCRIPTION:
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
//
// Our deck (is preloaded):
//
// ('3♣') -> return 'clubs'
// ('3♦') -> return 'diamonds'
// ('3♥') -> return 'hearts'
// ('3♠') -> return 'spades'


//Parameters: a string with two characters, the second of which is the symbolic representation of a card suit
//Return: a string name of the suit ONLY, in all lowercase letters and plural


Solution
function defineSuit(card) {
  if(card.includes('♠')) return 'spades'
  if(card.includes('♣')) return 'clubs'
  if(card.includes('♥')) return 'hearts'
  if(card.includes('♦')) return 'diamonds'
}
