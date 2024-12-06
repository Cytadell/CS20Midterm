// Function to render the property list
function renderProperties(properties) {
        console.log("Rending???");
        const propertyList = document.getElementById('property-list');
        propertyList.innerHTML = '';
        properties.forEach(property => {
        const propertyCard = `
                <div class="property-card">
                        <a href="product.html?id=${property.id}" class="property-link">
                                <img src="${property.imageUrl}" alt="${property.title}" class="property-image">
                        </a>
                        <div class="property-header">
                                <span class="date-posted">${property.datePosted}</span>
                                <img src="${property.isFavorite ? 'img/full_heart.png' : 'img/base_heart.png'}" 
                                alt="Favorite" class="fav-icon" 
                                onclick="toggleFavorite(this, ${property.id})" /> <!-- Heart icon -->
                        </div>
                        <div class="property-details">
                                <a href="product.html?id=${property.id}" class="property-link">
                                        <h3 class="property-title">${property.title}</h3>
                                        <p class="property-address">${property.address}</p>
                                        <p class="property-info">${property.type} | ${property.price}</p>
                                        <div class="property-distance">
                                                <img src="img/walk-icon.png" alt="Walk Icon" width="16" height="16"> 
                                                ${property.distance}
                                        </div>
                                </a>
                                <div class="property-contact">
                                <a <a href="mailto:emailproperty@example.com" class="contact-btn">Email Property</a>
                                <a href="contactus.html" class="contact-btn">Contact Us</a>
                        </div>
                        
                </div>
        `;
        propertyList.innerHTML += propertyCard;
        });
        updateFavoriteCount();
}

let favoriteCount = 0;

// Function to toggle the heart icon
function toggleFavorite(icon, propertyId) {
        // Find the property in the list and update its favorite status
        const property = properties.find(p => p.id === propertyId);

        if (!property) return;

        if (icon.src.includes('base_heart.png')) {
                icon.src = 'img/full_heart.png';
                property.isFavorite = true;
                favoriteCount++;
        } else {
                icon.src = 'img/base_heart.png';
                property.isFavorite = false;
                favoriteCount--;
        }
    
        savePropertiesToLocalStorage();
        updateFavoriteCount();
}

function updateFavoriteCount() {
        const favoriteCountElement = document.getElementById('favorite-count');
        const favoriteBtn = document.getElementById('favorites-filter-btn');
        const favoriteIcon = document.getElementById('favorites-icon');

        const favoriteCount = properties.filter(p => p.isFavorite).length;

        console.log("Print number of hearts:", favoriteCountElement);
        console.log("Print n:", favoriteCount);


        if (favoriteCountElement) {
                favoriteCountElement.textContent = favoriteCount;
        }

        // Enable/disable the favorites button
        if (favoriteCount > 0) {
                favoriteBtn.classList.add('active');
                favoriteBtn.style.cursor = 'pointer';
                if (favoriteIcon) {
                        // Change to full heart when active
                        favoriteIcon.src = 'img/full_heart.png';
                }

        } else {
                favoriteBtn.classList.remove('active');
                favoriteBtn.style.cursor = 'not-allowed';
                if (favoriteIcon) {
                        // Revert to base heart when inactive
                        favoriteIcon.src = 'img/base_heart.png';
                }
        }
        updateClearButtonState();
}


document.getElementById('favorites-filter-btn').addEventListener('click', () => {
        const favoriteBtn = document.getElementById('favorites-filter-btn');

        // If the button is not active, do nothing
        if (!favoriteBtn.classList.contains('active')) return;

        // Filter and display only favorited properties
        const favoritedProperties = properties.filter(property => property.isFavorite);
        renderProperties(favoritedProperties);
});

    
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
        const filterButton = document.getElementById('mobile-filter-btn');
        const filterContent = document.getElementById('mobile-filter-content');
        const doneButton = document.querySelector('.done-btn');
        const mobileClearBtn = document.querySelector('.clear-btn.mobile-clear');
        const desktopClearBtn = document.querySelector('.clear-btn.desktop-clear');
    
        // Initially hide the filter content
        filterContent.style.display = 'none';
    
        // Toggle visibility of the filter content when the Filter button is clicked
        filterButton.addEventListener('click', function() {
                filterContent.style.display = filterContent.style.display === 'none' ? 'block' : 'none';
        });

        // Attach event listeners to both Clear buttons
        if (mobileClearBtn) {
                mobileClearBtn.addEventListener('click', () => {
                    clearFilters();
                });
            }
        if (desktopClearBtn) {
                desktopClearBtn.addEventListener('click', () => {
                if (desktopClearBtn.classList.contains('active')) {
                        clearFilters();
                }
                });
        }
        // Apply filters and close dropdown when Done button is clicked
        doneButton.addEventListener('click', function() {
                filterContent.style.display = 'none';
                filterProperties();
        });

    
});
        // Variables to store filter values
        let selectedCampus = null;
        let minPrice = null;
        let maxPrice = null;
        let selectedPricingType = ["Per Bedroom", "Per Unit"];
        let selectedBeds = null;
        let selectedBaths = null;
        let selectedBuildingType = [];
        let selectedMobileCampus = [];
        let selectedDesktopCampus = null;
        let minMobilePrice = null;
        let maxMobilePrice = null;
        let minDesktopPrice = null;
        let maxDesktopPrice = null;

