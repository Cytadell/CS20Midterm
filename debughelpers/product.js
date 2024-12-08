function loadPropertyDetails(properties) {
        const urlParams = new URLSearchParams(window.location.search);
        const propertyId = urlParams.get('id'); // Leave as string for comparison
        console.log("Property ID from URL:", propertyId);
    
        const property = properties.find(p => p.id === propertyId);
        console.log("Found Property:", property);
    
        if (!property) {
            document.getElementById('property-details-container').innerText = 'Property not found.';
            return;
        }
    
        document.getElementById('property-details-container').innerHTML = `
            <div class="property-image-container">
                <img src="${property.imageUrl || 'img/default_image.png'}" alt="${property.title}" class="property-main-image">
            </div>
            <div class="property-info-container">
                <h1 class="property-title">${property.title}</h1>
                <p class="property-address"><strong>Address:</strong> ${property.address}</p>
                <div class="property-info-columns">
                    <div class="property-info-left">
                        <p class="property-info"><strong>Price:</strong> ${property.price}</p>
                        <p class="property-info"><strong>Beds:</strong> ${property.beds}</p>
                        <p class="property-info"><strong>Baths:</strong> ${property.baths}</p>
                        <p class="property-info"><strong>Type:</strong> ${property.buildingType}</p>
                        <p class="property-info"><strong>Campus:</strong> ${property.campus}</p>
                        <p class="property-info"><strong>Contact:</strong> ${property.phone}</p>
                    </div>
                    <div class="property-info-right">
                        <p class="property-info"><strong>Utilities:</strong> ${property.utilities}</p>
                        <p class="property-info"><strong>Laundry:</strong> ${property.laundry}</p>
                        <p class="property-info"><strong>Furnished:</strong> ${property.furnished}</p>
                        <p class="property-info"><strong>Transport:</strong> ${property.transport}</p>
                        <p class="property-info"><strong>Pet-Friendly:</strong> ${property.pet}</p>
                        <p class="property-info"><strong>WiFi Speed:</strong> ${property.wifi}</p>
                    </div>
                </div>
                <div class="property-contact">
                    <a href="contactus.html" class="contact-btn">Contact Us</a>
                    <div class="favorites-btn" onclick="toggleFavoriteButton(this, property, properties)">
                        <img src="${property.isFavorite ? 'img/full_heart.png' : 'img/base_heart.png'}" alt="Favorites" class="favorites-icon">
                        <span class="favorites-text">${property.isFavorite ? 'Added to Favorites' : 'Add to Favorites'}</span>
                    </div>
                </div>
            </div>
        `;
}    

function toggleFavoriteButton(button) {
        const icon = button.querySelector('.favorites-icon');
        const text = button.querySelector('.favorites-text');
        const isFavorited = !property.isFavorite;

        if (isFavorited) {
                // Add to favorites
                icon.src = 'img/full_heart.png';
                text.textContent = 'Added to Favorites';
                button.classList.add('favorited');

                // Update the property object and save to localStorage
                property.isFavorite = true;
        } else {
                // Remove from favorites
                icon.src = 'img/base_heart.png';
                text.textContent = 'Add to Favorites';
                button.classList.remove('favorited');

                // Update the property object and save to localStorage
                property.isFavorite = false;
        }

        // Update the properties array and save to localStorage
        const propertyIndex = properties.findIndex(p => p.id === property.id);
        if (propertyIndex !== -1) {
                properties[propertyIndex] = property;
        }
        // Save changes to localStorage
        savePropertiesToLocalStorage();
        updateClearButtonState();
}


// Navigate back to the Referring page
function goBack() {
        const referrer = document.referrer;
        if (referrer.includes('listings.html') || referrer.includes('OurHouses.html')) {
                window.location.href = referrer;
        } else {
                window.location.href = 'listings.html';
        }
}

async function start_page() {
        console.log("Starting page...");
        console.log("Fetching properties from the server...");
        const properties = await loadProperties();
        console.log("Fetched properties:", properties);
    
        loadPropertyDetails(properties);
    }

document.addEventListener("DOMContentLoaded", start_page);
