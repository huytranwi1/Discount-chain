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

// declaring variables for discounts
let x = 0.25;
let y = 10;

// create a function that calculates the total price of prescription
function totalPrice(pricePerRefill, refills) {
  return pricePerRefill * refills;
}

// create a function that adds the subscription/coupon discount to the total amount using if/else statements
function addDiscounts(customer) {
  const totalAmount = totalPrice(customer.pricePerRefill, customer.refills);
  if (customer.subscription && customer.coupon) {
    return totalAmount - (totalAmount * x + y);
  } else if (customer.subscription) {
    return totalAmount - totalAmount * x;
  } else if (customer.coupon) {
    return totalAmount - y;
  } else {
    return totalAmount;
  }
}
// printing the final amount of the prescription discounts for each customer
const timmyFinalAmount = addDiscounts(timmy);
console.log(`Timmy's Grand Total is $${timmyFinalAmount}.`);

const sarahFinalAmount = addDiscounts(sarah);
console.log(`Sarah's Grand Total is $${sarahFinalAmount}.`);

const rockyFinalAmount = addDiscounts(rocky);
console.log(`Rocky's Grand Total is $${rockyFinalAmount}.`);