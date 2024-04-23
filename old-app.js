// // // document.body.children[1].children[0].href = "https://google.com";

// // let anchorElement = document.getElementById("external-link");

// // anchorElement.href = "https://google.com";

// // anchorElement = document.querySelector('p a'); //CSS selector

// // anchorElement.href = "https://duckduckgo.com";
//-----------------------------------------------------------------------------

// // Exercise Time!

// // 1. Select the <h1> element by "drilling into the DOM" and 
// //    save it in a variable with a name of your choice

//     let hElement = document.body.children[0];

// // 2. Use the variable from (1) and get access to the "parent"
// //    element of the stored <h1> element (i.e. to the <body> element)
// //    BONUS: Try using the variable from (1) to get access to the 
// //    sibling element (i.e. the <p> element next to the <h1> element)

//     let variableE = hElement.parentElement;

//     console.dir(hElement.nextElementSibling)
//     // hElement = document.body.children
//     // hElement[1];

// // 3. Select the <h1> element with getElementById and store in
// //    the same or a new variable (up to you)

//     hElement = document.getElementById('h1-element');
// // 4. Select the second <p> element with querySelector (you might
// //    need to add something in the HTML code, e.g. a class) 
// //    and store it in a new variable with a name of your choice

//    let secondP = document.querySelector('.second-p');

// // 5. BONUS TASK: Try changing the text content of the <p> element
// //    you selected in (4) and set it to any other text of your choice

//     secondP.textContent = 'tralala';

//--------------------------------------------------------------------------------

// //ADD AN ELEMENT
// //1. Create the new Element.

// let newAnchorElement = document.createElement('a');

// newAnchorElement.href = "https://google.com";
// newAnchorElement.textContent = ' This leads to google!';

// //2. Get access to the parent element.

// let firstParagraph = document.querySelector('p');

// //3. insert the new element into the parent element content.

// firstParagraph.append(newAnchorElement);


// //REMOVE ELEMENTS

// //1. Select element to remove

// let firstH1Element = document.querySelector('h1');

// //2. remove it!

// //firstH1Element.remove();

// firstH1Element.parentElement.removeChild(firstH1Element); //for older browsers



// //MOVE ELEMENTS

// //1. Selenct the element and move it

// firstParagraph.parentElement.append(firstParagraph);

// //firstParagraph.parentElement.insertBefore();


// // innerHTML - it changes html elements content.

// firstParagraph.innerHTML

// firstParagraph.innerHTML = 'Hi! This is <strong>important!</strong>';