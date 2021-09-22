/*  problem -1 
 Seer to Mon convert */


function seerToMon(seer) {
    // error concept clear
    if (typeof seer != 'number') {
        return 'please give me original number'
    }
    if (seer < 0) {
        return 'please enter the positive number'
    }
    // return mon
    var mon = seer / 40;
    return mon;
}

// output
const totalMon = seerToMon(80);
console.log(totalMon);




/* problem -2 
Shopping Cost*/

function totalSales(shirtPrice, pentPrice, shoesPrice) {
    const perShirt = 100;
    const perPent = 200;
    const perShoes = 500;
    // calculation 
    const shirtSellPrice = shirtPrice * perShirt;
    const pentSellPrice = pentPrice * perPent;
    const shoesSellPrice = shoesPrice * perShoes;
    const totalSell = shirtSellPrice + pentSellPrice + shoesSellPrice;
    return totalSell;
}
// output
const firstOption = totalSales(1, 3, 4);
console.log(firstOption);





/* problem -3 
delivery cost */

function deliveryCost(shirtQuantity) {
    // check if the quanties are negatives or not


    if (shirtQuantity < 0) {
        ' return shirt quantity cannot be negative'
    } 
        else {
        var cost = 0;
        if (shirtQuantity <= 100) {
            cost = shirtQuantity * 100;
        } else if (shirtQuantity <= 200) {
            var upto100Quantity = 100 * 100;
            var remainingQuantity = shirtQuantity - 100;
            var uptp200Quantity = 80 * remainingQuantity;
            cost = upto100Quantity + uptp200Quantity;
        } 
        else {
            var upto100Quantity = 100 * 100;
            var uptp200Quantity =
                80 * 100;
            var remainingQuantity = shirtQuantity - 200;
            var after200Quantity = 50 * remainingQuantity;
            cost = upto100Quantity + uptp200Quantity + after200Quantity;
        }
    }
    return cost;
}

// output
var cost = deliveryCost(250);
console.log(cost);




/* problem - 4 
perfect friend */


function perfectFriend(FriendNames) {
    // check this array or not!!!
    if (typeof (FriendNames) != 'object') {
        return 'please input a arrayList!!!';
    } 
    else {
        for (var i = 0; 1 < FriendNames.length; i++) {
            var element = FriendNames[i];
            if (element.length == 5) {
                return element;
            }
        }
    } return "please enter a name with 5-letters;"
}

// output
var Names = ['Shahriyar', 'Tanvir', 'Shipon', 'Momin', 'Maymuna'];
var bestFriends = perfectFriend(Names);
console.log(bestFriends);