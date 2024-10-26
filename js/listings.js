// Sample property data (you can replace this with real data fetched from a backend)
const properties = [
        { 
                id: 1, title: "Saint James Residences", address: "15 Saint James Avenue, Somerville, MA 02144",
                type: "3 Beds", price: "$3,750", distance: "1.2 miles to Medford/Somerville",
                imageUrl: "img/house_1.jpg", datePosted: "2 Weeks Ago", phone: "(781) 123-4567",

                campus: "Medford/Somerville", perBedroomPrice: 1250, pricingType: "Per Unit",
                buildingType: "Apartment", beds: "3", baths: "2", isFavorite: false 

        },
        { 
                id: 2, title: "Chroma Apartments", address: "240 Sidney St, Cambridge, MA 02139",
                type: "Studio - 3 Beds", price: "$3,015 - $26,501", distance: "4 miles to Medford/Somerville",
                imageUrl: "img/house_2.jpg", datePosted: "1 Day Ago", phone: "(617) 234-5678",

                campus: "Boston", perBedroomPrice: 1005, pricingType: "Per Unit", 
                buildingType: "Condo", beds: "3", baths: "2.5", isFavorite: false 
        },
        { 
                id: 3, title: "The Exchange Street Apartments", address: "100-150 Exchange St, Malden, MA 02148",
                type: "Studio - 2 Beds", price: "$2,380 - $3,710", distance: "3.2 miles to Medford/Somerville",
                imageUrl: "img/house_3.png", datePosted: "1 Day Ago", phone: "(857) 345-6789",
                
                campus: "Boston", perBedroomPrice: 1190, pricingType: "Per Bedroom", 
                buildingType: "Duplex", beds: "2", baths: "1.5", isFavorite: false 
        },
        { 
                id: 4, title: "Mason Apartments", address: "101 Mill Rd, Everett, MA 02149",
                type: "Studio - 2 Beds", price: "$2,305 - $4,100", distance: "4.2 miles to Medford/Somerville",
                imageUrl: "img/house_4.jpg", datePosted: "Updated Today", phone: "(339) 456-7890",
                
                campus: "Boston", perBedroomPrice: 1152, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "2", baths: "2", isFavorite: false 
        },
        { 
                id: 5, title: "Yorktown House", address: "114 Yorktown Street, Somerville, MA 02144",
                type: "5 Beds", price: "$6,000", distance: "0.7 miles to Medford/Somerville",
                imageUrl: "img/house_5.png", datePosted: "4 Days Ago", phone: "(978) 567-8901",
                
                campus: "Medford/Somerville", perBedroomPrice: 1200, pricingType: "Per Unit", 
                buildingType: "House", beds: "5", baths: "3", isFavorite: false 
        },
        { 
                id: 6, title: "South Standard Apartments", address: "235 Old Colony Ave, Boston, MA 02127",
                type: "Studio - 3 Beds", price: "$2,590 - $6,320", distance: "8 miles to Medford/Somerville",
                imageUrl: "img/house_6.jpg", datePosted: "1 Day Ago", phone: "(617) 678-9012",
                
                campus: "Boston", perBedroomPrice: 863, pricingType: "Per Unit", 
                buildingType: "Apartment", beds: "3", baths: "2.5", isFavorite: false 
        },
        { 
                id: 7, title: "Chetwynd Place", address: "34 Chetwynd Road, Somerville, MA 02144",
                type: "8 Beds", price: "$10,200", distance: "0.2 miles to Medford/Somerville",
                imageUrl: "img/house_7.png", datePosted: "2 Weeks Ago", phone: "(781) 789-0123",
                
                campus: "Medford/Somerville", perBedroomPrice: 1275, pricingType: "Per Unit", 
                buildingType: "House", beds: "8", baths: "4", isFavorite: false 
        },
        { 
                id: 8, title: "The Horizon", address: "50 Clarendon St, Boston, MA 02116",
                type: "1 - 4 Beds", price: "$2,800 - $7,500", distance: "5 miles to Medford/Somerville",
                imageUrl: "img/house_8.jpg", datePosted: "3 Days Ago", phone: "(857) 890-1234",
                
                campus: "Boston", perBedroomPrice: 700, pricingType: "Per Unit", 
                buildingType: "Condo", beds: "4", baths: "3", isFavorite: false 
        },
        { 
                id: 9, title: "Park View Residences", address: "75 Park St, Somerville, MA 02145",
                type: "2 - 5 Beds", price: "$3,000 - $9,500", distance: "1 mile to Medford/Somerville",
                imageUrl: "img/house_9.png", datePosted: "Updated Today", phone: "(339) 901-2345",
                
                campus: "Medford/Somerville", perBedroomPrice: 1500, pricingType: "Per Unit", 
                buildingType: "Apartment", beds: "5", baths: "3.5", isFavorite: false 
        },
        { 
                id: 10, title: "Mystic River House", address: "200 Mystic Ave, Medford, MA 02155",
                type: "Studio - 2 Beds", price: "$5,500- $8,900", distance: "0.5 miles to Medford/Somerville",
                imageUrl: "img/house_10.jpg", datePosted: "5 Days Ago", phone: "(978) 012-3456",
                
                campus: "Medford/Somerville", perBedroomPrice: 2703, pricingType: "Per Unit", 
                buildingType: "Duplex", beds: "2", baths: "1.5", isFavorite: false 
        },
        { 
                id: 11, title: "Beacon Hill Flats", address: "40 Charles St, Boston, MA 02114",
                type: "1 - 3 Beds", price: "$2,950 - $6,000", distance: "3.5 miles to Medford/Somerville",
                imageUrl: "img/house_11.jpg", datePosted: "2 Days Ago", phone: "(781) 123-9876",
                
                campus: "Boston", perBedroomPrice: 983, pricingType: "Per Unit", 
                buildingType: "Condo", beds: "3", baths: "2", isFavorite: false 
        },
        { 
                id: 12, title: "The Pearl Apartments", address: "55 Pearl St, Cambridge, MA 02139",
                type: "Studio - 2 Beds", price: "$2,750 - $5,250", distance: "2.8 miles to Medford/Somerville",
                imageUrl: "img/house_12.png", datePosted: "1 Week Ago", phone: "(617) 234-6789",
                
                campus: "Boston", perBedroomPrice: 1375, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "2", baths: "1.5", isFavorite: false 
        },
        { 
                id: 13, title: "Millbrook Residences", address: "112 Mill St, Medford, MA 02155",
                type: "1 - 4 Beds", price: "$2,600 - $8,100", distance: "0.8 miles to Medford/Somerville",
                imageUrl: "img/house_13.jpg", datePosted: "Updated Today", phone: "(857) 345-7890",
                
                campus: "Medford/Somerville", perBedroomPrice: 650, pricingType: "Per Unit", 
                buildingType: "Townhouse", beds: "4", baths: "3", isFavorite: false 
        },
        { 
                id: 14, title: "Riverside Lofts", address: "210 River St, Cambridge, MA 02139",
                type: "Studio - 3 Beds", price: "$3,200 - $6,800", distance: "3 miles to Medford/Somerville",
                imageUrl: "img/house_14.jpg", datePosted: "3 Days Ago", phone: "(339) 456-8901",
                
                campus: "Boston", perBedroomPrice: 1067, pricingType: "Per Unit", 
                buildingType: "Triplex", beds: "3", baths: "2", isFavorite: false 
        },
        { 
                id: 15, title: "Elm Square Apartments", address: "30 Elm St, Somerville, MA 02144",
                type: "2 - 4 Beds", price: "$2,900 - $7,200", distance: "1.5 miles to Medford/Somerville",
                imageUrl: "img/house_15.png", datePosted: "4 Days Ago", phone: "(978) 567-9012",
                
                campus: "Medford/Somerville", perBedroomPrice: 1450, pricingType: "Per Unit", 
                buildingType: "Apartment", beds: "4", baths: "2.5", isFavorite: false 
        },
        { 
                id: 16, title: "Medford Mills", address: "75 Riverside Ave, Medford, MA 02155",
                type: "1 - 3 Beds", price: "$2,550 - $5,600", distance: "1 mile to Medford/Somerville",
                imageUrl: "img/house_16.jpg", datePosted: "1 Week Ago", phone: "(781) 678-0123",
                
                campus: "Medford/Somerville", perBedroomPrice: 850, pricingType: "Per Unit", 
                buildingType: "Townhouse", beds: "3", baths: "2", isFavorite: false 
        },
        { 
                id: 17, title: "Highland Terrace", address: "160 Highland Ave, Somerville, MA 02143",
                type: "Studio - 2 Beds", price: "$2,400 - $4,500", distance: "0.9 miles to Medford/Somerville",
                imageUrl: "img/house_17.png", datePosted: "5 Days Ago", phone: "(617) 789-1234",
                
                campus: "Medford/Somerville", perBedroomPrice: 1200, pricingType: "Per Bedroom", 
                buildingType: "Duplex", beds: "2", baths: "1.5", isFavorite: false 
        },
        { 
                id: 18, title: "Broadway Views", address: "270 Broadway, Cambridge, MA 02139",
                type: "1 - 3 Beds", price: "$3,100 - $6,400", distance: "2.5 miles to Medford/Somerville",
                imageUrl: "img/house_18.jpg", datePosted: "2 Days Ago", phone: "(857) 890-2345",
                
                campus: "Boston", perBedroomPrice: 1033, pricingType: "Per Bedroom", 
                buildingType: "Condo", beds: "3", baths: "2", isFavorite: false 
        },
        { 
                id: 19, title: "Columbus Courtyard", address: "85 Columbus Ave, Boston, MA 02116",
                type: "1 - 4 Beds", price: "$2,900 - $9,200", distance: "5.2 miles to Medford/Somerville",
                imageUrl: "img/house_19.png", datePosted: "Updated Today", phone: "(339) 901-3456",
                
                campus: "Boston", perBedroomPrice: 725, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "4", baths: "3", isFavorite: false 
        },
        { 
                id: 20, title: "Summit Place", address: "67 Summit St, Somerville, MA 02143",
                type: "2 - 5 Beds", price: "$3,000 - $8,000", distance: "1.1 miles to Medford/Somerville",
                imageUrl: "img/house_20.png", datePosted: "3 Days Ago", phone: "(978) 012-4567",
                
                campus: "Medford/Somerville", perBedroomPrice: 1500, pricingType: "Per Bedroom", 
                buildingType: "House", beds: "5", baths: "3", isFavorite: false 
        },
        { 
                id: 21, title: "Victory Apartments", address: "22 Victory Rd, Cambridge, MA 02139",
                type: "Studio - 2 Beds", price: "$4,900 - $6,200", distance: "3.1 miles to Medford/Somerville",
                imageUrl: "img/house_21.jpg", datePosted: "6 Days Ago", phone: "(781) 567-8902",
                
                campus: "Boston", perBedroomPrice: 2450, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "2", baths: "1.5", isFavorite: false 
        },
        { 
                id: 22, title: "Central Hub Apartments", address: "78 Central St, Somerville, MA 02143",
                type: "1 - 3 Beds", price: "$3,200 - $6,500", distance: "0.8 miles to Medford/Somerville",
                imageUrl: "img/house_22.jpg", datePosted: "5 Days Ago", phone: "(617) 678-9013",
                
                campus: "Medford/Somerville", perBedroomPrice: 1067, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "3", baths: "2", isFavorite: false 
        },
        { 
                id: 23, title: "Canal Street Lofts", address: "12 Canal St, Boston, MA 02114",
                type: "2 - 4 Beds", price: "$3,400 - $7,800", distance: "4.7 miles to Medford/Somerville",
                imageUrl: "img/house_23.jpg", datePosted: "2 Days Ago", phone: "(857) 789-0124",
                
                campus: "Boston", perBedroomPrice: 1700, pricingType: "Per Unit", 
                buildingType: "Townhouse", beds: "4", baths: "3", isFavorite: false 
        },
        { 
                id: 24, title: "Union Square Flats", address: "5 Union Sq, Somerville, MA 02143",
                type: "Studio - 3 Beds", price: "$7,750 - $10,200", distance: "1.2 miles to Medford/Somerville",
                imageUrl: "img/house_24.png", datePosted: "Updated Today", phone: "(339) 890-1235",
                
                campus: "Medford/Somerville", perBedroomPrice: 2600, pricingType: "Per Bedroom", 
                buildingType: "Triplex", beds: "3", baths: "2", isFavorite: false 
        },
    ];
    
