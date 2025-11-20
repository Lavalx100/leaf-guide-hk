# 📊 Data Directory

This folder contains all data files for locations and sustainability information.

## 📁 Files Overview

### 🗺️ Location Data Files

#### **recyclingLocations.js**
Comprehensive database of recycling locations across Hong Kong.

**Statistics:**
- **Total Locations**: 9,120 unique recycling points
- **Districts Covered**: All 18 Hong Kong districts
- **Last Updated**: November 2025
- **File Size**: ~9,124 lines
- **Deduplication**: Reduced from 17,235 to 9,120 entries

**Data Structure:**
```javascript
export const RECYCLING_LOCATIONS = [
  {
    name: string,              // Location name
    lat: number,               // Latitude (22.15 - 22.58)
    lng: number,               // Longitude (113.82 - 114.45)
    district: string,          // HK district name
    materials: string,         // Comma-separated materials
    collectionPointType: string, // Collection point category
    notes: string              // Additional information
  },
  // ... 9,120 entries
];
```

**Collection Point Types:**
1. **Recycling Bins at Public Place** (majority)
   - Parks, streets, public facilities
   - Accessible to everyone
   
2. **Private Collection Points** (housing estates, shopping centres)
   - Residential estates
   - Shopping malls
   - Office buildings
   - *Note: Usually "For residents/staff only"*
   
3. **NGO Collection Points**
   - Community organizations
   - Social enterprises
   - Charity shops

**Materials Accepted:**
- **Paper** - Newspapers, cardboard, office paper
- **Plastics** - PET bottles, plastic bags, containers
- **Metals** - Aluminum cans, steel cans
- **Glass Bottles** - All colors
- **Food Waste** - Organic composting
- **Clothes** - Textile recycling
- **Fluorescent Lamp** - Hazardous waste
- **Rechargeable Batteries** - E-waste
- **Small Electrical and Electronic Equipment** - E-waste
- **Beverage Cartons** - Tetra Pak
- **Printer Cartridges** - Office supplies
- **Barbeque Fork** - Park facilities

**Districts Breakdown:**
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

**Data Quality:**
- ✅ All coordinates verified within Hong Kong bounds
- ✅ Duplicates removed based on exact lat/lng matching
- ✅ Invalid entries cleaned
- ✅ UTF-8 encoding for Chinese characters

**Source:**
Hong Kong Environmental Protection Department (EPD)

---

#### **waterFountains.js**
Database of public water fountains for refilling reusable bottles.

**Statistics:**
- **Total Fountains**: ~550 locations
- **Districts Covered**: All 18 districts
- **Last Updated**: 2024

**Data Structure:**
```javascript
export const WATER_FOUNTAINS = [
  {
    name: string,    // Fountain location name
    lat: number,     // Latitude
    lng: number,     // Longitude
    district: string // HK district
  },
  // ... 550 entries
];
```

**Location Types:**
- MTR stations and facilities
- Public parks and gardens
- Government buildings
- Sports facilities
- Community centers
- Tourist attractions

**Coverage:**
All major transit hubs and public spaces across:
- Hong Kong Island
- Kowloon Peninsula
- New Territories
- Outlying Islands

**Source:**
Hong Kong Water Supplies Department

---

### 📋 Archived/Backup Files

#### **recyclingLocations.js.bak**
Backup copy of recycling data before major updates.

**Purpose:**
- Safety backup before deduplication
- Reference for data migration
- Historical record

**Usage:**
```bash
# Restore from backup if needed
cp recyclingLocations.js.bak recyclingLocations.js
```

---

#### **wasteless250918.csv**
Raw CSV data from EPD import.

**Statistics:**
- **Total Rows**: 8,858 records
- **Import Date**: September 25, 2018 (filename date)
- **Format**: CSV with headers

**CSV Columns:**
1. Location Name
2. Latitude
3. Longitude
4. District
5. Materials Accepted
6. Collection Point Type
7. Notes/Restrictions

**Import Process:**
This file was processed and merged into `recyclingLocations.js` using:
1. Automatic CSV parsing
2. Duplicate detection (807 skipped)
3. Data validation
4. Coordinate verification
5. UTF-8 encoding conversion

**Import Results:**
- Started with: 8,858 rows
- Duplicates found: 807
- New entries added: 8,051
- Combined with existing: 1,071 entries
- Before deduplication total: 17,235
- After deduplication: 9,120 unique locations

---

## 🔧 Data Maintenance

### Adding New Recycling Locations

```javascript
// Add to recyclingLocations.js
{
  name: "New Location Name",
  lat: 22.12345,
  lng: 114.12345,
  district: "District Name",
  materials: "Paper,Plastics,Metals",
  collectionPointType: "Recycling Bins at Public Place",
  notes: "Note: For public use"
}
```

**Validation Checklist:**
- [ ] Coordinates within HK bounds (22.15-22.58°N, 113.82-114.45°E)
- [ ] District name matches one of 18 districts
- [ ] Materials comma-separated, no spaces after commas
- [ ] Collection point type from standard list
- [ ] Notes include access restrictions if applicable

### Adding Water Fountains

