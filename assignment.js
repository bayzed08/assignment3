// https://github.com/bayzed08/assignment3

function kilometerToMeter(kInput) {
    if (kInput < 0) {
        console.log("Give Correct Input");
    } else {
        var toMeter = kInput * 1000;
        return toMeter;
    }
}

function budgetCalculator(wQnty, mQnty, lQnty) {
    var watchPrice = wQnty * 50;
    var mobilePrice = mQnty * 100;
    var laptopPrice = lQnty * 500;
    var totalBudget = watchPrice + mobilePrice + laptopPrice;
    return totalBudget;
}

function hotelCost(dayCount) {
    if (dayCount < 0) {
        console.log("Please give correct Input");
    }
    var hotelRent = 0;
    if (dayCount <= 10) {
        hotelRent = dayCount * 100;
    } else if (dayCount <= 20) {
        var hotelRent10day = 10 * 100;
        var remDays = dayCount - 10;
        hotelRent = hotelRent10day + remDays * 80;
    } else {
        var hotelRent10day = 10 * 100;
        var hotelRentNext10day = 10 * 80;
        var remDays = dayCount - 20;
        hotelRent = hotelRent10day + hotelRentNext10day + remDays * 50;
    }
    return hotelRent;
}

function megaFriend(friendName) {
    var maxIndex;
    var maxChar = 0;
    for (var i = 0; i < friendName.length; i++) {
        var stringNam = friendName[i];
        if (stringNam.length > maxChar) {
            maxChar = stringNam.length;
            maxIndex = i;
        }
    }
    return friendName[maxIndex];
}