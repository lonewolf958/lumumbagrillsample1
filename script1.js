/* ==========================================================================
   LUMUMBA GRILL — DIGITAL MENU
   File: script1.js

   PURPOSE:
   1. Store menu categories, item names and prices.
   2. Generate the category navigation buttons.
   3. Display menu categories and items on the page.
   4. Highlight the active category while scrolling.
   5. Automatically update the footer copyright year.

   RELATED FILES:
   - index1.html: Digital menu page
   - style1.css: Digital menu styles (self-contained)
   - logo.png: Lumumba Grill logo

   HOW TO UPDATE THE MENU:
   Edit MENU_DATA below. Keep category IDs unique.
   - An item with no "price" shows "Ask your waiter".
   - A category can have a "note" shown under its heading.
   ========================================================================== */


/* ==========================================================================
   1. MENU DATA
   Source: the Lumumba Grill printed menu.

   Each category contains:
   - id: Unique identifier used for navigation.
   - name: Category name displayed on the page.
   - note: Optional note shown under the category heading.
   - items: Meals belonging to the category.

   Each item can contain:
   - name: Item name.
   - price: Price in Tanzanian Shillings (leave out if not listed).
   - desc: Optional description.
   ========================================================================== */

const MENU_DATA = [
  {
    id: "special",
    name: "Lumumba Special & Plate",
    items: [
      { name: "Lumumba Mandi for 2", price: 23000 },
      { name: "Lumumba Mandi for 4", price: 42000 },
      { name: "Garageza for 2", price: 23000 },
      { name: "Garageza for 4", price: 42000 },
      { name: "Beef Vuruga Teriyaki", price: 15000 },
      { name: "Prawns Calamari Mix", price: 17000 },
      { name: "Wings Vuruga", price: 10000 },
      { name: "Moroccan Chicken Rice (half chicken)", price: 14000 },
      { name: "Seafood Vuruga", price: 20000 },
      { name: "Lumumba Seafood Plate for 2", price: 30000, desc: "Served with 2 of Veg Rice, Mash Potatoes or Chips" },
      { name: "Lumumba Seafood Plate for 4", price: 60000, desc: "Served with 2 of Veg Rice, Mash Potatoes or Chips" }
    ]
  },

  {
    id: "starters",
    name: "Starters",
    items: [
      { name: "Prawn Cocktail", price: 14000 },
      { name: "Chicken Wings Chinese Style", price: 8000 },
      { name: "Drums of Heaven", price: 8000 },
      { name: "Chicken Lollipop", price: 12000 },
      { name: "Chicken Wings Pousine", price: 8000 },
      { name: "Chicken Wings Pilipili", price: 8000 },
      { name: "Fish Fingers", price: 13000 },
      { name: "Nundu Masala", price: 7000 },
      { name: "Mishkaki Masala", price: 7000 }
    ]
  },

  {
    id: "barbecue",
    name: "Barbecue",
    items: [
      { name: "Sekela Chicken with Chips", price: 10000 },
      { name: "Gajjar Chicken with Chips", price: 10000 },
      { name: "Tandoor Chicken with Chips", price: 11000 },
      { name: "Lumumba Special Chicken with Chips", price: 10000 },
      { name: "Black Pepper Chicken with Chips", price: 10000 },
      { name: "Kuku Zero with Chips", price: 10000 },
      { name: "Lemon Chicken with Chips", price: 10000 },
      { name: "Malai Chicken with Chips", price: 10000 },
      { name: "Karanga Chicken with Chips", price: 10000 },
      { name: "Mishkaki Plate", price: 7000 },
      { name: "Nundu Plate", price: 7000 },
      { name: "Fish Mishkaki", price: 6000 },
      { name: "Firigisi, Maini Plate", price: 6000 },
      { name: "Reshmi Kebab Chicken", price: 8000 },
      { name: "Beef Seekh Kebab", price: 9000 },
      { name: "Chicken Tikka Boti Plate", price: 8000 },
      { name: "Malai Boti Plate", price: 8000 },
      { name: "Prawns BBQ Jumbo", price: 20000 },
      { name: "Calamari BBQ", price: 18000 },
      { name: "Mishkaki Kidebe", price: 7000 },
      { name: "Nundu Kidebe", price: 7000 },
      { name: "Ndizi Choma", price: 2000 }
    ]
  },

  {
    id: "chicken-bone",
    name: "Chicken Bone",
    items: [
      { name: "Chicken Pousine with Chips or Mash", price: 13000 },
      { name: "Chicken Pilipili with Chips or Mash", price: 12000 },
      { name: "Lumumba Fried Chicken with Chips or Mash", price: 11000 },
      { name: "Lumumba Special Whole Chicken served with Rice", price: 23000 },
      { name: "Kuku Kidebe", price: 10000 }
    ]
  },

  {
    id: "boneless-chicken",
    name: "Boneless Chicken",
    items: [
      { name: "Chicken BBQ Steak with Chips or Mash", price: 15000 },
      { name: "Chicken Pepper Steak with Chips or Mash", price: 15000 },
      { name: "Chicken Garlic Steak with Chips or Mash", price: 15000 },
      { name: "Chicken Mushroom Steak with Chips or Mash", price: 15000 },
      { name: "Crunchy Chicken with Chips or Mash", price: 15000 },
      { name: "Crispy Chicken with Chips or Mash", price: 15000 },
      { name: "Chicken Escalope with Chips or Mash", price: 15000 },
      { name: "Mixed Veg Chicken (Gravy)", price: 15000 },
      { name: "Kadai Chicken (Gravy)", price: 13000 },
      { name: "Chicken Tikka Masala (Gravy)", price: 13000 },
      { name: "Jeera Chicken (Gravy)", price: 13000 },
      { name: "Tawa Chicken (Gravy)", price: 13000 },
      { name: "Chicken Patiala (Gravy)", price: 13000 },
      { name: "Butter Chicken (Gravy)", price: 13000 },
      { name: "Chicken Masala (Gravy)", price: 13000 },
      { name: "Chicken in Oyster Sauce (Gravy/Dry)", price: 13000 },
      { name: "Mongolian Chicken (Gravy/Dry)", price: 13000 },
      { name: "Chicken in Black Bean Sauce (Gravy/Dry)", price: 13000 },
      { name: "Chilly Chicken (Gravy/Dry)", price: 13000 },
      { name: "Shizwan Chicken (Gravy/Dry)", price: 13000 },
      { name: "Chicken in Creamy Sauce", price: 13000 }
    ]
  },

  {
    id: "beef",
    name: "Beef",
    items: [
      { name: "Beef BBQ Steak with Chips or Mash", price: 15000 },
      { name: "Beef Pepper Steak with Chips or Mash", price: 15000 },
      { name: "Beef Garlic with Chips or Mash", price: 15000 },
      { name: "Beef Mushroom Steak with Chips or Mash", price: 15000 },
      { name: "T-Bone Steak (250g) with Chips or Mash", price: 15000 },
      { name: "T-Bone Steak (500g) with Chips or Mash", price: 23000 },
      { name: "Beef Chilly", price: 13000 },
      { name: "Mongolian Beef", price: 13000 },
      { name: "Beef Teriyaki", price: 13000 },
      { name: "Beef in Oyster Sauce", price: 13000 },
      { name: "Beef in Manchurian", price: 13000 },
      { name: "Beef in Shizwan", price: 13000 },
      { name: "Beef in Black Bean Sauce", price: 13000 },
      { name: "Beef Laaziz", price: 13000 },
      { name: "Beef Escalope", price: 13000 },
      { name: "Beef Gosh", price: 14000 }
    ]
  },

  {
    id: "calamari",
    name: "Calamari",
    items: [
      { name: "Prawns Calamari Mix", price: 17000 },
      { name: "Garlic Calamari", price: 15000 },
      { name: "Crispy Calamari", price: 15000 },
      { name: "Fried Calamari", price: 15000 },
      { name: "Calamari Pilipili", price: 15000 },
      { name: "Chilly Calamari (Gravy/Dry)", price: 15000 },
      { name: "Manchurian Calamari (Gravy/Dry)", price: 15000 },
      { name: "Calamari in Oyster Sauce (Gravy/Dry)", price: 15000 },
      { name: "Butter Calamari (Gravy)", price: 15000 },
      { name: "Shizwan Calamari", price: 15000 },
      { name: "In-Garlic Calamari", price: 15000 },
      { name: "Calamari Masala (Gravy)", price: 15000 },
      { name: "Mix Veg. Calamari (Gravy)", price: 15000 },
      { name: "Calamari Laaziz", price: 15000 }
    ]
  },

  {
    id: "prawns",
    name: "Prawns",
    items: [
      { name: "In-Garlic Prawns (Dry)", price: 15000 },
      { name: "Garlic Prawns (Gravy)", price: 15000 },
      { name: "Fried Prawns", price: 15000 },
      { name: "Prawns Pilipili", price: 15000 },
      { name: "Prawns Pousine", price: 15000 },
      { name: "Crispy Prawns", price: 15000 },
      { name: "Black Pepper Prawns", price: 15000 },
      { name: "Prawns Manchurian", price: 15000 },
      { name: "Prawns in Oyster Sauce", price: 15000 },
      { name: "Shizwan Prawn (Gravy)", price: 15000 },
      { name: "Prawns Masala (Gravy)", price: 15000 },
      { name: "Prawns Tawa (Gravy)", price: 15000 },
      { name: "Butter Prawns (Gravy)", price: 15000 },
      { name: "Prawns Jeera (Gravy)", price: 15000 },
      { name: "Mixed Veg Prawns", price: 17000 },
      { name: "Prawns Laaziz", price: 15000 },
      { name: "Chilly Prawns", price: 15000 },
      { name: "Prawns Calamari Mix", price: 17000 },
      { name: "Prawns Sizzler", price: 18000 },
      { name: "Prawns Tikka Masala", price: 15000 },
      { name: "Prawns Makhanwala", price: 15000 }
    ]
  },

  {
    id: "fish",
    name: "Fish",
    items: [
      { name: "Changu Choma", price: 14000 },
      { name: "Fried Changu", price: 14000 },
      { name: "Changu Pousine", price: 16000 },
      { name: "Changu Masala", price: 17000 },
      { name: "Changu Mchemsho", price: 17000 },
      { name: "Butter Changu", price: 17000 },
      { name: "Changu Pilipili", price: 16000 },
      { name: "Lemon Changu", price: 14000 },
      { name: "Jeera Fish Masala", price: 14000 },
      { name: "Tawa Fish Masala", price: 14000 },
      { name: "Fish Tikka Masala", price: 14000 },
      { name: "Chilly Fish", price: 14000 },
      { name: "Fish Fillet Barbeque", price: 14000 },
      { name: "Fish Pilipili", price: 14000 },
      { name: "King Fish", price: 14000 },
      { name: "King Fish Pilipili", price: 15000 },
      { name: "King Fish Pousine", price: 15000 },
      { name: "King Fish BBQ", price: 14000 },
      { name: "Fish Manchurian", price: 14000 },
      { name: "Fish Escalope", price: 14000 },
      { name: "Fish Fingers", price: 14000 }
    ]
  },

  {
    id: "sizzlers",
    name: "Sizzlers",
    items: [
      { name: "Chicken Sizzler", price: 15000 },
      { name: "Beef Sizzler", price: 16000 },
      { name: "Prawns Sizzler", price: 16000 },
      { name: "Calamari Sizzler", price: 16000 },
      { name: "Mix Prawns, Calamari", price: 17000 },
      { name: "Firigisi / Maini Sizzler", price: 11000 }
    ]
  },

  {
    id: "pasta",
    name: "Pasta",
    items: [
      { name: "Chicken Pasta Red Sauce", price: 14000 },
      { name: "Chicken Pasta White Sauce", price: 14000 },
      { name: "Seafood Pasta Red Sauce", price: 16000 },
      { name: "Seafood Pasta White Sauce", price: 16000 },
      { name: "Beef Pasta Red Sauce", price: 12000 },
      { name: "Beef Pasta with White Sauce", price: 12000 }
    ]
  },

  {
    id: "soup",
    name: "Soup",
    items: [
      { name: "Chicken Hot & Sour Soup", price: 8000 },
      { name: "Seafood Hot & Sour Soup", price: 10000 },
      { name: "Chicken Creamy Soup", price: 8000 },
      { name: "Seafood Creamy Soup", price: 10000 },
      { name: "Pweza Soup", price: 10000 }
    ]
  },

  {
    id: "rice",
    name: "Rice",
    items: [
      { name: "Chicken Fried Rice", price: 8000 },
      { name: "Beef Fried Rice", price: 9000 },
      { name: "Vegetable Fried Rice", price: 5000 },
      { name: "Steamed Rice", price: 4000 },
      { name: "Mixed Fried Rice", price: 9000 },
      { name: "Egg Fried Rice", price: 5000 },
      { name: "Shizwan Chicken Fried Rice", price: 9000 },
      { name: "Shizwan Vegetable Rice", price: 6000 },
      { name: "Seafood Rice", price: 10000 },
      { name: "Shizwan Seafood Rice", price: 11000 },
      { name: "Moroccan Chicken Rice (half chicken)", price: 14000 }
    ]
  },

  {
    id: "chips",
    name: "Chips",
    items: [
      { name: "Plain Chips", price: 3000 },
      { name: "Shizwan Chips", price: 4000 },
      { name: "Manchurian Chips", price: 4000 },
      { name: "Chilly Chips", price: 4000 },
      { name: "Masala Chips", price: 3000 },
      { name: "Chips Rashidi", price: 4000 },
      { name: "Mash Potato", price: 4000 }
    ]
  },

  {
    id: "naan",
    name: "Naan",
    items: [
      { name: "Chapati", price: 1000 },
      { name: "Butter Naan", price: 2000 },
      { name: "Garlic Naan", price: 2000 },
      { name: "Plain Naan", price: 2000 },
      { name: "Cheese Naan", price: 4000 },
      { name: "Garlic Cheese Naan", price: 4000 },
      { name: "Stuff Naan", price: 3000 },
      { name: "Roti Naan", price: 2000 }
    ]
  },

  {
    id: "vegetables",
    name: "Vegetables",
    items: [
      { name: "Mixed Vegetables Masala", price: 8000 },
      { name: "Vegetable Qoorma", price: 8000 },
      { name: "Vegetable Makhanwala", price: 8000 },
      { name: "Crispy Vegetable", price: 8000 },
      { name: "Manchurian Vegetable", price: 9000 },
      { name: "Shizwan Vegetable", price: 9000 },
      { name: "Paneer Masala", price: 9000 },
      { name: "Paneer Makhanwala", price: 9000 },
      { name: "Chilly Paneer", price: 9000 },
      { name: "Paneer Tikka Masala", price: 9000 }
    ]
  },

  {
    id: "burgers-wraps",
    name: "Burger & Wraps",
    items: [
      { name: "Chicken Burger", price: 8000 },
      { name: "Beef Burger", price: 8000 },
      { name: "Vegetable Burger", price: 7000 },
      { name: "Lumumba Burger", price: 12000 },
      { name: "Chicken Sandwich", price: 8000 },
      { name: "Beef Sandwich", price: 8000 },
      { name: "Vegetable Sandwich", price: 8000 },
      { name: "Lumumba Special Sandwich", price: 12000 },
      { name: "Chicken Shawarma", price: 6000 },
      { name: "Beef Shawarma", price: 8000 }
    ]
  },

  {
    id: "pizza",
    name: "Pizza",
    items: [
      { name: "Margherita Pizza", price: 12000, desc: "Cheese, Tomato, Sauce" },
      { name: "Chicken Pizza", price: 14000, desc: "Cheese, Tomato, Sauce" },
      { name: "Sausage Pizza", price: 14000, desc: "Cheese, Tomato, Sauce" },
      { name: "Vegetable Pizza", price: 13000, desc: "Sauce, Chicken, Sausage, Minced Beef, Cheese" },
      { name: "Lumumba Grill Pizza", price: 17000, desc: "Sauce, Chicken, Sausage, Minced Beef, Cheese" },
      { name: "Pepperoni Pizza", price: 15000 },
      { name: "Seafood Pizza", price: 17000, desc: "Cheese, Prawns, Calamari, Sauce" },
      { name: "BBQ Chicken Pizza", price: 15000, desc: "Chicken, Pepper, Onion, Sauce, Cheese" },
      { name: "BBQ Chicken Pizza", price: 15000, desc: "Chicken, BBQ Sauce, Onion, Cheese" },
      { name: "Chicken Tikka Pizza", price: 15000, desc: "Green Pepper, Onion, Chicken, Sauce, Cheese" },
      { name: "Hawaii Pizza", price: 15000, desc: "Pineapple, Salami, Sauce, Cheese" },
      { name: "Minced Beef Pizza", price: 15000, desc: "Mince Beef, Sauce, Cheese" },
      { name: "Vegetable Lovers Pizza", price: 15000, desc: "Sauce, Green Pepper, Onion, Mushroom, Olives, Carrot, Cheese" }
    ]
  },

  {
    id: "makange",
    name: "Makange",
    items: [
      { name: "Mbuzi Makange", price: 15000 },
      { name: "Kuku Kienyeji Makange", price: 20000 },
      { name: "Firigisi / Maini Makange", price: 10000 },
      { name: "Samaki Makange", price: 17000 },
      { name: "Kuku Makange", price: 15000 }
    ]
  },

  {
    id: "vitu-amazing",
    name: "Vitu Amazing",
    items: [
      { name: "Firigisi / Maini Rice", price: 10000 },
      { name: "Roast Maini", price: 8000 },
      { name: "Roast Kuku Kienyeji", price: 20000 },
      { name: "Roast Mbuzi", price: 15000 },
      { name: "Honey Wings", price: 9000 }
    ]
  },

  {
    id: "foil",
    name: "Foil",
    items: [
      { name: "Foil Mbuzi (half Kg)", price: 18000 },
      { name: "Foil Kuku (half Kg)", price: 12000 },
      { name: "Foil Samaki", price: 18000 },
      { name: "Foil Kuku Kienyeji", price: 20000 }
    ]
  }
];


