// Sample data (in a real application, this would come from a backend)
let products = [
    { id: 1, name: "Wireless Headphones", price: 129.99 },
    { id: 2, name: "Smartwatch", price: 199.99 },
    { id: 3, name: "4K TV", price: 799.99 },
    { id: 4, name: "Laptop", price: 999.99 },
];

let orders = [
    { id: 1, customer: "John Doe", total: 129.99, date: "2023-08-01", status: "Shipped" },
    { id: 2, customer: "Jane Smith", total: 999.99, date: "2023-08-02", status: "Processing" },
    { id: 3, customer: "Bob Johnson", total: 199.99, date: "2023-08-03", status: "Delivered" },
];

let customers = [
    { id: 1, name: "John Doe", email: "john@example.com", totalOrders: 1 },
    { id: 2, name: "Jane Smith", email: "jane@example.com", totalOrders: 1 },
    { id: 3, name: "Bob Johnson", email: "bob@example.com", totalOrders: 1 },
];

// Function to update dashboard metrics
function updateMetrics() {
    document.getElementById('total-sales').textContent = orders.reduce((sum, order) => sum + order.total, 0).toFixed(2);
    document.getElementById('total-orders').textContent = orders.length;
    document.getElementById('total-customers').textContent = customers.length;
    document.getElementById('total-products').textContent = products.length;
}

// Function to render product table
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>$${product.price.toFixed(2)}</td>
            <td>
                <button class="edit-product" data-id="${product.id}">Edit</button>
                <button class="delete-product" data-id="${product.id}">Delete</button>
            </td>
        `;
        productList.appendChild(row);
    });
}

// Function to render order table
function renderOrders() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    orders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.id}</td>
            <td>${order.customer}</td>
            <td>$${order.total.toFixed(2)}</td>
            <td>${order.date}</td>
            <td>${order.status}</td>
        `;
        orderList.appendChild(row);
    });
}

// Function to render customer table
function renderCustomers() {
    const customerList = document.getElementById('customer-list');
    customerList.innerHTML = '';
    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${customer.id}</td>
            <td>${customer.name}</td>
            <td>${customer.email}</td>
            <td>${customer.totalOrders}</td>
        `;
        customerList.appendChild(row);
    });
}

// Function to switch between dashboard sections
function switchSection(sectionId) {
    document.querySelectorAll('.dashboard-section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
    document.getElementById('section-title').textContent = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    updateMetrics();
    renderProducts();
    renderOrders();
    renderCustomers();

    // Navigation
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.sidebar a').forEach(l => l.classList.remove('active'));
            e.target.classList.add('active');
            switchSection(e.target.getAttribute('data-section'));
        });
    });

    // Add new product
    document.getElementById('add-product').addEventListener('click', () => {
        const name = prompt('Enter product name:');
        const price = parseFloat(prompt('Enter product price:'));
        if (name && !isNaN(price)) {
            const newProduct = {
                id: products.length + 1,
                name: name,
                price: price
            };
            products.push(newProduct);
            updateMetrics();
            renderProducts();
        }
    });

    // Edit and delete product event delegation
    document.getElementById('product-list').addEventListener('click', (e) => {
        if (e.target.classList.contains('edit-product')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === id);
            const newName = prompt('Enter new product name:', product.name);
            const newPrice = parseFloat(prompt('Enter new product price:', product.price));
            if (newName && !isNaN(newPrice)) {
                product.name = newName;
                product.price = newPrice;
                renderProducts();
            }
        } else if (e.target.classList.contains('delete-product')) {
            const id = parseInt(e.target.getAttribute('data-id'));
            products = products.filter(p => p.id !== id);
            updateMetrics();
            renderProducts();
        }
    });
});