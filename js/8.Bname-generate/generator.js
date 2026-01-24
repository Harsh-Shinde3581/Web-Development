// Create a Bisness Name Generator by combining lists of adjectives and shop name and another word
 /*
 Adjctives:
 Crazy
 Amazing
 Fire
 
 Shop name:
 Foods
 Engines
 Garments
 
 Another words:
 Bros
 Limited
 Hub
 */

 let ran = Math.random()
 let first, second, third;
     //   0 0.33 0.66 1
    // lets generate first word
     if (ran < 0.33) {
    first = "Crazy";
    }
    else if (ran < 0.66 && ran >= 0.33) {
    second = "Amazing";
    }
    else{
    third = "Fire";
    }

    // Lets generate second word
     ran = Math.random()
     if (ran < 0.33) {
    first = "Foods";
    }
    else if (ran < 0.66 && ran >= 0.33) {
    second = "Engines";
    }
    else{
    third = "Garments";
    }


    // Lets generate the third word
     ran = Math.random()
     if (ran < 0.33) {
    first = "Bros";
    }
    else if (ran < 0.66 && ran >= 0.33) {
    second = "Limited";
    }
    else{
    third = "Hub";
    }

console.log(`${first} ${second} ${third}`)