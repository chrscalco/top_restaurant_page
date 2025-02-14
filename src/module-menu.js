export function menuModule () {
    const contentDiv = document.querySelector("#content");
    const menuDiv = document.createElement("div");

    menuDiv.classList.add("menu-div");
    contentDiv.appendChild(menuDiv);

    const menuHeader = document.createElement("h2");
    const menuItems = document.createElement("div");

    menuHeader.innerText = "MENU";
    menuItems.classList.add("items-div");

    menuDiv.appendChild(menuHeader);
    menuDiv.appendChild(menuItems);

    const xwriatiki = new MenuItem("Xoriatiki Salad", "6", ["Tomato", "Onion", "Cucumber", "Feta", "Olive Oil"], "xwr");
    const gyroxoir = new MenuItem("Pork Gyro Souvlaki", "3", ["Pita","Pork Gyro", "Onion", "Tomato", "Fries", "Tzatziki"], "pork-gyro");
    const gyrokot = new MenuItem("Chicken Gyro Souvlaki", "3", ["Pita","Chicken Gyro","Tomato","Fries","Sauce"],"chicken-gyro")
    const menu = [xwriatiki, gyroxoir, gyrokot];

    function createMenu (menu) {
        for (let i=0; i<menu.length; i++) {
            const item = document.createElement("div");
            item.classList.add(menu[i].getTag());
            item.classList.add("item");
            const itemImg = document.createElement("img");
            const itemName = document.createElement("h2");
            const itemPrice = document.createElement("h3");
            const itemIngredients = document.createElement("ul");

            itemName.innerText = menu[i].getName();
            itemPrice.innerText = "Price: " + menu[i].getPrice() + "$";

            for(let j=0; j<menu[i].ingredients.length; j++) {
                const ingredient = document.createElement("li");
                ingredient.innerText = menu[i].ingredients[j];
                itemIngredients.appendChild(ingredient);
            }

            item.appendChild(itemImg);
            item.appendChild(itemName);
            item.appendChild(itemPrice);
            item.appendChild(itemIngredients);

            menuItems.appendChild(item);
            
        }
    }

    createMenu(menu);
}

class MenuItem {
    constructor(name, price, ingredients, tag) {
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.tag = tag;
    }

    getName() {return this.name;}

    getPrice() {return this.price}

    getIngredients() {return this.ingredients}

    getTag() {return this.tag}
}