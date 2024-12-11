<?php include 'header.php'; ?>
<!DOCTYPE html>
<html lang="en">
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JumboSpace: My Account</title>
    <link rel="stylesheet" href="css/listings.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            height: 100vh;
            background-color: #f4f4f9;
        }

        .account-page {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 20px;
            box-sizing: border-box;
            background: white;
        }

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 10px 0;
            border-bottom: 1px solid #ddd;
        }

        .profile-pic {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: #e0e0e0;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 24px;
            color: #888;
        }

        .user-info {
            margin-left: 10px;
        }

        .name {

        }

        .email {

        }

        .user-info h3 {
            margin: 0;
            font-size: 18px;
        }

        .user-info p {
            margin: 0;
            font-size: 14px;
            color: #666;
        }

        .change-email {
            padding: 8px 12px;
            font-size: 14px;
            background: #007bff;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }

        .change-email:hover {
            background: #0056b3;
        }

        .favorites, .listings, .applications {
            flex: 1;
            margin-top: 20px;
        }

        .section-title {
            font-size: 16px;
            margin-bottom: 10px;
        }

        .items {
            width: 100%;
            display: flex;
            gap: 10px;
            overflow-x: auto;
        }

        /* .item {
            width: 60px;
            height: 60px;
            background: #e0e0e0;
            border-radius: 4px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 12px;
            color: #888;
        } */

        @media (max-width: 768px) {
            .account-page {
                padding: 10px;
            }
        }
    </style>
</head>
<body>
    <script src="js/timestamp.js" defer></script>
    <div id="navbar-placeholder"></div>
    
    <div class="account-page">
        <div class="header">
            <div class="profile-pic">👤</div>
            <div class="user-info">
                <h3 class="name">Name</h3>
                <p class="email">Email</p>
            </div>
            <button class="change-email">Change Email</button>
        </div>
        
        <div class="favorites">
            <div class="section-title">Favorites</div>
            <div class="items">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">5</div>
            </div>
        </div>

        <div class="listings">
            <div class="section-title">Listings</div>
            <div class="items">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">5</div>
            </div>
        </div>

        <div class="applications">
            <div class="section-title">Applications</div>
            <div class="items">
                <div class="item">1</div>
                <div class="item">2</div>
                <div class="item">3</div>
                <div class="item">4</div>
                <div class="item">5</div>
            </div>
        </div>
    </div>
</body>

<script>
    async function loadUserHeader() {
        try {
            const [responseName, responseSurname, responseEmail] = await Promise.all([
                fetch('/!JUMBOSPACE!/backend/getUserData.php?type=name'),
                fetch('/!JUMBOSPACE!/backend/getUserData.php?type=surname'),
                fetch('/!JUMBOSPACE!/backend/getUserData.php?type=email')
            ]);

            if (!responseName.ok || !responseSurname.ok) {
                throw new Error(`Error fetching user data: 
                    Name status: ${responseName.status}, 
                    Surname status: ${responseSurname.status},
                    Email status: ${responseEmail.status}`);
            }

            const nameData = await responseName.json();
            const surnameData = await responseSurname.json();
            const emailData = await responseEmail.json();
            return { nameData, surnameData, emailData };
        } catch (error) {
            console.error("Error fetching user info: ", error);
            return null;
        }
    }

    async function loadProperties() {
        try {
            const response = await fetch('/!JUMBOSPACE!/backend/getProperties.php');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            localStorage.setItem('properties', JSON.stringify(data));
            return data;
        } catch (error) {
            console.error("Error fetching properties:", error);
            return []; // Return an empty array if there’s an error
        }
    }
    
    async function getUserData(type) {
        try {
            const response = await fetch(`/!JUMBOSPACE!/backend/getUserData.php?type=${type}`);
            if (!response.ok) throw new Error(`Failed to fetch ${type} property IDs`);
            return await response.json();
        } catch (error) {
            console.error(`Error fetching ${type} property IDs:`, error);
            return [];
        }
    }
    
    let properties = [];
    let likedids = [];
    let appliedids = [];
    let listedids = [];
    
    // Load all properties
    const loadPropertiesPromise = loadProperties().then(data => {
        properties = data;
        console.log("Properties loaded:", properties);
    });
    
    // Load liked, applied, and listed property IDs
    const getLikedPropertyIdsPromise = getUserData('liked').then(data => {
        likedids = data.map(id => Number(id.property_id)); // Ensure IDs are numbers
        console.log("Liked IDs loaded:", likedids);
    });
    const getAppliedPropertyIdsPromise = getUserData('applied').then(data => {
        appliedids = data.map(id => Number(id.property_id)); // Ensure IDs are numbers
        console.log("Applied IDs loaded:", appliedids);
    });
    const getListedPropertyIdsPromise = getUserData('listed').then(data => {
        listedids = data.map(id => Number(id.property_id)); // Ensure IDs are numbers
        console.log("Listed IDs loaded:", listedids);
    });
    
    Promise.all([loadPropertiesPromise, getLikedPropertyIdsPromise, getAppliedPropertyIdsPromise, getListedPropertyIdsPromise])
        .then(() => {
            // Filter properties based on IDs
            const likedProperties = properties.filter(property =>
                likedids.includes(Number(property.id))
            );
            const appliedProperties = properties.filter(property =>
                appliedids.includes(Number(property.id))
            );
            const listedProperties = properties.filter(property =>
                listedids.includes(Number(property.id))
            );
    
            console.log("Filtered Liked Properties:", likedProperties);
            console.log("Filtered Applied Properties:", appliedProperties);
            console.log("Filtered Listed Properties:", listedProperties);

            renderUserHeader();
    
            // Render properties in their respective sections
            renderProperties(likedProperties, '.favorites .items', 'Liked Properties');
            renderProperties(appliedProperties, '.applications .items', 'Applied Properties');
            renderProperties(listedProperties, '.listings .items', 'Listed Properties');
        })
        .catch(error => {
            console.error("Error loading properties or property IDs:", error);
        });

    async function renderUserHeader() {
        try {
            const nameSection = document.querySelector('.name');
            const emailSection = document.querySelector('.email');

            const { nameData, surnameData, emailData } = await loadUserHeader();

            nameSection.innerHTML = `${nameData} ${surnameData}`;
            emailSection.innerHTML = emailData;
        } catch (error) {
            console.error('Error rendering user header:', error);
        }
    }

    
    // Function to render properties
    function renderProperties(properties, selector, title) {
        const section = document.querySelector(selector);
        section.innerHTML = ''; // Clear previous content
    
        if (properties.length === 0) {
            section.innerHTML = `<p>No ${title.toLowerCase()} found.</p>`;
            return;
        }
    
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
                             onclick="toggleFavorite(this, ${property.id})" />
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
                            <a href="mailto:emailproperty@example.com" class="contact-btn">Email Property</a>
                            <a href="contactus.html" class="contact-btn">Contact Us</a>
                        </div>
                    </div>
                </div>
            `;
            section.innerHTML += propertyCard;
        });
    }
    </script>
</html>
    