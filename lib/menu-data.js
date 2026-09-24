// Transcribed from the restaurant's supplied printed menu.
// Prices are strings to preserve the printed values and size distinctions.
export const specialtyPizzas = [
  ['Buffalo Chicken', 'Chunks of fresh baked chicken drizzled with spicy buffalo-style sauce.'],
  ['BBQ/Honey BBQ Chicken', "A kickin’ BBQ sauce makes this pizza a quick favorite of everyone’s."],
  ['Deluxe', 'Pepperoni, meatballs, sausage, mushrooms, olives, onions and green peppers, anchovies optional.'],
  ['Hawaiian', 'Ham & pineapple make up this classic pizza.'],
  ['Veggie', 'Mushrooms, olives, onion, green peppers & eggplant.'],
  ['Greek', 'Five-cheese blend on a white pizza: Parmesan, provolone, feta, mozzarella & cheddar, with oregano.'],
  ["Popeye’s", 'Popeye would love this. A delicious combination of spinach, sliced tomatoes & feta cheese.'],
  ["Julie’s Pizza", 'Back by popular demand! Sausage, tomatoes, and hot pepper rings.'],
  ['Pesto', 'Our own pesto sauce spread over fresh dough with slices of plump red tomatoes.'],
  ['Fat Mike Delight', 'A thick crust pizza with fresh garlic, ranch dressing, bacon, ham, baked chicken and provolone.'],
  ['Philly Cheese', 'Steak, sautéed mushrooms & onion.'],
  ['Grilled Vegetable Pesto', 'Grilled tomatoes, onions, red peppers & mushrooms, placed on a pesto sauced pizza and topped with ricotta cheese.'],
  ['The Lion King', 'A mighty pizza. Double dough, fresh garlic, extra cheese, extra pepperoni.'],
  ['Greek Deluxe', 'A Greek pizza topped with roasted peppers and sliced tomatoes.'],
  ['Pesto Deluxe', 'A pesto pizza topped with tender marinated grilled chicken, tomatoes, and artichoke hearts.'],
  ['Mediterranean', 'A thick crust topped with artichoke hearts, red onion, red peppers, olives and Gorgonzola cheese.'],
  ['Southwest Grilled', 'A thick crust with fresh garlic, ranch dressing, bacon, sliced plump tomatoes, red onion & marinated grilled chicken.'],
  ['Peppercorn Grilled', 'A thick crust with Parmesan peppercorn dressing, sliced tomatoes, ham, broccoli, artichoke hearts and marinated grilled chicken.'],
  ['Meat Lovers', 'For the carnivores. Ham, pepperoni, sausage, meatballs on a cheese pizza.'],
  ['Margherita', 'Marinara sauce, fresh mozzarella, sliced tomatoes, and topped with fresh basil leaves.'],
  ['The Jut', 'Pizza cheese, American cheese, ranch dressing, bacon, topped with fries.'],
  ['The G.O.A.T.', 'Pizza cheese, baby spinach, mushrooms, onions, topped with grilled chicken.'],
];

// Groups organize the sections below into a small number of "chapters" so the
// full menu reads as a handful of clear categories instead of 14 flat sections.
export const menuGroups = [
  { id: 'pizza', title: 'Pizza' },
  { id: 'starters', title: 'Starters & Sides' },
  { id: 'salads-wraps', title: 'Salads & Wraps' },
  { id: 'grinders-group', title: 'Grinders' },
  { id: 'calzones-burgers', title: 'Calzones & Burgers' },
  { id: 'extras-drinks', title: 'Extras & Drinks' },
];

