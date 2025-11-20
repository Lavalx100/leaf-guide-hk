# 🛠️ Utils Directory

This folder contains utility functions and helper modules used throughout the application.

## 📁 Files Overview

### 📍 locations.js

Location-related utilities for business geocoding and map configuration.

#### **Exports**

##### `HK_MAP_CENTER`
Default map center coordinates for Hong Kong.

```javascript
export const HK_MAP_CENTER = {
  lat: 22.3193,    // Central Hong Kong latitude
  lng: 114.1694,   // Central Hong Kong longitude
  zoom: 11         // Default zoom level (city view)
};
```

**Usage:**
```javascript
import { HK_MAP_CENTER } from '../utils/locations';

<MapContainer
  center={[HK_MAP_CENTER.lat, HK_MAP_CENTER.lng]}
  zoom={HK_MAP_CENTER.zoom}
/>
```

---

##### `getBusinessLocations(businessId)`
Returns array of physical locations for a business.

**Parameters:**
- `businessId` (string) - Unique business identifier

**Returns:**
- `Array<Location>` - Array of location objects
  ```javascript
  {
    address: string,     // Full street address
    lat: number,         // Latitude coordinate
    lng: number,         // Longitude coordinate
    district: string,    // Hong Kong district
    phone?: string,      // Phone number (optional)
    hours?: string       // Operating hours (optional)
  }
  ```

**Example:**
```javascript
import { getBusinessLocations } from '../utils/locations';

const locations = getBusinessLocations('hotel-icon');
// Returns:
// [
//   {
//     address: "1 Austin Road West, Tsim Sha Tsui",
//     lat: 22.302711,
//     lng: 114.168817,
//     district: "Yau Tsim Mong",
//     phone: "+852 3400 1234",
//     hours: "24/7"
//   }
// ]
```

**Multi-Location Businesses:**
Some businesses have multiple branches:
```javascript
const locations = getBusinessLocations('starbucks-hk');
// Returns array with 3+ locations
locations.forEach((loc, index) => {
  console.log(`Branch ${index + 1}: ${loc.address}`);
});
```

**Error Handling:**
- Returns empty array `[]` if business not found
- Returns empty array if business has no locations
- Never throws errors (safe to use in render)

---

#### **Location Database Structure**

Internal database (not exported):
```javascript
const BUSINESS_LOCATIONS = {
  'business-id-1': [
    { address: '...', lat: 22.xxx, lng: 114.xxx, district: '...' },
    // ... more locations
  ],
  'business-id-2': [ /* ... */ ],
  // ... all businesses
};
```

**Adding New Locations:**

1. Open `src/utils/locations.js`
2. Add business ID as key in `BUSINESS_LOCATIONS`
3. Add array of location objects
4. Ensure coordinates are within Hong Kong bounds

Example:
```javascript
const BUSINESS_LOCATIONS = {
  // ... existing entries
  'new-cafe-id': [
    {
      address: "123 Queen's Road Central, Central",
      lat: 22.2821,
      lng: 114.1564,
      district: "Central Western",
      phone: "+852 1234 5678",
      hours: "8:00 AM - 10:00 PM"
    }
  ]
};
```

---

#### **Coordinate Guidelines**

**Hong Kong Bounds:**
- **Latitude**: 22.15° to 22.58° N
- **Longitude**: 113.82° to 114.45° E

**District Names (Must Match):**
- Central Western
- Eastern
- Islands
- Kowloon City
- Kwai Tsing
- Kwun Tong
- North
- Sai Kung
- Sha Tin
- Sham Shui Po
- Southern
- Tai Po
- Tsuen Wan
- Tuen Mun
- Wan Chai
- Wong Tai Sin
- Yau Tsim Mong
- Yuen Long

**Coordinate Precision:**
- Use 6 decimal places for accuracy (±0.1m)
- Example: `22.302711, 114.168817`

