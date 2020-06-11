<h1>The Problem Solving Framework : 'UPER'</h1>

-   U = "Understand"
-   P = "Plan"
-   E = "Execute"
-   R = "Reflect" / "Refactor"

<h2>1. Understanding the Problem</h2>
Create an inventory management system for the business of my choice. The focus will be the User Interface which allows a consumer to view available items, purchase any quantity of the merchandise and search for products on the site while maintaining the current state of the inventory.
<h2>
    2. Planning the Solution
</h2>
My plan of action is to code the functionality of the appropriate pages, create a wireframe of the design that I would like to implement for the result, and then code the design/style aspect last. I am choosing to work on the functionality first because if I had to make a change and implement a new function there is a chance that I could mess up my design. The design should be fine-tuned to support functionality in the best way.

Regarding the architecture of the system, I plan to manage the state locally as well as creating a way for consumers to know that a product is sold out/not available.

<h2>
    3. Executing the Plan
</h2>
Carry out the necessary steps, one code at a time!
```
- Breakdown components
    - Navbar
        ✔ Configure Search Bar 
        ✔ Shopping Cart 
        ✔ Create a 404 Page done
    - Homepage
        ✔ Inventory (Products)
        ✔ When products are added to cart, the cart should reflect the quantities
        ✔ Ability to add items to the cart from homepage
    - Search Bar 
        ✔ Create conditionals to search for products by product name
    - Inventory   
        ✔ Page for each item, with the:
            Product Name
            Serial Number
            Price
            Manufacturer
            Category / Tag
        ✔ Ability to add items to the cart from product page
    - Shopping Cart
        ✔ Display items in Cart 
        ✔ Remove unwanted items
        ✔ Purchase items - Checkout button (Checkout Page)
        ✔ Go back to items page
        ✔ Increase/Decrease quantities of each item
        ✔ Total price of cart
        ✔ Total items in cart
        ✔ Continue Shopping link (links to homepage with products)
        ✔ Check that total price doesn't show as undefined, before cart manipulation
        ✔ When products are being added to cart from homepage, the cart price total and quantity are not being reflected in shopping cart
    - Checkout Page
        ✔ create a conditional for checkout link 
        ✔ add third party payment (Stripe) 
        ✔ Summary of purchase order (price total)
    - App.js File 
        ✔ move state from Home component to App.js and then pass props to Home and Product Details page
    - Overall Application
        ✔ Remove console logs that are meant to be alerts or p tag
```
<h2>
    4. Reflection / Refactor
</h2>
*
*
*
*
*
*
*
*
