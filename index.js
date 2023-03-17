function scuberGreetingForFeet(numFeet){
  // Write your code here!
  if (numFeet <= 400) {
    return 'This one is on me!';
  }
  else if (numFeet > 400 && numFeet < 2000) {
    return 'That will be twenty bucks.';
  }
  else if (numFeet > 2000 && numFeet <= 2500) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (numFeet > 2500)
    return 'No can do.';
}

function ternaryCheckCity(city){
  // Write your code here!
  if (city == 'NYC') {
    return 'Ok, sounds good.';
  }
  else if (city !== 'NYC') {
    return 'No go.';
  }
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  if (tip == 'generous') {
    return 'Thank you so much.';
  }
  else if (tip == 'not as generous') {
    return 'Thank you.';
  }
  else {
    return 'Bye.';
  }
}