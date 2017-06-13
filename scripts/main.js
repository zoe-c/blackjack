/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/


// var cards = ["K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2", "A"];


var hand = [];

function handValue (hand) {
   var acesInWaiting = [];
   var sum = 0;

//starting the loop to check hand array for face/ special case (ace)
   for (i = 0; i < hand.length; i++) {

      //if the current card is : K,Q,J.. assigning it the numerical value of 10.
      if ((hand[i] == "K") || (hand[i] == "Q") || (hand[i] == "J")) {
      hand[i] = 10;
      // hand.splice(hand[i], 1);
      // sum += 10;
      }

      //if the current card is : A, assign it to 1 and put it in temporary array "acesInWaiting"
      //we'll add the rest of the hand's values up, THEN determine which value (1, 11) we want our ace(s) to have (based on the sum of the rest of the cards).
      else if (hand[i] == "A") {
      acesInWaiting.push(hand[i]);
      hand[i] = 1;
      }
      sum = hand.reduce((a,b) => a + +b, 0);
   }
   if (sum <= 10) {
      if (acesInWaiting.length == 1) {
         sum += 10;
      }
   }
   return sum;
}


/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/







// var deck {
//    K: 10;
//    Q: 10;
//    J: 10;
//    ten: 10;
//    nine: 9;
//    eight: 8;
//    seven: 7;
//    six: 6;
//    five: 5;
//    four: 4;
//    three: 3;
//    two: 2;
//    A: 11;
// };