/* ==========================================================================
   2. HELPER FUNCTIONS
   ========================================================================== */


/**
 * Format a number as a Tanzanian Shilling price.
 *
 * Example:
 * formatPrice(12000) returns "TSh 12,000/="
 */
function formatPrice(amount) {
  return "TSh " + amount.toLocaleString("en-US") + "/=";
}


/**
 * Create an HTML element.
 *
 * @param {string} tag       HTML tag name, such as "div" or "h2".
 * @param {string} className Optional CSS class.
 * @returns {HTMLElement}
 *
 * Text is always added with textContent, so menu data can never
 * be interpreted as HTML.
 */
function el(tag, className, text) {
  const element = document.createElement(tag);

  if (className) {
    element.className = className;
  }

  if (text !== undefined) {
    element.textContent = text;
  }

  return element;
}


/* ==========================================================================
   3. CATEGORY NAVIGATION
   Creates one navigation button for every menu category.
   Clicking a button scrolls to its section.
   ========================================================================== */

function renderNav() {
  const nav = document.getElementById("category-nav");
  const navContainer = document.querySelector(".category-nav");

  if (!nav || !navContainer) {
    return;
  }

  MENU_DATA.forEach((category) => {
    const button = el("button", "nav-pill", category.name);

    button.type = "button";
    button.dataset.target = category.id;

    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", "false");

    button.addEventListener("click", () => {
      const target = document.getElementById(category.id);

      if (!target) {
        return;
      }

      // Leave room for the sticky navigation bar.
      const headerOffset = navContainer.offsetHeight + 12;

      const targetPosition =
        target.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    });

    nav.appendChild(button);
  });
}