```javascript
// Add to waterFountains.js
{
  name: "Fountain Location",
  lat: 22.12345,
  lng: 114.12345,
  district: "District Name"
}
```

### Deduplication Script

To remove duplicates based on coordinates:

```javascript
// Node.js script (example)
const locations = require('./recyclingLocations.js').RECYCLING_LOCATIONS;
const seen = new Map();
const unique = [];

locations.forEach(loc => {
  const key = `${loc.lat},${loc.lng}`;
  if (!seen.has(key)) {
    seen.set(key, true);
    unique.push(loc);
  }
});

console.log(`Removed ${locations.length - unique.length} duplicates`);
// Export unique array
```

---

## 📈 Data Statistics

### Recycling Locations by District (Top 10)

| District | Count | Percentage |
|----------|-------|------------|
| Kwun Tong | ~1,200 | 13% |
| Sha Tin | ~950 | 10% |
| Tsuen Wan | ~820 | 9% |
| Yuen Long | ~780 | 9% |
| Sai Kung | ~720 | 8% |
| Tai Po | ~680 | 7% |
| Tuen Mun | ~650 | 7% |
| Islands | ~580 | 6% |
| Eastern | ~520 | 6% |
| Central Western | ~480 | 5% |

### Materials Frequency

| Material | Locations | Coverage |
|----------|-----------|----------|
| Paper | ~8,900 | 98% |
| Plastics | ~8,800 | 97% |
| Metals | ~8,700 | 96% |
| Glass Bottles | ~3,200 | 35% |
| Fluorescent Lamp | ~1,800 | 20% |
| Rechargeable Batteries | ~1,600 | 18% |
| Clothes | ~900 | 10% |
| Small E-waste | ~800 | 9% |
| Food Waste | ~150 | 2% |

---

## 🔍 Data Quality Issues

### Known Limitations

1. **Temporal Accuracy**
   - Some locations may have closed
   - New locations may not be included
   - Update frequency: Quarterly (target)

2. **Private Access**
   - ~15% of locations are private (estates/offices)
   - Access restrictions in notes field
   - May not be available to general public

3. **Material Details**
   - No quantity/capacity information
   - No bin size data
   - No collection schedule

4. **Coordinate Precision**
   - 6 decimal places (±0.1m accuracy)
   - Some bulk locations may share coordinates
   - Building entrances vs. exact bin location

### Reporting Data Issues

If you find incorrect data:

1. **Check the location**
   - Verify coordinates on OpenStreetMap
   - Confirm the location still exists
   - Note any changes

2. **Submit an issue**
   - Use GitHub Issues
   - Tag with `data-quality`
   - Include: Name, Coordinates, District, Issue description

3. **Format**
   ```markdown
   **Location**: [Name]
   **Coordinates**: [Lat, Lng]
   **District**: [District]
   **Issue**: [Description]
   **Evidence**: [Photo/Link if available]
   ```

---

## 🚀 Performance Considerations

### File Sizes
- `recyclingLocations.js`: ~850 KB
- `waterFountains.js`: ~45 KB
- Total: ~895 KB uncompressed

### Loading Strategy
- Static imports (bundled with app)
- No lazy loading (data always needed)
- Gzip compression in production (~200 KB)

### Map Rendering
- Marker clustering reduces DOM nodes
- Only visible markers rendered
- Filter reduces active dataset

---

## 📚 Data Sources & Attribution

### Primary Sources
1. **Hong Kong Environmental Protection Department (EPD)**
   - Recycling location database
   - Updated via open data portal
   - License: Open Government License

2. **Water Supplies Department**
   - Water fountain locations
   - Public facility data

### Data Processing
- CSV parsing and validation
- Coordinate normalization
- Duplicate detection and removal
- UTF-8 encoding standardization

### License
This data is derived from Hong Kong Government open data and is redistributed under the Open Government License.

---

## 🔄 Update Procedure

### Quarterly Data Refresh

1. **Download latest data** from EPD portal
2. **Run import script** to merge new entries
3. **Deduplicate** using coordinate matching
4. **Validate** coordinates and districts
5. **Test** in development environment
6. **Commit** with descriptive message
7. **Deploy** to production

### Git Workflow
```bash
# Create backup
cp src/data/recyclingLocations.js src/data/recyclingLocations.js.bak

# Make changes
# ... edit files ...

# Commit
git add src/data/
git commit -m "Data update: Added [X] locations, removed [Y] duplicates"
git push origin main
```

---

## 🧰 Utility Scripts

### Count Entries
```javascript
const { RECYCLING_LOCATIONS } = require('./recyclingLocations.js');
console.log(`Total: ${RECYCLING_LOCATIONS.length}`);
```

### Count by District
```javascript
const counts = RECYCLING_LOCATIONS.reduce((acc, loc) => {
  acc[loc.district] = (acc[loc.district] || 0) + 1;
  return acc;
}, {});
console.table(counts);
```

### Find Private Locations
```javascript
const privateLocations = RECYCLING_LOCATIONS.filter(loc => 
  loc.collectionPointType?.includes('Private')
);
console.log(`Private: ${privateLocations.length}`);
```

---

**For more information**, see the main [project README](../../README.md) or the [components documentation](../components/README.md).
