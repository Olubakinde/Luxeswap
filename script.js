document.addEventListener("DOMContentLoaded", function() {
    const showMoreBtn = document.getElementById("showMoreBtn");
    const productGrid = document.querySelector('.product-grid');
    const productsPerPage = 3; // Number of products to show per page (3 items initially)

    let currentPage = 1; // Start with the first page

    // Product data (including images)
    const products = [
        { name: "Tace", description: "Black Handbag", price: "$10", image: "https://i5.walmartimages.com/asr/0825109f-84c8-4607-a5c1-d35719ca6ee6.1b75dcdcfb7aa4813d54c8bed646eefb.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff" },
        { name: "Product 2", description: "Lip Gloss", price: "$20", image: "https://i.pinimg.com/736x/33/18/12/3318120e77af6618408936a9c3b955e7.jpg" },
        { name: "Product 3", description: "Brown Leather bag", price: "$30", image: "https://lumiaccessories.com/wp-content/uploads/2017/10/JOHAN_281MH221TOF_72_1-1024x1024.jpg" },
        // { name: "Product 4", description: "Description for Product 4", price: "$40", image: "https://via.placeholder.com/150" },
        // { name: "Product 5", description: "Description for Product 5", price: "$50", image: "https://via.placeholder.com/150" },
        // { name: "Product 6", description: "Description for Product 6", price: "$60", image: "https://via.placeholder.com/150" },
        // { name: "Product 7", description: "Description for Product 7", price: "$70", image: "https://via.placeholder.com/150" },
        // { name: "Product 8", description: "Description for Product 8", price: "$80", image: "https://via.placeholder.com/150" },
        // { name: "Product 9", description: "Description for Product 9", price: "$90", image: "https://via.placeholder.com/150" },
        // { name: "Product 10", description: "Description for Product 10", price: "$100", image: "https://via.placeholder.com/150" }
    ];

    // Function to filter products based on search input
    document.getElementById('search').addEventListener('input', function() {
        const query = this.value.toLowerCase();
        const productCards = document.querySelectorAll('.product-card');

        productCards.forEach(card => {
            const productName = card.querySelector('h5').textContent.toLowerCase();
            const productDescription = card.querySelector('p').textContent.toLowerCase();

            if (productName.includes(query) || productDescription.includes(query)) {
                card.style.display = 'block'; // Show card if it matches search
            } else {
                card.style.display = 'none'; // Hide card if it doesn't match search
            }
        });
    });

    // Function to load products for the current page
    function loadProducts() {
        const start = (currentPage - 1) * productsPerPage;
        const end = start + productsPerPage;
        const currentProducts = products.slice(start, end);

        // Add product cards to the grid
        currentProducts.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("col-md-4", "product-card"); // Adjust the class as per your grid system
            productCard.innerHTML = `
                <div class="card">
                    <img src="${product.image}" alt="${product.name}" class="card-img-top"> <!-- Product Image -->
                    <div class="card-body">
                        <h5 class="card-title" style="color: black;">${product.name}</h5>
                        <p class="card-text" style="color: #777;">${product.description}</p>
                        <p class="price" style="color: #777;">${product.price}</p>
                        <button style="display: block; background: red;">Shop Now</button>
                    </div>
                </div>
            `;
            productGrid.appendChild(productCard);
        });

        // If there are more products to load, show the "Show More" button
        if (end < products.length) {
            showMoreBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'none'; // Hide the button if no more products
        }
    }

    // Handle "Show More" button click
    showMoreBtn.addEventListener('click', function() {
        currentPage++;
        loadProducts(); // Load more products for the next page
    });

    // Initial call to load products (3 items initially)
    loadProducts();
});
