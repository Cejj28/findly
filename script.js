// script.js

// Function to initialize header scroll effect
function initHeaderScroll() {
    const header = document.querySelector('header');
    if (!header) {
        console.warn('Header element not found'); // Debug if header is missing
        return;
    }
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Run immediately to catch early page loads
initHeaderScroll();

// Run on DOMContentLoaded as a backup for late-loaded DOM
document.addEventListener('DOMContentLoaded', function() {
    // Re-run header scroll setup
    initHeaderScroll();

    // Mock data for items
    const items = [
        {
            id: '1',
            title: 'iPhone 13 Pro',
            description: 'Lost my iPhone 13 Pro with a blue case at Central Park. It has a photo of a dog as the wallpaper.',
            image: 'https://images.unsplash.com/photo-1603898037225-1bea09c550c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Electronics',
            location: 'Central Park, New York',
            date: 'Aug 15, 2023',
            type: 'lost',
        },
        {
            id: '2',
            title: 'Gold Wedding Ring',
            description: 'Found a gold wedding ring with an inscription "Forever & Always" near the fountain in Madison Square Park.',
            image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Jewelry & Watches',
            location: 'Madison Square Park, New York',
            date: 'Aug 12, 2023',
            type: 'found',
        },
        {
            id: '3',
            title: 'Black Leather Wallet',
            description: 'Lost my black leather wallet containing ID, credit cards, and about $40 cash at Times Square subway station.',
            image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Bags & Wallets',
            location: 'Times Square Subway, New York',
            date: 'Aug 10, 2023',
            type: 'lost',
        },
        {
            id: '4',
            title: 'Car Keys with Red Keychain',
            description: 'Found a set of car keys with a distinctive red keychain near Bryant Park on the bench facing the library.',
            image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
            category: 'Keys',
            location: 'Bryant Park, New York',
            date: 'Aug 8, 2023',
            type: 'found',
        },
    ];

    // Populate the items grid
    function populateItems(filter = 'all') {
        const itemsGrid = document.querySelector('.items-grid');
        if (!itemsGrid) return; // Exit if grid not found (e.g., on login page)
        
        itemsGrid.innerHTML = '';
        
        const filteredItems = filter === 'all' 
            ? items 
            : items.filter(item => item.type === filter);
        
        filteredItems.forEach(item => {
            const itemCard = document.createElement('div');
            itemCard.className = 'item-card';
            itemCard.innerHTML = `
                <div class="item-image">
                    <img src="${item.image}" alt="${item.title}">
                    <span class="item-badge ${item.type}">${item.type}</span>
                </div>
                <div class="item-content">
                    <span class="item-category">${item.category}</span>
                    <h3 class="item-title">${item.title}</h3>
                    <p class="item-description">${item.description}</p>
                    <div class="item-details">
                        <span class="item-detail location">${item.location}</span>
                        <span class="item-detail date">${item.date}</span>
                    </div>
                </div>
                <a href="#" class="item-link">View Details</a>
            `;
            itemsGrid.appendChild(itemCard);
        });
    }

    // Initialize the items grid (only if present on the page)
    populateItems();

    // Handle tab clicks
    const tabs = document.querySelectorAll('.tab');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                const filter = this.getAttribute('data-filter');
                populateItems(filter);
            });
        });
    }

    // Mobile menu toggle
    const menuToggle = document.getElementById('menuToggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
            document.querySelector('.auth-buttons').classList.toggle('active');
        });
    }

    // Counter animation
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const animate = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;
            const increment = target / speed;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(animate, 1);
            } else {
                counter.innerText = target;
            }
        };

        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                animate();
                observer.disconnect();
            }
        }, { threshold: 0.5 });

        observer.observe(counter);
    });
});