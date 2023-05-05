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
};

const rocky = {
  prescription: "phenylephrine",
  pricePerRefill: 30,
  refills: 5,
  subscription: true,
  coupon: true,
};

// create different function that take in an argument from the outside

// we can change the timmy arguments and it will calculate the other people as well

// we need the sum before any discount
function subTotal(price) {
  return price.pricePerRefill * price.refills;
}

// If a customer has a subscription, the customer will receive a 25% discount after the refill total has been calculated.

function customerSubdis(person) {
  const subTotal = subTotal(person);
  let total = subTotal;
  if (person.subscription == true) {
    //const subTotal = discount.pricePerRefill + discount.refills;
    console.log(subTotal - subTotal * 0.25);
  }
  if (couponDiscount.coupon === true) {
    console.log(
      couponDiscount.pricePerRefill +
        couponDiscount.refills -
        (couponDiscount.pricePerRefill + couponDiscount.refills) * 0.25 +
        10
    );
  }
}

// subscription discount if the person has subscription or not
const subDiscount = customerSubdis(timmy);

// If the customer has a coupon, the customer will receive a $10 discount after the subscription discount has been calculated.
function customerDiscount(couponDiscount) {
  if (couponDiscount.coupon === true) {
    console.log(
      couponDiscount.pricePerRefill +
        couponDiscount.refills -
        (couponDiscount.pricePerRefill + couponDiscount.refills) * 0.25 +
        10
    );
  } else {
    console.log("no discount");
  }
}
// argument for if coupon true or false
const couDiscount = customerDiscount(timmy);

// At the end of the script, you should return and log the string "Your grand total is ${finalAmount}."
console.log("Your grand total is " + couDiscount);
