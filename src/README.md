# 📂 src/ Directory

This is the main source code directory containing all React components, data, and utilities for Leaf Guide HK.

## 📁 Directory Structure

```
src/
├── components/          # React components (UI building blocks)
├── data/               # Static data files (locations, businesses)
├── utils/              # Utility functions and helpers
├── assets/             # Static assets (images, fonts, icons)
├── App.jsx             # Root application component with routing
├── main.jsx            # React entry point and DOM rendering
├── index.css           # Global styles and Tailwind imports
└── data.js             # Business data and sustainability criteria
```

---

## 📄 Root Files

### **App.jsx**
The root component that defines the application structure and routing.

**Features:**
- React Router setup with all routes
- Layout wrapper with Header and Footer
- Route definitions for all pages
- 404 error handling

**Routes:**
```javascript
/                   → Home page (business directory)
/map               → Interactive map view
/business/:id      → Business detail page
/itinerary         → Itinerary planner
/about             → About Leaf Guide HK
/services          → Services offered
/criteria          → Sustainability criteria
/methodology       → Assessment methodology
/references        → Data sources
```

**Example Structure:**
```jsx
<BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/map" element={<MapView />} />
    {/* ... more routes */}
  </Routes>
  <Footer />
</BrowserRouter>
```

---

### **main.jsx**
React application entry point that renders the app into the DOM.

**Purpose:**
- Imports React and ReactDOM
- Renders `<App />` into root element
- Imports global CSS
- Sets up React Strict Mode (dev only)

**Code:**
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

**Dev Notes:**
- StrictMode helps identify potential problems
- Causes double-rendering in development
- Removed automatically in production builds

---

### **index.css**
Global stylesheet with Tailwind CSS imports and custom styles.

**Sections:**

1. **Tailwind Directives**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

2. **Custom CSS Variables**
```css
:root {
  --color-leaf-primary: #22c55e;
  --color-leaf-dark: #16a34a;
  /* ... more variables */
}
```

3. **Global Resets**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

4. **Custom Component Styles**
```css
.business-card {
  /* Custom card styles */
}

.leaf-badge {
  /* Badge styling */
}
```

5. **Leaflet Overrides**
```css
.leaflet-container {
  /* Map styling overrides */
}
```

**Tailwind Configuration:**
See `tailwind.config.js` in project root for:
- Custom colors (leaf green palette)
- Extended utilities
- Custom breakpoints

---

### **data.js**
Central data file containing business information and sustainability criteria.

**Exports:**

#### 1. **CRITERIA** - Sustainability evaluation framework
```javascript
export const CRITERIA = [
  {
    key: 'governance',
    name: 'Governance & public targets',
    max: 10,
    description: 'Public sustainability policies...',
    ladder: {
      0: 'No page or targets',
      4: 'Policy page or CSR paragraph',
      7: 'Time-bound targets or roadmap',
      9: 'Property page with goals',
      10: 'Annual ESG report with baselines'
    }
  },
  // ... 9 more criteria (100 points total)
];
```

**All 10 Criteria:**
1. Governance & Public Targets (10pts)
2. Legal Readiness & Risk (10pts)
3. Energy & Carbon (10pts)
4. Water Stewardship (10pts)
5. Waste & Circular Economy (10pts)
6. Biodiversity & Nature (10pts)
7. Supply Chain & Sourcing (10pts)
8. Menu & Products (10pts)
9. Stakeholder Engagement (10pts)
10. Community & Regional Impact (10pts)

---

#### 2. **LEAF_TIERS** - Leaf rating thresholds
```javascript
export const LEAF_TIERS = {
  1: { min: 40, max: 59, label: '1 Leaf', color: 'emerald' },
  2: { min: 60, max: 79, label: '2 Leaves', color: 'green' },
  3: { min: 80, max: 100, label: '3 Leaves', color: 'teal' }
};
```

**Rating System:**
- **1 Leaf** 🌿: 40-59 points (Emerging)
- **2 Leaves** 🌿🌿: 60-79 points (Good)
- **3 Leaves** 🌿🌿🌿: 80-100 points (Excellent)

---

