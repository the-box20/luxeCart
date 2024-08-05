// Sample product data
const products = [
    { id: 1, name: "Wireless Headphones", price: 129.99, image: "path/to/headphones-image.jpeg" },
    { id: 2, name: "Smartwatch", price: 199.99, image: "path/to/smartwatch-image.jpg" },
    { id: 3, name: "4K TV", price: 799.99, image: "path/to/tv-image.jpeg" },
    { id: 4, name: "Laptop", price: 999.99, image: "path/to/laptop-image.jpg" },
    { id: 5, name: "Griffe T-Shirt", price: 100.99, image: "path/to/clothes1.jpg" },
    { id: 6, name: "White Shirt", price: 199.99, image: "path/to/clothes2.webp" },
    { id: 7, name: "Trousers", price: 799.99, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi7XJgr_N4_HoaFDx21QQmFz38b_dN6RprLw&s" },
    { id: 8, name: "SmartPhone", price: 999.99, image: "https://www.trustedreviews.com/wp-content/uploads/sites/54/2023/11/Best-smartphone-3.jpg" },
    { id: 9, name: "Hat", price: 129.99, image: "https://m.media-amazon.com/images/I/71tKXRvS9IL.jpg" },
    { id: 10, name: "Cap Hat", price: 199.99, image: "https://m.media-amazon.com/images/I/412Zuwoa2UL._AC_UY1000_.jpg" },
    { id: 11, name: "Net Cap", price: 799.99, image: "https://m.media-amazon.com/images/I/71R9eF-9TVL._AC_UL1500_.jpg" },
    { id: 12, name: "Shoes", price: 999.99, image: "data:image/jpeg;base64,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" },
];

let cart = [];

//function to updates all cart elements related
function updateCart() {
    updateCartCount();
    renderCart();
    renderMiniCart();
}

//search functionality
function searchProducts(query) {
    return products.filter(product => 
        product.name.toLowerCase().includes(query.toLowerCase())
    );
}

function handleSearch() {
    const query = document.getElementById('search-input').value;
    const filteredProducts = searchProducts(query);
    renderProducts(filteredProducts);
}

// Function to render products (update existing function)
function renderProducts(productsToRender = products) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <a href="/product-detail.html">
            <img src="${product.image}" alt="${product.name}">
            </a>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="price">$${product.price.toFixed(2)}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });

    if (productsToRender.length === 0) {
        productGrid.innerHTML = '<p>No products found. Please try a different search.</p>';
        return;
    }
}

// Function to add item to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        const existingItem = cart.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ ...product, quantity: 1 });
        }
        updateCart();
    }
}


// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    const totalCount = cart.reduce((total, item) => total + item.quantity, 0);
    cartCount.textContent = totalCount;
}

// Function to render cart
function renderCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button class="remove-item" data-id="${item.id}">Remove</button>
        `;
        cartItems.appendChild(itemElement);

        total += item.price * item.quantity;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;
}

// Function to remove item from cart
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    // Add to cart
    document.getElementById('product-grid').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });

    // Open cart modal
    document.querySelector('.cart-icon').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'block';
        renderCart();
    });

    // Close cart modal
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('cart-modal').style.display = 'none';
    });

    // Remove item from cart
    document.getElementById('cart-items').addEventListener('click', (event) => {
        if (event.target.classList.contains('remove-item')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            removeFromCart(productId);
        }
    });

    // Checkout button
    document.getElementById('checkout-button').addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Your cart is empty!');
        } else {
            alert('Thank you for your purchase!');
            cart = [];
            updateCartCount();
            renderCart();
            document.getElementById('cart-modal').style.display = 'none';
        }
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', handleSearch);
    document.getElementById('search-input').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    })
});

// Close modal when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('cart-modal')) {
        document.getElementById('cart-modal').style.display = 'none';
    }
});


//Sliding show
document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelector(".slides");
    const PrevButton = document.querySelector(".prev");
    const NextButton = document.querySelector(".next");
    const SlideWidth = document.querySelector(".slides img").clientWidth;
    let currentIndex = 0;

    PrevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slides.style.transform = `translateX(-${currentIndex * SlideWidth}px)`;
        }
    });

    NextButton.addEventListener('click', () => {
        if (currentIndex <  slides.children.length -1) {
            currentIndex++;
            slides.style.transform = `translateX(-${currentIndex * SlideWidth}px)`;
        }
    });
});

//popup login
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('formModal');
    const openButton = document.getElementById('openFormBtn');
    const closeButton = document.getElementsByClassName('close')[0];
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');

    // Open the modal
    openButton.onclick = () => {
        modal.style.display = 'block';
    }

    // Close the modal when clicking the close button
    closeButton.onclick = () => {
        modal.style.display = 'none';
    }

    // Close the modal when clicking outside of it
    window.onclick = (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Prevent modal from closing when clicking inside the form
    modal.querySelector('.modal-content').onclick = (event) => {
        event.stopPropagation();
    }

    // Switch to register form
    showRegisterLink.onclick = (e) => {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    }

    // Switch to login form
    showLoginLink.onclick = (e) => {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    }

    // Handle login form submission
    loginForm.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;
        console.log('Login attempt:', { email, password });
        // Here you would typically send this data to your server
        alert('Login successful!');
    }

    // Handle register form submission
    registerForm.querySelector('form').onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        
        console.log('Registration attempt:', { name, email, password });
        // Here you would typically send this data to your server
        alert('Registration successful!');
    }
});