// `layout: 'grid'` renders short, description-light sections as a two-column
// list (fits more on screen without hurting readability); sections with real
// per-item descriptions stay single-column so the text has room to breathe.
export const menuSections = [
  { id: 'appetizers', group: 'starters', title: 'Appetizers', sizes: ['Small', 'Large'], layout: 'grid', items: [
    ['Onion Rings', ['5.50', '7.00']], ['Mozzarella Sticks', '11.00'],
    ['Garlic Bread', '7.00', 'With cheese $7.50.'], ['Snack Crusts', ['10.95', '14.95']], ['Buffalo Snack Crusts', ['11.00', '15.00']],
  ] },
  { id: 'build-your-pizza', group: 'pizza', title: 'Build Your Own Pizza', subtitle: 'Freshly made, just for you.', sizes: ['10″', '14″'], layout: 'grid', items: [
    ['Cheese', ['10.75', '15.50']], ['Extra Items', ['1.50', '2.00']], ['Chicken', ['3.75', '4.75']], ['Steak', ['3.75', '4.75']],
  ], notes: ['Gluten-free crust: 12″, add $3.00.', 'Toppings: Pepperoni, sausage, meatballs, mushrooms, onion, green peppers, black olives, eggplant, broccoli, tomato, spinach, jalapeño, bacon, ham, hot pepper rings, anchovies, pineapple, roasted peppers, artichoke hearts, fresh garlic, extra cheese.'] },
  { id: 'chicken-wings', group: 'starters', title: 'Chicken & Wings', items: [
    ['Chicken Fingers & Bites', '13.50', 'Fingers: Plain, BBQ/Honey BBQ, Buffalo, Teriyaki or Sweet Asian Chili. Chicken bites with honey mustard.'],
    ['Wings', '14.50', 'BBQ/Honey BBQ, Buffalo, Teriyaki or Sweet Asian Chili.'],
  ] },
  { id: 'fries', group: 'starters', title: 'Fries', sizes: ['Small', 'Large'], layout: 'grid', items: [
    ['French Fries', ['5.50', '7.00']], ['Buffalo with Bleu Cheese', ['8.25', '10.25']], ['Cheese Fries', ['8.25', '10.25']], ['Bacon & Cheese', ['9.25', '11.25']],
  ] },
  { id: 'skins', group: 'starters', title: 'Skins ’n Things', sizes: ['Small', 'Large'], layout: 'grid', items: [
    ['Potato Skins with Cheese', ['6.25', '8.25']], ['Broccoli Potato Skins', ['6.99', '8.99']], ['Bacon Potato Skins', ['6.99', '8.99']], ['Chili Cheese Skins', ['6.99', '8.99']],
  ] },
  { id: 'calzones', group: 'calzones-burgers', title: 'Calzones', price: '13.75', layout: 'grid', items: [
    ['Buffalo Chicken Zone'], ["Meat Lover’s"], ['Veggie Zone'], ['Italian'], ['BBQ Chicken Zone'], ['Any Specialty Pizza'], ['Greek Zone'], ['Create Your Own', null, 'Up to 3 toppings.'],
  ] },
  { id: 'salads', group: 'salads-wraps', title: 'Salads', sizes: ['Small', 'Large'], layout: 'grid', items: [
    ['Garden', ['9.25', '10.25']], ['Caesar', ['9.25', '10.25']], ['Greek', ['10.75', '14.75']], ['Antipasto', ['10.75', '14.75']], ['Chef', ['10.75', '14.75']], ['Tuna Salad', ['10.75', '14.75']],
  ], notes: ['Add grilled chicken $2.50 · Add steak $3.00.', 'Dressings: Italian, Ranch, Bleu Cheese, Caesar, Greek, Honey Mustard, Balsamic Vinaigrette, Oil & Vinegar.'] },
  { id: 'wraps', group: 'salads-wraps', title: 'Wraps', price: '12.95', items: [
    ['Buffalo Chicken Wrap', null, 'Grilled chicken, buffalo sauce, bleu cheese, lettuce.'],
    ['Chicken Caesar Wrap', null, 'Grilled chicken, romaine, Parmesan, Caesar dressing.'],
  ], notes: ['Wraps also available in whole wheat. Gluten-free wrap: add $1.00.'] },
  { id: 'grinders', group: 'grinders-group', title: 'Classic Grinders', subtitle: '8″ $10.75 · 12″ $12.95', layout: 'grid', items: [
    ['Italian'], ['Ham & Cheese'], ['BLT'], ['Genoa'], ['Turkey'], ['Tuna'], ['Veal'], ['Meatball'], ['Sausage'], ['Eggplant'],
  ], notes: ['Your choice of lettuce, tomato, onion, pickles, mayo, mustard, hot peppers, ketchup, oil & vinegar, salt & pepper.'] },
  { id: 'specialty-grinders', group: 'grinders-group', title: 'Specialty Grinders', subtitle: '8″ $11.95 · 12″ $14.50', items: [
    ['Cheeseburger', null, 'Lettuce, tomato, pickles, onion, American cheese, ketchup, mustard & mayo.'],
    ['Steak Deluxe', null, 'Grilled with provolone, sautéed onions, fire-roasted peppers & mushrooms.'],
    ['Chicken BBQ Hero', null, 'Fresh baked chicken breast with a robust BBQ sauce, American cheese, bacon & onion.'],
    ['Super Veggie', null, 'Mushrooms, onions, peppers, eggplant, hot pepper rings.'],
    ['Eggplant and Meatball', null, 'With marinara and provolone.'],
    ['Grilled Chicken', null, 'With provolone, onion, mushroom & honey mustard.'],
    ['Deluxe Grilled', null, 'Pepperoni, meatballs, sausage, peppers, onions & mushrooms.'],
    ['Chicken Cutlet', null, 'Fresh baked chicken cutlet with lettuce, tomato & mayo.'],
    ['Chicken Parmesan', null, 'Fresh baked chicken with marinara & mozzarella.'],
    ['Buffalo Chicken Grinder', null, 'Fresh baked chicken, buffalo sauce, bleu cheese, lettuce & tomato.'],
  ], notes: ['Extra item: 8″ $0.50 · 12″ $0.75.', 'All grinders available in wraps.'] },
  { id: 'burgers', group: 'calzones-burgers', title: 'Burgers', subtitle: '100% USDA beef, cooked to your request. Served with fries.', items: [
    ['Basic Burger', '12.95'], ['Cheeseburger', '13.50', 'American cheese.'], ['Bacon Cheeseburger', '14.25', 'American cheese & bacon.'], ["Mike’s Burger", '14.75', 'Mushrooms, bacon, lettuce, tomato.'],
  ], notes: ['Your choice of lettuce, tomato, pickles, onion, ketchup, mustard & mayo.', 'Extra item: $0.50 each.'] },
  { id: 'extra-sides', group: 'extras-drinks', title: 'Extra Sides', layout: 'grid', items: [
    ['Meatball', '1.50'], ['Sausage Link', '2.00'], ['Honey Mustard, Bleu Cheese or Ranch Dressing', '1.50'], ['Other Dressings', '1.00'], ['Marinara Sauce', 'Small $2.25 · Large $3.00'], ['Sour Cream', '1.00'],
  ] },
  { id: 'beer', group: 'extras-drinks', title: 'Beer', layout: 'grid', items: [
    ['Peroni', '6.00'], ["Whaler’s Rise", '6.00'], ['Loose Cannon', '5.00'], ['Michelob Ultra', '4.00'], ['Budweiser', '4.00'], ['Bud Light', '4.00'], ['Miller High Life Pony', '3.00'],
  ] },
  { id: 'wine', group: 'extras-drinks', title: 'Wine', layout: 'grid', items: [
    ['Pinot Grigio, Chardonnay, Rosé, Pizza Wine', '8.00'], ['La Marca Prosecco', '9.00'],
  ] },
];
