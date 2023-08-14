const itemList = document.getElementById("item-list");
const addItemButton = document.getElementById("add-item");
const newItemInput = document.getElementById("new-item");
const itemDetailsDiv = document.getElementById("item-details");

function addItemToCart(itemName) {
    const item = { name: itemName };
    localStorage.setItem(itemName, JSON.stringify(item));

    const listItem = document.createElement("li");
    listItem.textContent = itemName;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Eliminar";
    deleteButton.addEventListener("click", () => {

        localStorage.removeItem(itemName);

        listItem.remove();
        itemDetailsDiv.innerHTML = "";
    });

    const detailsButton = document.createElement("button");
    detailsButton.textContent = "Detalles";
    detailsButton.addEventListener("click", () => {

        if (itemDetailsDiv.textContent !== itemName) {
            itemDetailsDiv.textContent = itemName;
        } else {
            itemDetailsDiv.textContent = "";
        }
    });

    listItem.appendChild(deleteButton);
    listItem.appendChild(detailsButton);
    itemList.appendChild(listItem);
}

for (let i = 0; i < localStorage.length; i++) {
    const itemName = localStorage.key(i);
    addItemToCart(itemName);
}

addItemButton.addEventListener("click", () => {
    const itemName = newItemInput.value;
    if (itemName) {
        addItemToCart(itemName);
        newItemInput.value = "";
    }
});