// Function to render the property list
function renderProperties(properties) {
        const propertyList = document.getElementById('property-list');
        propertyList.innerHTML = '';

        properties.forEach(property => {
        const propertyCard = `
                <div class="property-card">
                        <img src="${property.imageUrl}" alt="${property.title}" class="property-image">
                        <div class="property-header">
                                <span class="date-posted">${property.datePosted}</span>
                                <img src="${property.isFavorite ? 'img/full_heart.png' : 'img/base_heart.png'}" 
                                alt="Favorite" class="fav-icon" 
                                onclick="toggleFavorite(this, ${property.id})" /> <!-- Heart icon -->
                        </div>
                        <div class="property-details">
                                <h3 class="property-title">${property.title}</h3>
                                <p class="property-address">${property.address}</p>
                                <p class="property-info">${property.type} | ${property.price}</p>
                                <div class="property-distance">
                                        <img src="img/walk-icon.png" alt="Walk Icon" width="16" height="16"> 
                                        ${property.distance}
                                </div>
                                <div class="property-contact">
                                <div class="contact-btn">Email Property</div>
                                <div class="contact-btn">${property.phone}</div>
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

        if (icon.src.includes('base_heart.png')) {
                icon.src = 'img/full_heart.png';
                if (property) {
                        property.isFavorite = true;
                }
                favoriteCount++;
        } else {
                icon.src = 'img/base_heart.png';
                if (property) {
                        property.isFavorite = false;
                }
        favoriteCount--;
        }
    
        updateFavoriteCount();
}

function updateFavoriteCount() {
        const favoriteCountElement = document.getElementById('favorite-count');
        const favoriteBtn = document.getElementById('favorites-filter-btn');
        const favoriteIcon = document.getElementById('favorites-icon');

        if (favoriteCountElement) {
                favoriteCountElement.textContent = favoriteCount;
        }

        // Enable/disable the favorites button
        if (favoriteCount > 0) {
                favoriteBtn.classList.add('active');
                favoriteBtn.style.cursor = 'pointer';
                if (favoriteIcon) {
                        favoriteIcon.src = 'img/full_heart.png'; // Change to full heart when active
                }

        } else {
                favoriteBtn.classList.remove('active');
                favoriteBtn.style.cursor = 'not-allowed';
                if (favoriteIcon) {
                        favoriteIcon.src = 'img/base_heart.png'; // Revert to base heart when inactive
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
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* OH queestion: How to not make it scroll over the dropdown content once the filter is toggled */
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
        const hasActiveFilter = 
                selectedCampus ||
                minPrice !== null ||
                maxPrice !== null ||
                selectedPricingType.length < 2 ||
                selectedBeds !== null ||
                selectedBaths !== null ||
                selectedBuildingType.length > 0 ||
                favoriteCount !== 0;

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
        const filteredProperties = properties.filter(property => {
                // Filter by campus
                if (selectedCampus && property.campus !== selectedCampus) return false;

                // Filter by price range
                const propertyPrice = parseInt(property.perBedroomPrice);
                if ((minPrice && propertyPrice < minPrice) || (maxPrice && propertyPrice > maxPrice)) return false;

                if (selectedPricingType.length === 1 && property.pricingType !== selectedPricingType[0]) return false;

                // Filter by number of beds
                if (selectedBeds && selectedBeds !== "Any") {
                        if (selectedBeds === "Studio" && property.beds !== "0") return false;
                        if (selectedBeds !== "Studio" && selectedBeds !== "4+" && property.beds !== selectedBeds) return false;
                        if (selectedBeds === "4+" && parseInt(property.beds) < 4) return false;
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
    
        renderProperties(properties);
        updateClearButtonState();
        addMobileListeners();
        addDesktopListener();