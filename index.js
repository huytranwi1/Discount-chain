// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.
// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}." 

const timmy = {
    prescription: "acetaminophen",
    pricePerRefill: 25,
    refills: 3,
    subscription: false,
    coupon: true,
};

const sarah = {
    prescription: "diphenhydramine",
    pricePerRefill: 50,
    refills: 1,
    subscription: true,
    coupon: false,
}

const rocky = {
    prescription: "phenylephrine",
    pricePerRefill: 30,
    refills: 5,
    subscription: true,
    coupon: true,
}

// create different function that take in an argument from the outside

function customerName(price){
    console.log(price.pricePerRefill + price.refills)
}

const name = customerName(timmy);

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function customerSubdis(discount){
    if(discount.subscription == true) {
        console.log((discount.pricePerRefill + discount.refills) - ((discount.pricePerRefill + discount.refills)*0.25));
    } else {
        console.log("no discount")
    }
}
 const subDiscount = customerSubdis(timmy);


 // If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
 function customerDiscount(couponDiscount) {
    if(couponDiscount.coupon === true){
        console.log((couponDiscount.pricePerRefill + couponDiscount.refills) - ((couponDiscount.pricePerRefill + couponDiscount.refills)*0.25) + 10)
    } else {
        console.log("no discount");
    }

 }

 const couDiscount = customerDiscount(timmy);

// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
 console.log("Your grand total is " + couDiscount);