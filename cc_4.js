// Coding Challenge 04

// Creating Products
let products = [    
    {name: "Laptop", category: "electronics", price: 275, inventory: 36},
    {name: "T-Shirts", category: "apparel", price: 15.99, inventory: 47},
    {name: "Charger", category: "electronics", price: 5.99, inventory: 78},
    {name: "Plates", category: "home", price: 10, inventory: 50},
    {name: "Shoes", category: "apparel", price: 80.99, inventory: 12},
];

 // for of loop
for (let product of products) {
    let discount = 0;
       
 // Create switch    
    switch (product.category) {
         case "electronics":
             discount = .15
         break;
            
        case "apparel":
            discount = .10
        break;

        case "home":
            discount = .05
        break;

        default: 
            discount = 0
        break;
    }

    let promoPrice = product.price * (1-discount) //(Discounted Price)
    product.promoPrice = promoPrice.toFixed(2)
};