#### 3. **BUSINESSES** - Array of rated businesses
```javascript
export const BUSINESSES = [
  {
    id: 'unique-business-id',
    name: 'Business Name',
    sector: 'Hotel', // or 'Restaurant', 'Bakery', 'Cafe'
    description: 'Brief description...',
    leaves: 2, // 1, 2, or 3
    total: 67, // Total score out of 100
    scores: {
      governance: 7,
      legal: 8,
      energy: 6,
      water: 7,
      waste: 7,
      biodiversity: 5,
      supply: 6,
      menu: 8,
      stakeholder: 7,
      community: 6
    },
    evidence: {
      governance: [
        { 
          text: 'Evidence description', 
          source: 'https://source-url.com' 
        }
      ],
      // ... evidence for all criteria
    },
    verified: true,
    lastUpdated: '2024-11-15'
  },
  // ... 70+ businesses
];
```

**Business Object Schema:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique identifier (kebab-case) |
| `name` | string | Business display name |
| `sector` | string | Hotel, Restaurant, Bakery, or Cafe |
| `description` | string | Brief sustainability overview |
| `leaves` | number | Leaf rating (1-3) |
| `total` | number | Total score (0-100) |
| `scores` | object | Individual criteria scores |
| `evidence` | object | Links and descriptions per criterion |
| `verified` | boolean | Assessment verified |
| `lastUpdated` | string | ISO date of last assessment |

---

## 📂 Subdirectories

### `/components/`
React UI components for all pages and features.

**Key Components:**
- MapView.jsx - Interactive map with 9,000+ locations
- BusinessCard.jsx - Business display cards
- Filters.jsx - Filter and sort controls
- ItineraryPlanner.jsx - Trip planning tool

📖 **[See detailed components documentation](./components/README.md)**

---

### `/data/`
Static data files for recycling locations and water fountains.

**Files:**
- `recyclingLocations.js` - 9,120 recycling points
- `waterFountains.js` - 550 water fountains
- `wasteless250918.csv` - Raw EPD import data

📖 **[See detailed data documentation](./data/README.md)**

---

### `/utils/`
Utility functions and helper modules.

**Files:**
- `locations.js` - Location helpers and geocoding
- `images.js` - Image management utilities

📖 **[See detailed utils documentation](./utils/README.md)**

---

### `/assets/`
Static assets like images, icons, and fonts.

**Structure:**
```
assets/
├── Symbols/           # Icon symbols
│   ├── water.png     # Water fountain icon
│   └── recycle.png   # Recycling icon
├── images/           # Business photos
└── fonts/            # Custom fonts (if any)
```

**Asset Usage:**
```jsx
// Direct import
import waterIcon from './assets/Symbols/water.png';

// Or use in public folder for URL reference
<img src="/assets/Symbols/water.png" alt="Water" />
```

**Note:** Currently using external CDN URLs for most icons:
- Water: `https://i.ibb.co/ch5C9yWT/water.png`
- Recycle: `https://i.ibb.co/kVp86RZ3/recycle.png`

---

## 🔄 Data Flow

### Component Hierarchy
```
App.jsx
├── Header
├── HomePage
│   ├── Filters
│   └── BusinessCard (multiple)
├── MapView
│   ├── MapContainer (Leaflet)
│   ├── Marker (businesses)
│   ├── MarkerClusterGroup (water fountains)
│   └── MarkerClusterGroup (recycling)
├── ItineraryPlanner
│   └── BusinessCardSimple (multiple)
└── Footer
```

### Data Import Flow
```
data.js → BUSINESSES → HomePage → BusinessCard
data/recyclingLocations.js → RECYCLING_LOCATIONS → MapView
data/waterFountains.js → WATER_FOUNTAINS → MapView
utils/locations.js → getBusinessLocations() → MapView
utils/images.js → getBusinessImage() → BusinessCard
```

---

## 🎨 Styling Approach

### Tailwind CSS
Primary styling method using utility classes:

```jsx
<div className="bg-white rounded-lg shadow-lg p-4 hover:shadow-xl transition-shadow">
  <h2 className="text-2xl font-bold text-leaf-600 mb-2">
    Title
  </h2>
</div>
```

### Custom CSS (index.css)
Used for:
- Global resets
- Complex animations
- Component-specific overrides
- Third-party library styling (Leaflet)

