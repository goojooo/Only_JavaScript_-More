// function = A section of reusable code .
//            Declare code once , use it whenever you want.
//            Call the function to execute that code.

function HBD(username, age) {
  console.log(`Happy BirthDay...`);
  console.log(`Happy BirthDay Dear ${username}...`);
  console.log(`You are  ${age} year old...`);
}
// HBD("Nayan", 24);

function isEven(number) {
  if (number % 2 == 0) {
    console.log("EVEN");
    // return true;
  } else {
    console.log("ODD");
  }
}
isEven(23);

function isValidEmail(email) {
  if (email.includes("@gmail")) {
    return true;
  } else {
    return false;
  }
}

console.log(isValidEmail("naya@gmail.com"));
console.log(isValidEmail("naya@mail.com"));
