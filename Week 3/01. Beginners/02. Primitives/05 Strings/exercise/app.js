// 1. Create variable name (favActorFirstName) & store your fav Actor name.
let favActorFirstName1 = "Robert";

// 2. Create variable name (favActorLastName) & store the last name of (FA).
let favActorLastName1 = "Patintion";

// 3. Create variable name (fullName) & concatenate (favActorFirstName, favActorLastName)
let fullName1 = favActorFirstName1 + " " + favActorLastName1;

// 4. Create variable name (uppercase) & CAPITALIZE your fav actor name.
let uppercase1 = fullName1.toUpperCase();

// 5. Create a variable name (message) & store `My favorite Actor Is (favActorName) & say something about your fav actor` name should be in UPPERCASE.
let message1 = `My favorite Actor Is ${uppercase1} & say something about your fav actor`

// 6. Now append this message to the (message variable) `his best show is Silicon Valley`.
message1 += 'his best movie is Batman.'
// 7. Now Log your Message.
console.log(message1);


// Solution By HuXn

let favActorFirstName = "Bertram";
let favActorLastName = "Gilfoyle";
let fullName = favActorFirstName + " " + favActorLastName;
let uppercase = fullName.toUpperCase();
let message = `My Favorite Actor is ${uppercase}, `;
message += `his best show is silicon valley`;
console.log(message);