### Inline Styles
Used sparingly for:
- Dynamic values (colors from data)
- Leaflet icon customization
- Performance-critical animations

---

## 🧪 Development Workflow

### Adding a New Business

1. **Research** - Gather sustainability information
2. **Score** - Evaluate against all 10 criteria
3. **Evidence** - Document sources for each score
4. **Add Data** - Update `data.js`:
   ```javascript
   {
     id: 'new-business-slug',
     name: 'New Business Name',
     sector: 'Restaurant',
     // ... complete all fields
   }
   ```
5. **Add Locations** - Update `utils/locations.js`
6. **Add Images** - Update `utils/images.js`
7. **Test** - Verify display and map markers
8. **Commit** - Document changes in git

### Adding a New Page

1. **Create Component** - `src/components/NewPage.jsx`
2. **Add Route** - Update `App.jsx`:
   ```jsx
   <Route path="/new-page" element={<NewPage />} />
   ```
3. **Add Navigation** - Update `Header.jsx`
4. **Test** - Check routing and navigation
5. **Document** - Update relevant READMEs

---

## 🔍 Code Organization Principles

### Component Structure
```jsx
// 1. Imports
import React, { useState, useEffect } from 'react';
import { ExternalDependency } from 'library';
import { InternalUtil } from '../utils/helper';

// 2. Component Definition
const ComponentName = ({ prop1, prop2 }) => {
  // 3. State
  const [state, setState] = useState(initial);
  
  // 4. Effects
  useEffect(() => {
    // side effects
  }, [dependencies]);
  
  // 5. Handlers
  const handleAction = () => {
    // logic
  };
  
  // 6. Render
  return (
    <div>
      {/* JSX */}
    </div>
  );
};

// 7. Export
export default ComponentName;
```

### File Naming
- **Components**: PascalCase (`BusinessCard.jsx`)
- **Utils**: camelCase (`locations.js`)
- **Data**: camelCase (`data.js`, `waterFountains.js`)
- **Styles**: kebab-case (`index.css`)

### Import Order
1. React imports
2. Third-party libraries
3. Internal components
4. Utils and helpers
5. Data imports
6. Styles

---

## 🚀 Build and Development

### Development Mode
```bash
npm run dev
# Starts Vite dev server with hot reload
# Usually http://localhost:5173
```

**Features:**
- Hot Module Replacement (HMR)
- Fast refresh for React
- Source maps for debugging
- Error overlays

### Production Build
```bash
npm run build
# Creates optimized bundle in dist/
```

**Optimizations:**
- Minification (JS, CSS, HTML)
- Tree shaking (removes unused code)
- Code splitting (lazy loading)
- Asset optimization (images, fonts)

### Preview Production
```bash
npm run preview
# Serves production build locally
```

---

## 📊 Performance Considerations

### Bundle Size
Current bundle sizes (gzipped):
- Main JS: ~150 KB
- CSS: ~20 KB
- Data files: ~200 KB
- Total: ~370 KB

### Optimization Strategies
1. **Code Splitting**: Routes loaded on demand
2. **Lazy Loading**: Images and galleries
3. **Memoization**: Expensive calculations cached
4. **Debouncing**: Search and filter inputs
5. **Virtual Scrolling**: Large lists (future)

### Performance Targets
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

---

## 🔐 Security Considerations

### Data Safety
- No user authentication (public data only)
- No personal information stored
- All data from verified government sources
- HTTPS enforced in production

### External Resources
- Images from trusted CDNs
- Map tiles from OpenStreetMap
- No third-party tracking scripts
- No external API calls (privacy-first)

---

## 📚 Learning Resources

### React
- [React Documentation](https://react.dev)
- [React Router](https://reactrouter.com)

### Mapping
- [Leaflet Docs](https://leafletjs.com)
- [React Leaflet](https://react-leaflet.js.org)

### Styling
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind UI Components](https://tailwindui.com)

### Build Tools
- [Vite Documentation](https://vitejs.dev)

---

## 🤝 Contributing

See the main [project README](../README.md) for contribution guidelines.

### Quick Tips
- Follow existing code style
- Add JSDoc comments for complex functions
- Update READMEs when adding features
- Test on mobile and desktop
- Optimize images before committing

---

**Questions?** Refer to folder-specific READMEs or open a GitHub issue.
