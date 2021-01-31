
// problem 01: (kilometerToMeter)

function kilometerToMeter(kilometer) {
    if (kilometer >= 0) {

        var meter = kilometer * 1000; 
        return meter;
    } else {
        return "Enter a valid number."; 
    }
}




// problem 02: (budgetCalculator)

function budgetCalculator(watch, phone, laptop) {
    var totalCost = ((50 * watch) + (100 * phone) + (500 * laptop));

    if (watch >= 0 && watch != "" && phone >= 0 && phone != "" && laptop >= 0 && laptop != "") {
        return totalCost;
    } else {
        return "Enter a valid number.";
    }

}




// problem 03: (hotelCost)


function hotelCost(numberOfDays) {
    if (numberOfDays >= 0 && numberOfDays != "") {
       
        if (numberOfDays <= 10) {
            totalCost = numberOfDays * 100;
        }
     
        else if (numberOfDays > 10 && numberOfDays <= 20) {
            numberOfDays = numberOfDays - 10;
            totalCost = ((10 * 100) + (numberOfDays * 80)); 
        }
        
        else {
            numberOfDays = numberOfDays - 20;
            totalCost = ((10 * 100) + (10 * 80) + (numberOfDays * 50)); 
        }
        return totalCost;
    } else {
        return "Enter a valid number. Days cant have negative or string values";
    }
}



// problem 04: (megaFriend)

function megaFriend(friendsName) {
    if (friendsName.length > 0) {
        var biggestName = friendsName[0];
        for (var i = 1; i < friendsName.length; i++) {
            if (typeof friendsName[i] == "string") {
                var element = friendsName[i];
                if (biggestName.length < element.length) {
                    biggestName = element;
                }
            } else {
                return "Enter string only "; 

        }
        return biggestName;
    } else {
        return "write something";
    }
}
