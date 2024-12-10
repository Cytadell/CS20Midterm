async function loadProperties() {
    try {
        const response = await fetch('backend/getProperties.php');
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
    
    function savePropertiesToLocalStorage() {
        localStorage.setItem('properties', JSON.stringify(properties));
    }
    
   
    let properties = [];
    loadProperties().then(data => {
        properties = data;
        console.log("Properties loaded:", properties);
        savePropertiesToLocalStorage();
    });