/*-------------------------------------*/
// JS code for the ddmenu.

// The following code is in the form of a function.

// The function makes a dropdown menu using CSS 
// transition and transform. The dropdown menu 
// essentially consists of a main rectangle that  
// makes a menu of rectangles drop down from it
// when the user clicks on it. When the user clicks
// on it again the menu goes back up.

// Each rectangle is a menu item.

// This function creates an all-enclosing div that 
// the user will append to a div of his/her choosing. 
// The user passes a reference to that div in to 
// this function as an argument).

// The all-enclosing div has two children:
// 1) A div for the main rectangle div. This contains
// the dropdown menu's title (which the user passes
// in as an argument and is a string).
// 2) a div that encloses the menu item divs.

// The 11 arguments that the user must pass in are:
// a) the css class of the main div (ie the one that
// contains the title). This must be a string.
// b) the css class of a <p> that is the child of the
// main div (must be a string).
// c) a string for the title of the ddmenu, eg
// "Pick a dessert".
// d) the css class of a div to contain all the menu 
// item divs (must be a string). 
// e) the css class of the menu item divs (must be a 
// string).
// f) the css class of the menu item div's <p> (must
// be a string). This may be the same as b) above.
// g) a JS reference to the div to which to append 
// the all-enclosing div, eg myDiv, where 
// myDiv = document.querySelector("classForDivToAppendDDmenuTo")
// h) an object containing menu items and click event
// handlers.
//    This object must look like this:
//                   {
//                    item1:{name: "xxx", clickCallback: *refToFn1*},
//                    item2:{name: "zzz", clickCallback: *refToFn2*}, 
//                    etc
//                   }
//    where *refToFn1*, for example, is a JS reference 
//    to a callback for the click event of the menu
//    item div that property item1 represents.
// i) the duration of the drop animation in seconds, 
// eg "0.4s". Must be a string. Don't forget the "s"
// for "seconds".   
// j) the timing function for the animation, eg
// "ease-in-out" or "linear". Must be a string. See
// this webpage for possible values: 
//    https://www.w3schools.com/css/css3_transitions.asp
// k) a delay, in seconds, before the movement begins, 
// eg "0s". Must be a string.

function makeDDmenu(
    menuDivStyleArg,               // a) a string
    menuDivPStyleArg,              // b) a string
    menuDivPtextArg,               // c) a string
    menuItemContainerDivStyleArg,  // d) a string
    menuItemDivStyleArg,           // e) a string
    menuItemPstyleArg,             // f) a string
    divToAppendToArg,              // g) a ref to a div
    menuItemsObjArg,               // h) an object,like this:
    /* {
      item1: {name: "Cake", evtListCB: cakeCB}, 
      item2: {name: "Choco", evtListCB: chocoCB},
      item3: {name: "toffee", evtListCB: toffeeCB}
       } */
    durationArg, // i) a string , eg "0.25s"
    timfuncArg,  // j) a string , eg "ease-in-out" 
    delayArg     // k) a string , eg "1s"
                      )
{
// Make the all-enclosing div:
let allEnclDiv = document.createElement('DIV');
allEnclDiv.style.height = 'fit-content'
allEnclDiv.style.width = '98%'
allEnclDiv.style.position = "absolute"
allEnclDiv.style.top = "3px"
allEnclDiv.style.left = "4px"
allEnclDiv.style.zIndex = "25"
allEnclDiv.style.overflowY = "hidden"
allEnclDiv.style.overflowX = "hidden"
allEnclDiv.style.display = "block"
// Append the all-enclosing div to the
// passed-in div:
divToAppendToArg.appendChild(allEnclDiv)
// Make the Menu div:
let menuDiv = document.createElement('DIV');
menuDiv.classList.add(menuDivStyleArg)
// Make the Menu div <p> (event listener
// added later):
let menuDivP = document.createElement('P');
menuDivP.classList.add(menuDivPStyleArg)
menuDivP.innerHTML = menuDivPtextArg
menuDiv.appendChild(menuDivP)
// Make the Menu items container div
// that has black 1px dotted border in dev::
let menuItemsContainerDiv = document.createElement('DIV');
menuItemsContainerDiv.classList.add(menuItemContainerDivStyleArg)
// Append stuff:
allEnclDiv.appendChild(menuDiv)
allEnclDiv.appendChild(menuItemsContainerDiv)
// Now make the menuItem divs
// Make array of keys (["item1","item2", etc]):
let itemKeysArr = Object.keys(menuItemsObjArg)
// Now make menuItem divs and append them
// to the menuItemsContainerDiv:
let menuItemHeight
for (let i = 0; i < itemKeysArr.length; i++) {
let menuItemDiv = document.createElement('DIV');
menuItemDiv.addEventListener('click', 
function(){
  menuItemsObjArg[itemKeysArr[i]].clickCallback
  closeDDmenu()
                            })
menuItemDiv.classList.add(menuItemDivStyleArg)
menuItemsContainerDiv.appendChild(menuItemDiv)
let menuItemP = document.createElement('P');  
menuItemP.classList.add(menuItemPstyleArg)
menuItemP.innerHTML = menuItemsObjArg[itemKeysArr[i]].name
menuItemDiv.appendChild(menuItemP)
menuItemDiv.addEventListener('click', menuItemsObjArg[itemKeysArr[i]].evtListCB)
menuItemHeight = menuItemDiv.offsetHeight
menuItemDiv.style.top = (i*menuItemHeight).toString + "px"
                                           } // end for
menuItemsContainerDiv.style.top = (-1*(itemKeysArr.length)*menuItemHeight).toString() + "px"

let yMoveDown = ((itemKeysArr.length)*menuItemHeight).toString() + "px"
let yMoveUp = (-1*itemKeysArr.length*menuItemHeight).toString() + "px" 
let translateYup = "translateY(" + yMoveUp + ")" 
let translateYdown =  "translateY(" + yMoveDown + ")"
let menuState = "up"
// object.style.transition = "property duration timing-function delay
let styleTransition = "transform " + durationArg + " " + timfuncArg + " " + delayArg 
// menuItemsContainerDiv.style.transition = "transform 0.18s ease-out 0s";
menuItemsContainerDiv.style.transition = styleTransition
// givemenuDiv its click handler:
menuDiv.addEventListener('click', function(){
  closeDDmenu()
                       })

// An fn to close the ddmenu:
function closeDDmenu(){
// Toggle the movement of the 
// menuItemsContainerDiv:
if (menuState === "up") {
  // Move the menuItemsContainerDiv down by
  // an amount equal to itemKeysArr.length*menuItemHeight:
  menuItemsContainerDiv.style.transform = translateYdown;
  // Change value of menuState to "down":
  menuState = "down"
                          }  else {
  // Move the menuItemsContainerDiv up by
  // an amount equal to itemKeysArr.length*menuItemHeight
  menuItemsContainerDiv.style.transform = translateYup;
  // Change value of menuState to "up":
  menuState = "up"
                                  } // end if-else 
                     } // end fn closeDDmenu

    } // end makeDDmenu

/*-----------------------------------------------------------------------*/