function addMobileListeners() {
        document.querySelectorAll('.mobile-campus').forEach(item => {
                item.addEventListener('change', () => {
                        updateSelectedList(item, selectedMobileCampus);
                        if (selectedMobileCampus.length === 2 || selectedMobileCampus.length === 0) {
                                selectedCampus = null;
                        } else {
                                selectedCampus = selectedMobileCampus[0];
                        }
                });
                syncFilters();
        });

        document.querySelector('.min-input.mobile-input').addEventListener('input', (e) => {
                minMobilePrice = parseInt(e.target.value) || null;
                syncFilters();
        });

        document.querySelector('.max-input.mobile-input').addEventListener('input', (e) => {
                maxMobilePrice = parseInt(e.target.value) || null;
                syncFilters();
        });

        document.querySelectorAll('.mobile-pricing-type input[type="checkbox"]').forEach(item => {
                item.addEventListener('change', () => {
                        handlePricingTypeChange(item);
                });
        });
        
        document.querySelectorAll('.mobile-beds input[name="beds"]').forEach(item => {
                item.addEventListener('change', () => {
                        selectedBeds = item.value;
                });
        });

        document.querySelectorAll('.mobile-baths input[name="baths"]').forEach(item => {
                item.addEventListener('change', () => {
                        selectedBaths = item.value;
                });
        });

        document.querySelectorAll('.mobile-building-type input[type="checkbox"]').forEach(item => {
                item.addEventListener('change', () => {
                        updateSelectedList(item, selectedBuildingType);
                });
                syncFilters();
        });
}

function addDesktopListener() {       
        document.querySelectorAll('.dropdown--campus').forEach(item => {
                item.addEventListener('click', () => {
                        selectedCampus = item.textContent;
                        filterProperties();
                });
        });

        document.querySelector('.min-input.desktop-input').addEventListener('input', (e) => {
                minDesktopPrice = parseInt(e.target.value) || null;
                syncFilters();
                filterProperties();
        });

        document.querySelector('.max-input.desktop-input').addEventListener('input', (e) => {
                maxDesktopPrice = parseInt(e.target.value) || null;
                syncFilters();
                filterProperties();
        });

        // Add event listeners for price range dropdown items
        document.querySelectorAll('.price-btn + .dropdown-content .dropdown-item').forEach(item => {
                item.addEventListener('click', () => {
                        const priceRange = item.textContent.trim();
                        if (priceRange.includes('-')) {
                                const [min, max] = priceRange.split('-').map(p => parseInt(p.replace('$', '').trim()));
                                minPrice = min;
                                maxPrice = max;
                        } else if (priceRange.includes('>')) {
                                minPrice = 2500;
                                maxPrice = 10000;
                        }
                        document.querySelector('.min-input').value = minPrice ? `$${minPrice}` : '';
                        document.querySelector('.max-input').value = maxPrice ? `$${maxPrice}` : '';
                        // Filter properties based on the selected price range
                        filterProperties();
                });
        });
        
        document.querySelectorAll('.pricing-type-btn + .dropdown-content input[type="checkbox"]').forEach(item => {
                item.addEventListener('change', () => {
                        handlePricingTypeChange(item);
                        filterProperties();
                });
        });
        
        document.querySelectorAll('.beds-baths-btn + .dropdown-content input[name="beds"]').forEach(item => {
                item.addEventListener('change', () => {
                        selectedBeds = item.value;
                        filterProperties();
                });
        });

        document.querySelectorAll('.beds-baths-btn + .dropdown-content input[name="baths"]').forEach(item => {
                item.addEventListener('change', () => {
                        selectedBaths = item.value;
                        filterProperties();
                });
        });

        document.querySelectorAll('.building-type-btn + .dropdown-content input[type="checkbox"]').forEach(item => {
                item.addEventListener('change', () => {
                        updateSelectedList(item, selectedBuildingType);
                        filterProperties();
                });
        });
}

function updateSelectedList(checkbox, list) {
        if (checkbox.checked) {
        // Add to the list if not already included
                if (!list.includes(checkbox.value)) {
                        list.push(checkbox.value);
                }
        } else {
                // Remove from the list if it's unchecked
                const index = list.indexOf(checkbox.value);
                if (index > -1) {
                        list.splice(index, 1);
                }
        }
}