/* ==========================================================================
   4. MENU RENDERING
   Builds every category and item inside <main id="menu-content">.

   Each row is: name ........ price
   The dotted leader between them is drawn with CSS.
   ========================================================================== */

function renderMenu() {
  const main = document.getElementById("menu-content");

  if (!main) {
    return;
  }

  MENU_DATA.forEach((category) => {

    const section = el("section", "category-section");

    section.id = category.id;
    section.setAttribute("aria-labelledby", category.id + "-heading");

    // Category heading (red brush-stroke label).
    const heading = el("h2", "category-heading", category.name);

    heading.id = category.id + "-heading";

    section.appendChild(heading);

    // Optional category note.
    if (category.note) {
      section.appendChild(el("p", "category-note", category.note));
    }

    const list = el("div", "item-list");

    category.items.forEach((item) => {

      const row = el("article", "menu-item");

      // Name, dotted leader and price on one line.
      const line = el("div", "menu-item-line");

      line.appendChild(el("h3", "menu-item-name", item.name));
      line.appendChild(el("span", "menu-item-leader"));

      const hasPrice = typeof item.price === "number";

      const price = el(
        "span",
        hasPrice ? "menu-item-price" : "menu-item-price menu-item-price--ask",
        hasPrice ? formatPrice(item.price) : "Ask your waiter"
      );

      line.appendChild(price);
      row.appendChild(line);

      // Optional description.
      if (item.desc) {
        row.appendChild(el("p", "menu-item-desc", item.desc));
      }

      list.appendChild(row);
    });

    section.appendChild(list);
    main.appendChild(section);
  });
}


