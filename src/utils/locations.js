// Geographic coordinates for Hong Kong businesses
export const BUSINESS_LOCATIONS = {
  'hotel-icon': {
    lat: 22.300800,
    lng: 114.179736,
    address: '17 Science Museum Road, Tsim Sha Tsui East, Kowloon'
  },
  'four-seasons-hk': {
    lat: 22.286466,
    lng: 114.156677,
    address: '8 Finance Street, Central'
  },
  'peninsula-hk': {
    lat: 22.295127,
    lng: 114.171783,
    address: 'Salisbury Road, Tsim Sha Tsui, Kowloon'
  },
  'rosewood-hk': {
    lat: 22.294668,
    lng: 114.175793,
    address: '18 Salisbury Road, Tsim Sha Tsui, Kowloon'
  },
  'ovolo-hotels': [
    {
      lat: 22.248677,
      lng: 114.149119,
      address: 'Ovolo Southside - 64 Wong Chuk Hang Road'
    },
    {
      lat: 22.249630,
      lng: 114.169093,
      address: 'Ovolo Aberdeen Harbour - 43 Heung Yip Road, Aberdeen'
    },
    {
      lat: 22.280263,
      lng: 114.154641,
      address: 'Ovolo Central - 2 Arbuthnot Road, Central'
    },
    {
      lat: 22.284624,
      lng: 114.150605,
      address: 'Ovolo 2 Arbuthnot Road, Central'
    }
  ],
  'nina-hotel': {
    lat: 22.368541,
    lng: 114.113384,
    address: '8 Yeung Uk Road, Tsuen Wan, New Territories'
  },
  'amber-restaurant': {
    lat: 22.279427,
    lng: 114.192391,
    address: '7/F, The Landmark Mandarin Oriental, 15 Queen\'s Road Central'
  },
  'roganic-restaurant': {
    lat: 22.278509,
    lng: 114.184682,
    address: 'UG/F, Causeway Bay Plaza 2, 463-483 Lockhart Road, Causeway Bay'
  },
  'mono-restaurant': {
    lat: 22.280623,
    lng: 114.156682,
    address: 'G/F, 5-6 Wing Fung Street, Wan Chai'
  },
  'baker-bottleman': {
    lat: 22.274964,
    lng: 114.172137,
    address: 'G/F, 1-5 Wan Chai Road, Wan Chai'
  }
};

// Hong Kong map center and default zoom
export const HK_MAP_CENTER = {
  lat: 22.3193,
  lng: 114.1694,
  zoom: 12
};

// Get location for a business
export const getBusinessLocation = (businessId) => {
  return BUSINESS_LOCATIONS[businessId] || null;
};

// Get all locations for a business (handles multiple locations)
export const getBusinessLocations = (businessId) => {
  const location = BUSINESS_LOCATIONS[businessId];
  if (!location) return [];
  // If it's an array, return it; otherwise, wrap single location in array
  return Array.isArray(location) ? location : [location];
};
