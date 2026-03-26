import { db, collection, getDocs, deleteDoc, doc } from "./config.js";

const cartItemsContainer = document.getElementById("cart-items");

async function loadCart() {
  try {
    const querySnapshot = await getDocs(collection(db, "cart"));
    
    if (querySnapshot.empty) {
      cartItemsContainer.innerHTML = `
        <div class="text-center py-5 w-100 animate__animated animate__fadeIn">
            <i class="fa-solid fa-cart-shopping mb-4 text-muted" style="font-size: 4rem;"></i>
            <h3>Your cart is currently empty</h3>
            <p>Browse our collection of premium dry fruits!</p>
            <a href="index.html" class="btn btn-primary mt-3 px-4 rounded-pill">Start Shopping</a>
        </div>
      `;
      return;
    }

    cartItemsContainer.innerHTML = "";
    querySnapshot.forEach((document) => {
      const data = document.data();
      const docId = document.id;
      
      cartItemsContainer.innerHTML += `
        <div class="carts animate__animated animate__zoomIn">
          <div class="cart-badge">Premium</div>
          <h2>${data.name}</h2>
          <div class="product-info p-3 rounded mb-3">
             <p><b>Price:</b> $${data.price}</p>
             <p><b>Weight:</b> ${data.weight || '500g'}</p>
          </div>
          <p class="text-muted small">Product ID: ${data.productId}</p>
          <button class="btn btn-outline-danger btn-sm mt-2 w-100" onclick="removeFromCart('${docId}')">Remove Item</button>
        </div>
      `;
    });
  } catch (error) {
    console.error("Error loading cart: ", error);
    cartItemsContainer.innerHTML = `
        <div class="alert alert-danger w-100">
            <strong>Firebase Error:</strong> ${error.message}
        </div>`;
  }
}

// Global Remove from Cart function for Firestore storage
window.removeFromCart = async function (docId) {
  if (!confirm("Are you sure you want to remove this item?")) return;

  try {
    await deleteDoc(doc(db, "cart", docId));
    alert("Item removed successfully!");
    loadCart(); // Reload the cart display
  } catch (error) {
    console.error("Error removing item: ", error);
    alert("Error removing item: " + error.message);
  }
};

// Initial load
loadCart();