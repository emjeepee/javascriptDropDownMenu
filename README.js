/*-----------------

There are two files of interest
in this package: 
code.js and styles.css.


A) code.js 
This contains javascript function 
makeDDmenu, which will create a dropdown menu.
You supply 11 arguments, including a reference 
to a div to which you want to append the 
dropdown menu.

The 11 arguments that the function takes are:
// a) the css class of the main div (this must be a string).
      You can use "menuDiv1" from file styles.css. 
// b) the css class of the main div's <p> (must be a string).
//    You can use "menuItemP1" from file styles.css.   
// c) a string that will be the title of the main div, eg 
//    "Contact details" or "Pick a dessert"
// d) the css class of a div that will enclose all 
//    the menu item divs (must be a string). You can use 
//    "menuItemsEnclDiv1" from styles.css 
// e) the css class of the menu item div (must be a string).
      You can use "menuItemDiv1" from styles.css.  
// f) the css class of the menu item <p> (must be a string) 
//    You can use "menuItemP1" from file styles.css (the 
//    same as in b) above)
// g) a JS reference to the div to which to append the all-encl div 
//    eg myDiv, where 
//    myDiv = document.querySelector("classForDivToAppendDDmenuTo")
// h) an object containing menu items and click event handlers 
//    for those menu items.
//    This object must look like this:
//                   {
//                    item1:{name: "xxx", clickCallback: *refToFn1*},
//                    item2:{name: "zzz", clickCallback: *refToFn2*}, 
//                    item3: *etc*
//                   }
//    where, *refToFn1* (for example) is a JS reference to a handler for 
//    the menu item that property item1 represents
// i) the duration of the drop animation, in seconds, eg "0.4s", must be a string  
// j) the timing function for the drop animation, eg "ease-in-out" or "linear", must be a string.
//    See this webpage for possible values this can take: 
//    https://www.w3schools.com/css/css3_transitions.asp
// k) a delay, in seconds, before the movement begins, eg "0s", must be a string 


B) styles.css
This file contains CSS styles that you 
can use (in string form) as some of the 
arguments to the function makeDDmenu.


NOTE: if you find this dropdown menu of interest do let me know.
Or maybe you hate it and can give me constructive criticism.
Please simply email me.

--------------------*/
