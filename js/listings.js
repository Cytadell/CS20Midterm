// Sample property data (you can replace this with real data fetched from a backend)
const properties = [
        { 
                id: 1, title: "Saint James Residences", address: "15 Saint James Avenue, Somerville, MA 02144",
                type: "3 Beds", price: "$3,750", distance: "1.2 miles to Medford/Somerville",
                imageUrl: "img/house_1.jpg", datePosted: "2 Weeks Ago"
        },
        { 
                id: 2, title: "Chroma Apartments", address: "240 Sidney St, Cambridge, MA 02139",
                type: "Studio - 3 Beds", price: "$3,015 - $26,501", distance: "4 miles to Medford/Somerville",
                imageUrl: "img/house_2.jpg", datePosted: "1 Day Ago"
        },
        { 
                id: 3, title: "The Exchange Street Apartments", address: "100-150 Exchange St, Malden, MA 02148",
                type: "Studio - 2 Beds", price: "$2,380 - $3,710", distance: "3.2 miles to Medford/Somerville",
                imageUrl: "img/house_3.png", datePosted: "1 Day Ago"
        },
        { 
                id: 4, title: "Mason Apartments", address: "101 Mill Rd, Everett, MA 02149",
                type: "Studio - 2 Beds", price: "$2,305 - $4,100", distance: "4.2 miles to Medford/Somerville",
                imageUrl: "img/house_4.jpg", datePosted: "Updated Today"
        },
        { 
                id: 5, title: "Yorktown House", address: "114 Yorktown Street, Somerville, MA 02144",
                type: "5 Beds", price: "$6,000", distance: "0.7 miles to Medford/Somerville",
                imageUrl: "img/house_5.png", datePosted: "4 Days Ago"
        },
        { 
                id: 6, title: "South Standard Apartments", address: "235 Old Colony Ave, Boston, MA 02127",
                type: "Studio - 3 Beds", price: "$2,590 - $6,320", distance: "8 miles to Medford/Somerville",
                imageUrl: "img/house_6.jpg", datePosted: "1 Day Ago"
        },
        { 
                id: 7, title: "Chetwynd Place", address: "34 Chetwynd Road, Somerville, MA 02144",
                type: "8 Beds", price: "$10,200", distance: "0.2 miles to Medford/Somerville",
                imageUrl: "img/house_7.png", datePosted: "2 Weeks Ago"
        },
        { 
                id: 8, title: "The Horizon", address: "50 Clarendon St, Boston, MA 02116",
                type: "1 - 4 Beds", price: "$2,800 - $7,500", distance: "5 miles to Medford/Somerville",
                imageUrl: "img/house_8.jpg", datePosted: "3 Days Ago"
        },
        { 
                id: 9, title: "Park View Residences", address: "75 Park St, Somerville, MA 02145",
                type: "2 - 5 Beds", price: "$3,000 - $9,500", distance: "1 mile to Medford/Somerville",
                imageUrl: "img/house_9.png", datePosted: "Updated Today"
        },
        { 
                id: 10, title: "Mystic River House", address: "200 Mystic Ave, Medford, MA 02155",
                type: "Studio - 2 Beds", price: "$2,400 - $3,900", distance: "0.5 miles to Medford/Somerville",
                imageUrl: "img/house_10.jpg", datePosted: "5 Days Ago"
        },
        { 
                id: 11, title: "Beacon Hill Flats", address: "40 Charles St, Boston, MA 02114",
                type: "1 - 3 Beds", price: "$2,950 - $6,000", distance: "3.5 miles to Medford/Somerville",
                imageUrl: "img/house_11.jpg", datePosted: "2 Days Ago"
        },
        { 
                id: 12, title: "The Pearl Apartments", address: "55 Pearl St, Cambridge, MA 02139",
                type: "Studio - 2 Beds", price: "$2,750 - $5,250", distance: "2.8 miles to Medford/Somerville",
                imageUrl: "img/house_12.png", datePosted: "1 Week Ago"
        },
        { 
                id: 13, title: "Millbrook Residences", address: "112 Mill St, Medford, MA 02155",
                type: "1 - 4 Beds", price: "$2,600 - $8,100", distance: "0.8 miles to Medford/Somerville",
                imageUrl: "img/house_13.jpg", datePosted: "Updated Today"
        },
        { 
                id: 14, title: "Riverside Lofts", address: "210 River St, Cambridge, MA 02139",
                type: "Studio - 3 Beds", price: "$3,200 - $6,800", distance: "3 miles to Medford/Somerville",
                imageUrl: "img/house_14.jpg", datePosted: "3 Days Ago"
        },
        { 
                id: 15, title: "Elm Square Apartments", address: "30 Elm St, Somerville, MA 02144",
                type: "2 - 4 Beds", price: "$2,900 - $7,200", distance: "1.5 miles to Medford/Somerville",
                imageUrl: "img/house_15.png", datePosted: "4 Days Ago"
        },
        { 
                id: 16, title: "Medford Mills", address: "75 Riverside Ave, Medford, MA 02155",
                type: "1 - 3 Beds", price: "$2,550 - $5,600", distance: "1 mile to Medford/Somerville",
                imageUrl: "img/house_16.jpg", datePosted: "1 Week Ago"
        },
        { 
                id: 17, title: "Highland Terrace", address: "160 Highland Ave, Somerville, MA 02143",
                type: "Studio - 2 Beds", price: "$2,400 - $4,500", distance: "0.9 miles to Medford/Somerville",
                imageUrl: "img/house_17.png", datePosted: "5 Days Ago"
        },
        { 
                id: 18, title: "Broadway Views", address: "270 Broadway, Cambridge, MA 02139",
                type: "1 - 3 Beds", price: "$3,100 - $6,400", distance: "2.5 miles to Medford/Somerville",
                imageUrl: "img/house_18.jpg", datePosted: "2 Days Ago"
        },
        { 
                id: 19, title: "Columbus Courtyard", address: "85 Columbus Ave, Boston, MA 02116",
                type: "1 - 4 Beds", price: "$2,900 - $9,200", distance: "5.2 miles to Medford/Somerville",
                imageUrl: "img/house_19.png", datePosted: "Updated Today"
        },
        { 
                id: 20, title: "Summit Place", address: "67 Summit St, Somerville, MA 02143",
                type: "2 - 5 Beds", price: "$3,000 - $8,000", distance: "1.1 miles to Medford/Somerville",
                imageUrl: "img/house_20.png", datePosted: "3 Days Ago"
        }
];
function renderProperties(properties) {
        const propertyList = document.getElementById('property-list');
        propertyList.innerHTML = '';
    
        properties.forEach(property => {
                const propertyCard = `
                <div class="property-card">
                <img src="${property.imageUrl}" alt="${property.title}" class="property-image">
                <div class="property-header">
                    <span class="date-posted">${property.datePosted}</span>
                    <img src="img/base_heart.png" alt="Favorite" class="fav-icon" 

                             onclick="toggleFavorite(this)" /> <!-- Heart icon -->
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
                            <div class="contact-btn">(855) 571-7653</div>
                        </div>
                    </div>
                </div>
            `;
            propertyList.innerHTML += propertyCard;
        });
    }
    
    function toggleFavorite(icon) {
        if (icon.src.includes('base_heart.png')) {
            icon.src = 'img/full_heart.png';
        } else {
            icon.src = 'img/base_heart.png';
        }
    }
    
    renderProperties(properties);