1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll? <br>
ANSWER:<br>
 1.getElementById()-<br>
 getElementById() is used to select one single element based on its unique is. Return a single element with the unique id.<br>
 2.getElementByClassName()-<br>
 getElementByClassName() selects all elements that have a specific class name. it returns a live HTMLCollection, which is array-like but not a real array.<br>
 3.querySelector()-<br>
 querySelector() selects the first element that matches aCSS selector. This return the first  matching element .<br>
 4.querySelectorAll()-<br>
 querySelectorAll() selects all element that match a CSS selector. It returns a NodeList.

2. How do you create and insert a new element into the DOM? <br>
ANSWER:<br>
 1.Create the element using "document.createElement(tag)".<br>
 2.Set attribute or text using "element.setAttribute()".<br>
 3.Insert into DOM using an existing parent element like "appendChild,insertBefore,prepend, etc".

3. What is Event Bubbling? And how does it work?<br>
ANSWER:<br>
 When an event happens on an element , it first runs on the target element, then event bubble up from the target element to its ancestors. This is the default behavior for most events like click,keydown, ets.

4. What is Event Delegation in JavaScript? Why is it useful?<br>
ANSWER:<br>
 A technique where a parent handles events of child elements using bubbling. It's useful for dynamic content.

5. What is the difference between preventDefault() and stopPropagation() methods? <br>
ANSWER:<br>
 1.preventDefault()-<br>
 Stops the browser's default action.<br>
 2.stopPropagation()-<br>
 Stops the event from bubbling up to the parent elements.
 