// Function to handle changes in pricing type selection
function handlePricingTypeChange(checkbox) {
        if (checkbox.checked) {
                // If checked, add to the selectedPricingType list
                if (!selectedPricingType.includes(checkbox.value)) {
                        selectedPricingType.push(checkbox.value);
                }
        } else {
                // Ensure at least one type is always selected
                if (selectedPricingType.length > 1) {
                        const index = selectedPricingType.indexOf(checkbox.value);
                        if (index > -1) {
                                selectedPricingType.splice(index, 1);
                        }
                } else {
                        // Prevent unchecking the last option
                        checkbox.checked = true;
                }
        }
}


// Clear function
function clearFilters() {
        selectedCampus = null;
        minPrice = null;
        maxPrice = null;
        selectedPricingType = ["Per Bedroom", "Per Unit"];
        selectedBeds = null;
        selectedBaths = null;
        selectedBuildingType = [];
        favoriteCount = 0;
        // Reset all properties' favorite status
        properties.forEach(property => {
                property.isFavorite = false;
        });

        // Save the reset properties to localStorage
        savePropertiesToLocalStorage(properties);
        localStorage.removeItem('properties');


        // Reset UI inputs
        document.querySelectorAll('.filter-dropdown input, .submenu input').forEach(input => {
                if (input.type === 'checkbox') {
                        input.checked = selectedPricingType.includes(input.value);
                        input.checked = false;
                } else if (input.type === 'radio') {
                        input.checked = input.value === 'Any';
                } else {
                        input.value = '';
                }        
        });        
        
        renderProperties(properties);
        updateClearButtonState();
        updateFavoriteCount();
}        

// Function to set clear button to being active or not
function updateClearButtonState() {
        // Re-fetch the properties from localStorage to ensure the latest data
        const storedProperties = JSON.parse(localStorage.getItem('properties')) || properties;
        // Determine if any property is marked as favorite
        const hasFavorite = storedProperties.some(property => property.isFavorite);

        const hasActiveFilter = 
                selectedCampus ||
                minPrice !== null ||
                maxPrice !== null ||
                selectedPricingType.length < 2 ||
                selectedBeds !== null ||
                selectedBaths !== null ||
                selectedBuildingType.length > 0 ||
                hasFavorite; 

        // Show or hide the Clear button based on active filters        
        const clearButtons = document.querySelectorAll('.clear-btn');
        clearButtons.forEach(btn => {
                if (hasActiveFilter) {
                        btn.classList.add('active');
                        btn.style.cursor = 'pointer';
                } else {
                        btn.classList.remove('active');
                        btn.style.cursor = 'not-allowed';
                }
        });      
}        

// Synchronize filters between mobile and desktop
function syncFilters() {
        minPrice = minMobilePrice || minDesktopPrice;
        maxPrice = maxMobilePrice || maxDesktopPrice;

        updateClearButtonState();
}

// Function to filter properties based on selected filters
function filterProperties() {
        // Load properties from localStorage if not already in memory
        if (!properties || properties.length === 0) {
            const storedProperties = localStorage.getItem('properties');
            if (storedProperties) {
                properties = JSON.parse(storedProperties);
                console.log("Properties loaded in listings:", properties);
            } else {
                console.error("No properties found in localStorage.");
                return; // Exit if no data available
            }
        }
    
        // Apply filters to properties
        const filteredProperties = properties.filter(property => {
            // Filter by campus
            if (selectedCampus && property.campus !== selectedCampus) return false;
    
            // Filter by price range
            const propertyPrice = parseInt(property.perBedroomPrice, 10);
            if ((minPrice && propertyPrice < minPrice) || (maxPrice && propertyPrice > maxPrice)) return false;
    
            // Filter by pricing type
            if (selectedPricingType.length === 1 && property.pricingType !== selectedPricingType[0]) return false;
    
            // Filter by number of beds
            if (selectedBeds && selectedBeds !== "Any") {
                if (selectedBeds === "Studio" && property.beds !== "0") return false;
                if (selectedBeds !== "Studio" && selectedBeds !== "4+" && property.beds !== selectedBeds) return false;
                if (selectedBeds === "4+" && parseInt(property.beds, 10) < 4) return false;
            }
    
            // Filter by number of baths
            if (selectedBaths && selectedBaths !== "Any") {
                if (selectedBaths === "3+" && parseFloat(property.baths) < 3) return false;
                if (selectedBaths !== "3+" && parseFloat(property.baths) !== parseFloat(selectedBaths)) return false;
            }
    
            // Filter by building type
            if (selectedBuildingType.length && !selectedBuildingType.includes(property.buildingType)) return false;
    
            return true;
        });
    
        // Render filtered properties
        renderProperties(filteredProperties);
        // Update the Clear button state
        updateClearButtonState();
}


async function start_page(){
        console.log("starting page");
        const properties = await loadProperties();
        console.log("Load at start: ", properties);
        renderProperties(properties);
        updateClearButtonState();
        addMobileListeners();
        addDesktopListener();
}

console.log("Is this even on??");
document.addEventListener("DOMContentLoaded", function () {
        console.log("DOM fully loaded. Starting page...");
        start_page();
});