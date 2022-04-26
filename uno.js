var color = ["red", "blue", "green", "yellow"];
var value = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
var deck = [];
var playerInv = [];
var playerInv2 = [];
var playerInv3 = [];
var playerInv4 = [];
var count = 0;

function createDeck() {
  deck = [];
  var card = 0;
  for (var i = 0; i < value.length; i++) {
    for (var j = 0; j < color.length; j++) {
      deck[card] = value[i] + color[j];
      card++; // if i use charAt then the lack of spacing doesn't really matter, but it's different for the structs or whatever since you can separate
    }
  }
  shuffle();
}

function shuffle() {
  var shuffled = "";
  for (var i = 0; i < 1000; i++) {
    rand1 = parseInt(Math.random() * deck.length);
    rand2 = parseInt(Math.random() * deck.length);
    shuffled = deck[rand1];
    deck[rand1] = deck[rand2];
    deck[rand2] = shuffled;
  }
}

function deal() {
  for (var i = 0; i < 7; i++) {
    playerInv.push(deck[0]); // puts the card at the end of the array that is the player's hand
    deck.shift(); // removes the first card and shifts all cards down one
    playerInv2.push(deck[0]);
    deck.shift();
    playerInv3.push(deck[0]);
    deck.shift();
    playerInv4.push(deck[0]);
    deck.shift();
  }
  alert(playerInv);
}
