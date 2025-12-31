// Get the list element
const list = document.getElementById("infi-list");

let itemCount = 0;

// Function to create and add list items
function addItems(count) {
  for (let i = 0; i < count; i++) {
    itemCount++;
    const li = document.createElement("li");
    li.textContent = `List Item ${itemCount}`;
    list.appendChild(li);
  }
}

// 1️⃣ Add 10 items by default
addItems(20);

// 2️⃣ Detect when user reaches the bottom of the page
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // When user reaches (or is very close to) the bottom
  if (scrollTop + windowHeight >= documentHeight - 5) {
    addItems(2);
  }
});
