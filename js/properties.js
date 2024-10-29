// Load properties from localStorage or use default data
const defaultProperties = [
        { 
                id: 1, title: "Saint James Residences", address: "15 Saint James Avenue, Somerville, MA 02144",
                type: "3 Beds", price: "$3,750", distance: "1.2 miles to Medford/Somerville",
                imageUrl: "img/house_1.jpg", datePosted: "2 Weeks Ago", phone: "(781) 123-4567",
                campus: "Medford/Somerville", perBedroomPrice: 1250, pricingType: "Per Unit",
                buildingType: "Apartment", beds: "3", baths: "2", isFavorite: false,
                utilities: "Included", laundry: "In-unit", furnished: "Fully-furnished",
                transport: "5 min walk to Green Line", pet: "No", wifi: "100Mbps"

        },
        { 
                id: 2, title: "Chroma Apartments", address: "240 Sidney St, Cambridge, MA 02139",
                type: "Studio - 3 Beds", price: "$3,015 - $26,501", distance: "4 miles to Medford/Somerville",
                imageUrl: "img/house_2.jpg", datePosted: "1 Day Ago", phone: "(617) 234-5678",
                campus: "Boston", perBedroomPrice: 1005, pricingType: "Per Unit", 
                buildingType: "Condo", beds: "3", baths: "2.5", isFavorite: false,
                utilities: "Partially Included", laundry: "On-site", furnished: "Partially-furnished",
                transport: "10 min walk to Red Line", pet: "Yes", wifi: "200Mbps"
        },
        { 
                id: 3, title: "The Exchange Street Apartments", address: "100-150 Exchange St, Malden, MA 02148",
                type: "Studio - 2 Beds", price: "$2,380 - $3,710", distance: "3.2 miles to Medford/Somerville",
                imageUrl: "img/house_3.jpg", datePosted: "1 Day Ago", phone: "(857) 345-6789",
                campus: "Boston", perBedroomPrice: 1190, pricingType: "Per Bedroom", 
                buildingType: "Duplex", beds: "2", baths: "1.5", isFavorite: false,
                utilities: "Not Included", laundry: "In-unit", furnished: "Unfurnished",
                transport: "8 min walk to Orange Line", pet: "Yes", wifi: "150Mbps"
        },
        { 
                id: 4, title: "Mason Apartments", address: "101 Mill Rd, Everett, MA 02149",
                type: "Studio - 2 Beds", price: "$2,305 - $4,100", distance: "4.2 miles to Medford/Somerville",
                imageUrl: "img/house_4.jpg", datePosted: "Updated Today", phone: "(339) 456-7890",
                campus: "Boston", perBedroomPrice: 1152, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "2", baths: "2", isFavorite: false,
                utilities: "Included", laundry: "In-unit", furnished: "Fully-furnished",
                transport: "3 min walk to bus stop", pet: "No", wifi: "250Mbps" 
        },
        { 
                id: 5, title: "Yorktown House", address: "114 Yorktown Street, Somerville, MA 02144",
                type: "5 Beds", price: "$6,000", distance: "0.7 miles to Medford/Somerville",
                imageUrl: "img/house_5.jpg", datePosted: "4 Days Ago", phone: "(978) 567-8901",
                campus: "Medford/Somerville", perBedroomPrice: 1200, pricingType: "Per Unit", 
                buildingType: "House", beds: "5", baths: "3", isFavorite: false,
                utilities: "Not Included", laundry: "Washer/Dryer Hookup", furnished: "Fully-furnished",
                transport: "2 min walk to bus stop", pet: "Yes", wifi: "500Mbps" 
        },
        { 
                id: 6, title: "South Standard Apartments", address: "235 Old Colony Ave, Boston, MA 02127",
                type: "Studio - 3 Beds", price: "$2,590 - $6,320", distance: "8 miles to Medford/Somerville",
                imageUrl: "img/house_6.jpg", datePosted: "1 Day Ago", phone: "(617) 678-9012",
                campus: "Boston", perBedroomPrice: 863, pricingType: "Per Unit", 
                buildingType: "Apartment", beds: "3", baths: "2.5", isFavorite: false,
                utilities: "Not Included", laundry: "On-site", furnished: "Partially-furnished",
                transport: "10 min walk to Red Line", pet: "Yes", wifi: "200Mbps"
        },
        { 
                id: 7, title: "Chetwynd Place", address: "34 Chetwynd Road, Somerville, MA 02144",
                type: "8 Beds", price: "$10,200", distance: "0.2 miles to Medford/Somerville",
                imageUrl: "img/house_7.jpg", datePosted: "2 Weeks Ago", phone: "(781) 789-0123",
                campus: "Medford/Somerville", perBedroomPrice: 1275, pricingType: "Per Unit", 
                buildingType: "House", beds: "8", baths: "4", isFavorite: false,
                utilities: "Included", laundry: "Washer/Dryer Hookup", furnished: "Fully-furnished",
                transport: "2 min walk to Green Line", pet: "Yes", wifi: "500Mbps"
        },
        { 
                id: 8, title: "The Horizon", address: "50 Clarendon St, Boston, MA 02116",
                type: "1 - 4 Beds", price: "$2,800 - $7,500", distance: "5 miles to Medford/Somerville",
                imageUrl: "img/house_8.jpg", datePosted: "3 Days Ago", phone: "(857) 890-1234",
                campus: "Boston", perBedroomPrice: 700, pricingType: "Per Unit", 
                buildingType: "Condo", beds: "4", baths: "3", isFavorite: false,
                utilities: "Not Included", laundry: "In-unit", furnished: "Unfurnished",
                transport: "15 min walk to Orange Line", pet: "No", wifi: "150Mbps"
        },
        { 
                id: 9, title: "Park View Residences", address: "75 Park St, Somerville, MA 02145",
                type: "2 - 5 Beds", price: "$3,000 - $9,500", distance: "1 mile to Medford/Somerville",
                imageUrl: "img/house_9.jpg", datePosted: "Updated Today", phone: "(339) 901-2345",
                campus: "Medford/Somerville", perBedroomPrice: 1500, pricingType: "Per Unit", 
                buildingType: "Apartment", beds: "5", baths: "3.5", isFavorite: false,
                utilities: "Included", laundry: "On-site", furnished: "Fully-furnished",
                transport: "5 min walk to Green Line", pet: "No", wifi: "300Mbps"
        },
        { 
                id: 10, title: "Mystic River House", address: "200 Mystic Ave, Medford, MA 02155",
                type: "Studio - 2 Beds", price: "$5,500 - $8,900", distance: "0.5 miles to Medford/Somerville",
                imageUrl: "img/house_10.jpg", datePosted: "5 Days Ago", phone: "(978) 012-3456",
                campus: "Medford/Somerville", perBedroomPrice: 2703, pricingType: "Per Unit", 
                buildingType: "Duplex", beds: "2", baths: "1.5", isFavorite: false,
                utilities: "Not Included", laundry: "In-unit", furnished: "Partially-furnished",
                transport: "3 min walk to bus stop", pet: "Yes", wifi: "250Mbps"
        },
        { 
                id: 11, title: "Beacon Hill Flats", address: "40 Charles St, Boston, MA 02114",
                type: "1 - 3 Beds", price: "$2,950 - $6,000", distance: "3.5 miles to Medford/Somerville",
                imageUrl: "img/house_11.jpg", datePosted: "2 Days Ago", phone: "(781) 123-9876",
                campus: "Boston", perBedroomPrice: 983, pricingType: "Per Unit", 
                buildingType: "Condo", beds: "3", baths: "2", isFavorite: false,
                utilities: "Partially Included", laundry: "On-site", furnished: "Fully-furnished",
                transport: "7 min walk to Red Line", pet: "No", wifi: "100Mbps"
        },
        { 
                id: 12, title: "The Pearl Apartments", address: "55 Pearl St, Cambridge, MA 02139",
                type: "Studio - 2 Beds", price: "$2,750 - $5,250", distance: "2.8 miles to Medford/Somerville",
                imageUrl: "img/house_12.jpg", datePosted: "1 Week Ago", phone: "(617) 234-6789",
                campus: "Boston", perBedroomPrice: 1375, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "2", baths: "1.5", isFavorite: false,
                utilities: "Not Included", laundry: "In-unit", furnished: "Partially-furnished",
                transport: "12 min walk to bus stop", pet: "Yes", wifi: "150Mbps"
        },
        { 
                id: 13, title: "Millbrook Residences", address: "112 Mill St, Medford, MA 02155",
                type: "1 - 4 Beds", price: "$2,600 - $8,100", distance: "0.8 miles to Medford/Somerville",
                imageUrl: "img/house_13.jpg", datePosted: "Updated Today", phone: "(857) 345-7890",
                campus: "Medford/Somerville", perBedroomPrice: 650, pricingType: "Per Unit", 
                buildingType: "Townhouse", beds: "4", baths: "3", isFavorite: false,
                utilities: "Included", laundry: "Washer/Dryer Hookup", furnished: "Fully-furnished",
                transport: "5 min walk to bus stop", pet: "Yes", wifi: "300Mbps"
        },
        { 
                id: 14, title: "Riverside Lofts", address: "210 River St, Cambridge, MA 02139",
                type: "Studio - 3 Beds", price: "$3,200 - $6,800", distance: "3 miles to Medford/Somerville",
                imageUrl: "img/house_14.jpg", datePosted: "3 Days Ago", phone: "(339) 456-8901",
                campus: "Boston", perBedroomPrice: 1067, pricingType: "Per Unit", 
                buildingType: "Triplex", beds: "3", baths: "2", isFavorite: false,
                utilities: "Partially Included", laundry: "On-site", furnished: "Unfurnished",
                transport: "8 min walk to Green Line", pet: "No", wifi: "250Mbps"
        },
        { 
                id: 15, title: "Elm Square Apartments", address: "30 Elm St, Somerville, MA 02144",
                type: "2 - 4 Beds", price: "$2,900 - $7,200", distance: "1.5 miles to Medford/Somerville",
                imageUrl: "img/house_15.jpg", datePosted: "4 Days Ago", phone: "(978) 567-9012",
                campus: "Medford/Somerville", perBedroomPrice: 1450, pricingType: "Per Unit", 
                buildingType: "Apartment", beds: "4", baths: "2.5", isFavorite: false,
                utilities: "Included", laundry: "In-unit", furnished: "Fully-furnished",
                transport: "6 min walk to bus stop", pet: "No", wifi: "200Mbps"
        },
        { 
                id: 16, title: "Medford Mills", address: "75 Riverside Ave, Medford, MA 02155",
                type: "1 - 3 Beds", price: "$2,550 - $5,600", distance: "1 mile to Medford/Somerville",
                imageUrl: "img/house_16.jpg", datePosted: "1 Week Ago", phone: "(781) 678-0123",
                campus: "Medford/Somerville", perBedroomPrice: 850, pricingType: "Per Unit", 
                buildingType: "Townhouse", beds: "3", baths: "2", isFavorite: false,
                utilities: "Not Included", laundry: "On-site", furnished: "Partially-furnished",
                transport: "10 min walk to Green Line", pet: "Yes", wifi: "100Mbps"
        },
        { 
                id: 17, title: "Highland Terrace", address: "160 Highland Ave, Somerville, MA 02143",
                type: "Studio - 2 Beds", price: "$2,400 - $4,500", distance: "0.9 miles to Medford/Somerville",
                imageUrl: "img/house_17.jpg", datePosted: "5 Days Ago", phone: "(617) 789-1234",
                campus: "Medford/Somerville", perBedroomPrice: 1200, pricingType: "Per Bedroom", 
                buildingType: "Duplex", beds: "2", baths: "1.5", isFavorite: false,
                utilities: "Partially Included", laundry: "In-unit", furnished: "Unfurnished",
                transport: "5 min walk to Orange Line", pet: "No", wifi: "150Mbps"
        },
        { 
                id: 18, title: "Broadway Views", address: "270 Broadway, Cambridge, MA 02139",
                type: "1 - 3 Beds", price: "$3,100 - $6,400", distance: "2.5 miles to Medford/Somerville",
                imageUrl: "img/house_18.jpg", datePosted: "2 Days Ago", phone: "(857) 890-2345",
                campus: "Boston", perBedroomPrice: 1033, pricingType: "Per Bedroom", 
                buildingType: "Condo", beds: "3", baths: "2", isFavorite: false,
                utilities: "Not Included", laundry: "On-site", furnished: "Partially-furnished",
                transport: "8 min walk to Green Line", pet: "Yes", wifi: "200Mbps"
        },
        { 
                id: 19, title: "Columbus Courtyard", address: "85 Columbus Ave, Boston, MA 02116",
                type: "1 - 4 Beds", price: "$2,900 - $9,200", distance: "5.2 miles to Medford/Somerville",
                imageUrl: "img/house_19.jpg", datePosted: "Updated Today", phone: "(339) 901-3456",
                campus: "Boston", perBedroomPrice: 725, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "4", baths: "3", isFavorite: false,
                utilities: "Included", laundry: "In-unit", furnished: "Fully-furnished",
                transport: "12 min walk to Red Line", pet: "No", wifi: "300Mbps"
        },
        { 
                id: 20, title: "Summit Place", address: "67 Summit St, Somerville, MA 02143",
                type: "2 - 5 Beds", price: "$3,000 - $8,000", distance: "1.1 miles to Medford/Somerville",
                imageUrl: "img/house_20.jpg", datePosted: "3 Days Ago", phone: "(978) 012-4567",
                campus: "Medford/Somerville", perBedroomPrice: 1500, pricingType: "Per Bedroom", 
                buildingType: "House", beds: "5", baths: "3", isFavorite: false,
                utilities: "Not Included", laundry: "Washer/Dryer Hookup", furnished: "Fully-furnished",
                transport: "3 min walk to bus stop", pet: "Yes", wifi: "500Mbps"
        },
        { 
                id: 21, title: "Victory Apartments", address: "22 Victory Rd, Cambridge, MA 02139",
                type: "Studio - 2 Beds", price: "$4,900 - $6,200", distance: "3.1 miles to Medford/Somerville",
                imageUrl: "img/house_21.jpg", datePosted: "6 Days Ago", phone: "(781) 567-8902",
                campus: "Boston", perBedroomPrice: 2450, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "2", baths: "1.5", isFavorite: false,
                utilities: "Included", laundry: "On-site", furnished: "Partially-furnished",
                transport: "6 min walk to Orange Line", pet: "No", wifi: "150Mbps"
        },
        { 
                id: 22, title: "Central Hub Apartments", address: "78 Central St, Somerville, MA 02143",
                type: "1 - 3 Beds", price: "$3,200 - $6,500", distance: "0.8 miles to Medford/Somerville",
                imageUrl: "img/house_22.jpg", datePosted: "5 Days Ago", phone: "(617) 678-9013",
                campus: "Medford/Somerville", perBedroomPrice: 1067, pricingType: "Per Bedroom", 
                buildingType: "Apartment", beds: "3", baths: "2", isFavorite: false,
                utilities: "Not Included", laundry: "Washer/Dryer Hookup", furnished: "Fully-furnished",
                transport: "4 min walk to Green Line", pet: "Yes", wifi: "250Mbps"
        },
        { 
                id: 23, title: "Canal Street Lofts", address: "12 Canal St, Boston, MA 02114",
                type: "2 - 4 Beds", price: "$3,400 - $7,800", distance: "4.7 miles to Medford/Somerville",
                imageUrl: "img/house_23.jpg", datePosted: "2 Days Ago", phone: "(857) 789-0124",
                campus: "Boston", perBedroomPrice: 1700, pricingType: "Per Unit", 
                buildingType: "Townhouse", beds: "4", baths: "3", isFavorite: false,
                utilities: "Included", laundry: "On-site", furnished: "Partially-furnished",
                transport: "9 min walk to bus stop", pet: "No", wifi: "300Mbps"
        },
        { 
                id: 24, title: "Union Square Flats", address: "5 Union Sq, Somerville, MA 02143",
                type: "Studio - 3 Beds", price: "$7,750 - $10,200", distance: "1.2 miles to Medford/Somerville",
                imageUrl: "img/house_24.jpg", datePosted: "Updated Today", phone: "(339) 890-1235",
                campus: "Medford/Somerville", perBedroomPrice: 2600, pricingType: "Per Bedroom", 
                buildingType: "Triplex", beds: "3", baths: "2", isFavorite: false,
                utilities: "Not Included", laundry: "In-unit", furnished: "Fully-furnished",
                transport: "6 min walk to Green Line", pet: "Yes", wifi: "500Mbps"
        }
];

// Load properties from localStorage or use default data
function loadProperties() {
        const storedProperties = localStorage.getItem('properties');
        return storedProperties ? JSON.parse(storedProperties) : defaultProperties;
}

// Save the current properties list to localStorage
function savePropertiesToLocalStorage() {
        localStorage.setItem('properties', JSON.stringify(properties));
}

// Initialize properties from localStorage
let properties = loadProperties();