/* ==========================================================================
   5. ACTIVE CATEGORY TRACKING
   Highlights the navigation button for the section being viewed.
   ========================================================================== */

function setupActiveTracking() {
  const pills = Array.from(document.querySelectorAll(".nav-pill"));

  const sections = MENU_DATA.map((category) =>
    document.getElementById(category.id)
  );

  const navElement = document.querySelector(".category-nav");

  if (!pills.length || !navElement) {
    return;
  }

  function setActive(categoryId) {
    pills.forEach((pill) => {

      const isActive = pill.dataset.target === categoryId;

      pill.classList.toggle("active", isActive);

      pill.setAttribute("aria-selected", isActive ? "true" : "false");

      // Keep the active button visible inside the scrolling bar.
      if (isActive) {
        pill.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest"
        });
      }

    });
  }

  const observer = new IntersectionObserver(
    (entries) => {

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });

    },
    {
      root: null,
      rootMargin: `-${navElement.offsetHeight + 20}px 0px -70% 0px`,
      threshold: 0
    }
  );

  sections.forEach((section) => {
    if (section) {
      observer.observe(section);
    }
  });

  // Highlight the first category when the page loads.
  if (sections[0]) {
    setActive(sections[0].id);
  }
}


/* ==========================================================================
   6. INITIALIZE THE DIGITAL MENU
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  renderNav();

  renderMenu();

  setupActiveTracking();

  const yearElement = document.getElementById("year");

  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

});