**Finding Coordinates:**
1. Open [OpenStreetMap](https://www.openstreetmap.org)
2. Search for the address
3. Right-click on the exact location
4. Select "Show address"
5. Copy latitude and longitude

---

### 🖼️ images.js

Image management utilities for business photos and assets.

#### **Exports**

##### `getBusinessImage(businessId)`
Returns the primary image URL for a business.

**Parameters:**
- `businessId` (string) - Unique business identifier

**Returns:**
- `string` - Image URL or placeholder path
- Default: `'/placeholder-business.jpg'` if not found

**Example:**
```javascript
import { getBusinessImage } from '../utils/images';

const imageUrl = getBusinessImage('hotel-icon');
// Returns: "https://example.com/hotel-icon-hero.jpg"

// In component:
<img 
  src={getBusinessImage(business.id)} 
  alt={business.name}
  className="w-full h-64 object-cover"
/>
```

---

##### `getBusinessGallery(businessId)`
Returns array of gallery images for a business.

**Parameters:**
- `businessId` (string) - Unique business identifier

**Returns:**
- `Array<string>` - Array of image URLs
- Empty array `[]` if no gallery available

**Example:**
```javascript
import { getBusinessGallery } from '../utils/images';

const gallery = getBusinessGallery('hotel-icon');
// Returns:
// [
//   "https://example.com/hotel-icon-1.jpg",
//   "https://example.com/hotel-icon-2.jpg",
//   "https://example.com/hotel-icon-3.jpg",
//   "https://example.com/hotel-icon-4.jpg"
// ]

// In component:
<div className="grid grid-cols-2 gap-4">
  {getBusinessGallery(business.id).map((img, i) => (
    <img key={i} src={img} alt={`Gallery ${i + 1}`} />
  ))}
</div>
```

---

##### `getSectorIcon(sector)`
Returns the icon/logo URL for a business sector.

**Parameters:**
- `sector` (string) - Business sector ('Hotel', 'Restaurant', 'Bakery', 'Cafe')

**Returns:**
- `string` - Icon image URL

**Example:**
```javascript
import { getSectorIcon } from '../utils/images';

const icon = getSectorIcon('Hotel');
// Returns: "https://iili.io/K6JuZP4.png"

// Sector icons:
getSectorIcon('Hotel');      // Blue hotel icon
getSectorIcon('Restaurant'); // Red restaurant icon
getSectorIcon('Bakery');     // Orange bakery icon
getSectorIcon('Cafe');       // Purple cafe icon
```

**Icon URLs:**
```javascript
const SECTOR_ICONS = {
  'Hotel': 'https://iili.io/K6JuZP4.png',
  'Restaurant': 'https://iili.io/K6JuQVf.png',
  'Bakery': 'https://iili.io/K6Jubl2.md.png',
  'Cafe': 'https://lucide.dev/icons/coffee' // SVG inline
};
```

---

#### **Image Database Structure**

Internal database (not exported):
```javascript
const BUSINESS_IMAGES = {
  'business-id': {
    hero: 'url-to-main-image.jpg',
    gallery: [
      'url-to-gallery-1.jpg',
      'url-to-gallery-2.jpg',
      'url-to-gallery-3.jpg',
      'url-to-gallery-4.jpg'
    ]
  },
  // ... more businesses
};
```

---

#### **Adding New Images**

**Option 1: External Hosting (Recommended)**

Host images on a CDN and reference URLs:

```javascript
const BUSINESS_IMAGES = {
  'new-cafe-id': {
    hero: 'https://cdn.example.com/cafe-hero.jpg',
    gallery: [
      'https://cdn.example.com/cafe-1.jpg',
      'https://cdn.example.com/cafe-2.jpg',
      'https://cdn.example.com/cafe-3.jpg'
    ]
  }
};
```

**Recommended Hosts:**
- ImgBB (currently used for icons)
- Cloudinary
- AWS S3 + CloudFront
- Imgur

**Option 2: Local Assets**

Place images in `public/` folder:

```
public/
  images/
    businesses/
      cafe-name/
        hero.jpg
        gallery-1.jpg
        gallery-2.jpg
```

Reference with relative paths:
```javascript
const BUSINESS_IMAGES = {
  'cafe-id': {
    hero: '/images/businesses/cafe-name/hero.jpg',
    gallery: [
      '/images/businesses/cafe-name/gallery-1.jpg',
      '/images/businesses/cafe-name/gallery-2.jpg'
    ]
  }
};
```

---

#### **Image Guidelines**

**Hero Images:**
- **Dimensions**: 1200x800px minimum
- **Aspect Ratio**: 3:2 or 16:9
- **Format**: JPEG (optimized), WebP (modern browsers)
- **File Size**: < 500 KB
- **Content**: Exterior or interior showcase

**Gallery Images:**
- **Dimensions**: 800x600px minimum
- **Aspect Ratio**: 4:3 or 16:9
- **Format**: JPEG (optimized)
- **File Size**: < 300 KB each
- **Count**: 4-6 images recommended
- **Content**: 
  - Sustainability features
  - Recycling stations
  - Green initiatives
  - Certifications
  - Eco-friendly products

**Icon Images:**
- **Dimensions**: 512x512px (square)
- **Format**: PNG with transparency
- **File Size**: < 50 KB
- **Style**: Flat, simple, recognizable

**Optimization:**
Use tools like:
- [TinyPNG](https://tinypng.com) - Lossy compression
- [Squoosh](https://squoosh.app) - Advanced optimization
- ImageOptim - Mac app

---

## 🔧 Common Patterns

### Displaying Business on Map

```javascript
import { getBusinessLocations } from '../utils/locations';
import { getBusinessImage } from '../utils/images';

const BusinessMarker = ({ business }) => {
  const locations = getBusinessLocations(business.id);
  const image = getBusinessImage(business.id);
  
  return locations.map((location, index) => (
    <Marker 
      key={`${business.id}-${index}`}
      position={[location.lat, location.lng]}
    >
      <Popup>
        <img src={image} alt={business.name} />
        <h3>{business.name}</h3>
        <p>{location.address}</p>
      </Popup>
    </Marker>
  ));
};
```

### Image Fallback

```javascript
import { getBusinessImage } from '../utils/images';

const BusinessImage = ({ businessId, alt }) => {
  const [imgSrc, setImgSrc] = useState(getBusinessImage(businessId));
  
  return (
    <img 
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc('/placeholder-business.jpg')}
    />
  );
};
```

### Lazy Loading Gallery

```javascript
import { getBusinessGallery } from '../utils/images';

const Gallery = ({ businessId }) => {
  const images = getBusinessGallery(businessId);
  
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((src, i) => (
        <img 
          key={i}
          src={src}
          loading="lazy"
          alt={`Gallery ${i + 1}`}
          className="w-full h-48 object-cover rounded"
        />
      ))}
    </div>
  );
};
```

---

## 🧪 Testing Utilities

### Validate Coordinates

```javascript
export const isValidHKCoordinate = (lat, lng) => {
  return (
    lat >= 22.15 && lat <= 22.58 &&
    lng >= 113.82 && lng <= 114.45
  );
};

// Usage:
const location = { lat: 22.302711, lng: 114.168817 };
if (!isValidHKCoordinate(location.lat, location.lng)) {
  console.error('Invalid HK coordinates!');
}
```

### Calculate Distance

```javascript
export const calculateDistance = (lat1, lng1, lat2, lng2) => {
  const R = 6371; // Earth's radius in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c; // Distance in km
};

// Usage:
const distance = calculateDistance(22.28, 114.16, 22.30, 114.17);
console.log(`Distance: ${distance.toFixed(2)} km`);
```

---

## 📝 Best Practices

### Location Data
1. **Always validate coordinates** before adding
2. **Use consistent district names** from the standard list
3. **Include phone and hours** when available
4. **Test on map** before committing
5. **Document sources** in comments

### Image Management
1. **Optimize images** before uploading
2. **Use CDN** for external hosting
3. **Implement lazy loading** for galleries
4. **Provide alt text** for accessibility
5. **Have fallback images** for errors

### Code Organization
1. **Keep utilities pure** (no side effects)
2. **Export only public APIs**
3. **Document parameters** with JSDoc
4. **Handle edge cases** gracefully
5. **Return safe defaults** instead of throwing

---

## 🚀 Performance Tips

### Location Lookups
- ✅ Pre-compute locations in build
- ✅ Use object lookup instead of array.find()
- ✅ Cache results if called frequently

### Image Loading
- ✅ Use lazy loading for galleries
- ✅ Implement progressive loading
- ✅ Serve responsive images
- ✅ Use WebP with JPEG fallback

---

## 🔄 Future Enhancements

### Planned Features
- [ ] Geocoding API integration
- [ ] Reverse geocoding (address from coordinates)
- [ ] Distance calculations between locations
- [ ] Image upload and management UI
- [ ] Automatic image optimization
- [ ] CDN integration

### Ideas for Improvement
- Caching layer for repeated lookups
- Image gallery with lightbox component
- Map clustering based on distance
- Location search and autocomplete
- Image versioning and cache busting

---

## 📚 Related Documentation

- [Components README](../components/README.md) - Using utilities in components
- [Data README](../data/README.md) - Location data structure
- [Main README](../../README.md) - Project overview

---

**Questions?** Open an issue on GitHub or refer to the main project documentation.
