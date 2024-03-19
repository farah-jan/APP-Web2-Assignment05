// Function to add a new list item
function add(event) {
    event.preventDefault();
    console.log("Running add function");
  
    // Get input values
    const itemInput = document.getElementById('item-input');
    const categoryDropdown = document.getElementById('category-dropdown');
    const itemName = itemInput.value.trim();
    const category = categoryDropdown.value;
  
    // Validate inputs
    if (isValidated(itemName, category)) {
        // Create new list item
        const listItem = document.createElement('li');
        listItem.classList.add('flex', 'items-center', 'py-2');
        listItem.innerHTML = `
            <span class="text-2xl mr-2">➡️</span>
            <span class="mr-2">${itemName}</span>
            <span class="ml-2 px-2 py-1 rounded-md ${getCategoryClass(category)}">${category}</span>
        `;
  
        // Append new list item
        const list = document.getElementById('list-items');
        list.appendChild(listItem);
  
        // Clear input fields
        itemInput.value = '';
        categoryDropdown.value = '';
    } else {
        console.log("Invalid inputs");
    }
  }
  
  // Function to get Tailwind CSS class based on category
  function getCategoryClass(category) {
    switch(category) {
      case 'fruit':
        return 'bg-pink-200';
      case 'dairy':
        return 'bg-green-200';
      case 'grain':
        return 'bg-yellow-200';
      default:
        return '';
    }
  }
  
  // Function to validate inputs
  function isValidated(itemName, category) {
    console.log("Running isValidated function");
    let isValid = false;
  
    // Check if inputs are valid
    if (itemName.length > 0 && category !== "") {
        isValid = true;
    } else {
        const itemInput = document.getElementById('item-input');
        const categoryDropdown = document.getElementById('category-dropdown');
        if (itemName.length === 0) {
            itemInput.classList.add('border', 'border-red-500');
        }
        if (category === "") {
            categoryDropdown.classList.add('border', 'border-red-500');
        }
    }
  
    return isValid;
  }
  
  // Event listener for form submission
  const form = document.getElementById('list-form');
  form.addEventListener('submit', add);