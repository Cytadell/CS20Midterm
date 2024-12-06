// Load properties from the server or use default data
async function loadProperties() {
        try {
            // Fetch properties from the PHP backend
            const response = await fetch('getProperties.php');
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const properties = await response.json();
            return properties; // Return the data fetched from the backend
        } catch (error) {
            console.error("Error fetching properties:", error);
            return defaultProperties; // Fallback to default properties in case of an error
        }
    }
    
    // Save the current properties list to localStorage
    function savePropertiesToLocalStorage() {
        localStorage.setItem('properties', JSON.stringify(properties));
    }
    
    // Initialize properties from the server
    let properties = [];
    loadProperties().then(data => {
        properties = data;
        console.log("Properties loaded:", properties);
        savePropertiesToLocalStorage(); // Optionally save to localStorage for offline use
    });
    