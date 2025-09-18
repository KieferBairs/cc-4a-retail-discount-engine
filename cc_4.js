// Coding Challenge 04

// Creating Products
let products = [    
    {name: "Laptop", category: "electronics", price: 275, inventory: 36},
    {name: "T-Shirts", category: "apparel", price: 15.99, inventory: 47},
    {name: "Watch", category: "accessory", price: 50, inventory: 78},
    {name: "Plates", category: "home", price: 10, inventory: 50},
    {name: "Shoes", category: "apparel", price: 80.99, inventory: 12},
];

 // for of loop
for (let product of products) {
    let discount = 0;
       
 // Create switch    
    switch (product.category) {
         case "electronics":
             discount = .20
         break;
            
        case "apparel":
            discount = .15
        break;

        case "home":
            discount = .10
        break;

        default: 
            discount = 0
        break;
    }

    let promoPrice = product.price * (1-discount) //(Discounted Price)
    product.promoPrice = promoPrice.toFixed(2)
};

// Creating if else if chain for customer type
let customerType = "regular";
let customerDiscount = 0; //discount variable

if (customerType === "senior") {
    customerDiscount = .07; // 7% Off for seniors
} else if (customerType === "student") {
    customerDiscount = .05; // 5% Off for students
} else {
    customerDiscount = 0; // regular customers
 };

// Creating Customers
 let customers = [
    {name: "Bob" , type: "student", cart: [products[0]]}, // Laptop 
    {name: "Jimmy" , type: "senior", cart: [products[1]]}, // T-Shirts 
    {name: "Carmine" , type: "senior", cart: [products[3]]}, // Plates
    {name: "Sandra" , type: "regular", cart: [products[2]]}, // Watch
 ];

// Simulate Checkout Process
for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let subtotal = 0;
for (let item of customer.cart) {
    subtotal += item.promoPrice * 1; // Use Promo Price
    item.inventory --;   //Reduce Inventory 
}
customerType = customer.type;
     if (customerType === "senior") {
    customerDiscount = .07; 
} else if (customerType === "student") {
     customerDiscount = .05; 
} else {
    customerDiscount = 0;
  }

  // Apply Customer Discount
let finalTotal = subtotal * (1-customerDiscount); // Makes final total
  
  console.log(`Customer ${i + 1}: ${customer.name} (${customer.type})`);
  console.log(`Total cost: $${finalTotal.toFixed(2)}`);
  console.log("---");
};

// Create for in loop 
let productExample = products[0]
for (let key in productExample) {
    console.log(key + ": " + productExample[key]);  
};









