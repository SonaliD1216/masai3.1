// Grab references to the DOM elements
const addItemButton = document.getElementById('add-item');
const itemNameInput = document.getElementById('item-name');
const itemQuantityInput = document.getElementById('item-quantity');
const shoppingList = document.getElementById('shopping-list');

// Function to add a new item to the shopping list
function addItem() {
    // Get the item name and quantity from the input fields
    const itemName = itemNameInput.value.trim();
    const itemQuantity = itemQuantityInput.value.trim();

    // Validate inputs
    if (itemName === "" || itemQuantity === "") {
        alert("Please enter both item name and quantity.");
        return;
    }

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.classList.add('shopping-list-item');

    // Add the item name and quantity to the list item
    listItem.innerHTML = `
        <span>${itemName} - ${itemQuantity}</span>
        <button class="edit-item">Edit</button>
        <button class="remove-item">Remove</button>
    `;

    // Append the new list item to the shopping list
    shoppingList.appendChild(listItem);

    // Reset the input fields
    itemNameInput.value = '';
    itemQuantityInput.value = '';

    // Add event listeners for the Edit and Remove buttons
    const editButton = listItem.querySelector('.edit-item');
    const removeButton = listItem.querySelector('.remove-item');

    editButton.addEventListener('click', () => editItem(listItem, itemName, itemQuantity));
    removeButton.addEventListener('click', () => removeItem(listItem));
}

// Function to edit an existing item
function editItem(listItem, originalName, originalQuantity) {
    // Prompt the user to enter new values
    const newItemName = prompt("Edit item name:", originalName);
    const newItemQuantity = prompt("Edit item quantity:", originalQuantity);

    // If the user cancels, exit the function
    if (newItemName === null || newItemQuantity === null) return;

    // Update the item's name and quantity in the list item
    listItem.querySelector('span').textContent = `${newItemName} - ${newItemQuantity}`;
}

// Function to remove an item from the list
function removeItem(listItem) {
    // Remove the list item from the shopping list
    shoppingList.removeChild(listItem);
}

// Add an event listener for the "Add Item" button
addItemButton.addEventListener('click', addItem);
