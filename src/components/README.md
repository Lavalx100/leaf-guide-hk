# 📦 Components Directory

This folder contains all React components for the Leaf Guide HK application.

## 📋 Component Overview

### 🗺️ Map & Location Components

#### **MapView.jsx**
The main interactive map component with advanced filtering and clustering.

**Features:**
- Displays 9,100+ recycling locations with clustering
- Shows 550+ water fountains across Hong Kong
- Plots sustainable businesses with custom icons
- Interactive filter panel for categories
- Private recycling toggle (off by default)
- Geographic bounds locked to Hong Kong
- Zoom levels: 10 (city) to 19 (street)

**State Management:**
```javascript
visibleCategories: {
  Hotel: boolean,
  Restaurant: boolean,
  Bakery: boolean,
  Cafe: boolean,
  waterFountains: boolean,
  recycling: boolean
}
showPrivateRecycling: boolean // Default: false
```

**Props:**
- `businesses` - Array of business objects
- `onBusinessSelect` - Callback when business marker clicked
- `selectedBusiness` - Currently selected business for auto-zoom

**Key Functions:**
- `createCustomIcon()` - Generates business markers (40px circular)
- `createWaterFountainIcon()` - Blue water drop markers (16px)
- `createRecyclingIcon()` - Green recycling markers (16px)
- `createWaterClusterIcon()` - Blue cluster bubbles
- `createRecyclingClusterIcon()` - Green cluster bubbles
- `toggleCategory()` - Show/hide marker categories
- `filteredRecyclingLocations` - Filters public vs private recycling

**Dependencies:**
- react-leaflet
- react-leaflet-cluster
- leaflet
- lucide-react (icons)

---

### 🏢 Business Display Components

#### **BusinessCard.jsx**
Full-featured business card with detailed sustainability breakdown.

**Features:**
- Leaf rating display (1-3 leaves)
- Overall score out of 100
- Expandable criteria breakdown
- Evidence toggle with source links
- Business images and descriptions
- Location information
- "View on Map" button

**Props:**
- `business` - Business object with scores
- `onViewDetails` - Callback for detail page
- `onViewOnMap` - Callback to show on map

---

#### **BusinessCardSimple.jsx**
Condensed version for list views and itinerary planner.

**Features:**
- Compact layout
- Leaf rating and score
- Sector badge
- Add/remove from itinerary
- Quick actions

**Props:**
- `business` - Business object
- `onSelect` - Click handler
- `compact` - Boolean for extra-small layout

---

#### **RestaurantDetail.jsx**
Consumer-facing detailed business page.

**Features:**
- Hero image and gallery
- Full sustainability report
- Criteria scores with explanations
- Evidence links
- Location map
- Contact information

**Route:** `/business/:id`

---

#### **RestaurantDetailProfessional.jsx**
Professional/B2B detailed business page with additional context.

**Features:**
- Professional layout
- Industry benchmarking
- Detailed methodology
- Certification information
- Download reports

**Route:** `/business/:id/professional`

---

### 🎛️ Control Components

#### **Filters.jsx**
Main filtering and sorting controls for business directory.

**Features:**
- Sector filter (All, Hotel, Restaurant, Bakery, Cafe)
- Leaf rating filter (All, 1-leaf, 2-leaf, 3-leaf)
- Sort options (Score High-Low, Score Low-High, Name A-Z, Name Z-A)
- Active filter count badge
- Clear all filters

**Props:**
- `filters` - Current filter state
- `onFilterChange` - Filter update callback
- `counts` - Business counts per category

**State:**
```javascript
{
  sector: string,
  leaves: number | null,
  sort: string
}
```

---

#### **Header.jsx**
Global navigation header.

**Features:**
- Logo and site title
- Navigation menu (Home, Map, About, Services, Criteria)
- Mobile responsive hamburger menu
- Active route highlighting
- Sticky positioning

**Routes:**
- `/` - Home
- `/map` - Interactive Map
- `/about` - About Page
- `/services` - Services
- `/criteria` - Methodology

---

#### **Footer.jsx**
Global footer with links and information.

**Features:**
- Quick links
- Social media
- Copyright information
- Contact details
- Site map

---

### 📄 Informational Components

#### **AboutPage.jsx**
About Leaf Guide HK and the rating system.

**Content:**
- Mission statement
- How the leaf rating works
- Team information
- Contact form

---

#### **CriteriaPage.jsx**
Detailed explanation of the 10 sustainability criteria.

**Content:**
- Criteria descriptions
- Scoring ladders (0-10 points each)
- Examples of evidence
- Methodology references

**Criteria:**
1. Governance & Public Targets
2. Legal Readiness & Risk
3. Energy & Carbon
4. Water Stewardship
5. Waste & Circular Economy
6. Biodiversity & Nature
7. Supply Chain & Sourcing
8. Menu & Products
9. Stakeholder Engagement
10. Community & Regional Impact

---

#### **Methodology.jsx**
Deep dive into assessment methodology.

**Content:**
- Research process
- Data collection methods
- Scoring algorithm
- Quality assurance
- Update frequency

---

#### **References.jsx**
Bibliography and data sources.

**Content:**
- Government data sources
- Academic references
- Industry standards
- External audits

---

#### **ServicesPage.jsx**
Services offered by Leaf Guide HK.

**Content:**
- Business assessments
- Consulting services
- Data licensing
- API access

---

### 🗓️ Planning Components

#### **ItineraryPlanner.jsx**
Trip planning tool for sustainable tourism.

**Features:**
- Add/remove businesses from itinerary
- Drag to reorder stops
- View route on map
- Export itinerary
- Share functionality
- Print-friendly version

**State:**
```javascript
{
  selectedBusinesses: Array<Business>,
  currentDate: Date,
  notes: string
}
```

**Local Storage:**
- Persists itinerary between sessions
- Auto-save on changes

---

## 🎨 Styling Conventions

### Tailwind Classes
All components use Tailwind CSS utility classes:
- **Colors**: `leaf-600` (primary green), `gray-*` (neutrals)
- **Spacing**: Standard 4px increments
- **Responsive**: Mobile-first with `sm:`, `md:`, `lg:` breakpoints

### Custom Colors (tailwind.config.js)
```javascript
colors: {
  leaf: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',  // Primary
    600: '#16a34a',  // Primary dark
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  }
}
```

---

## 🔧 Component Patterns

### State Management
- **Local State**: `useState` for component-specific data
- **Props Drilling**: For simple parent-child communication
- **Callbacks**: For child-to-parent data flow

### Data Fetching
- Static imports from `src/data.js`, `src/data/`
- No external API calls (all data bundled)

### Performance
- `React.memo()` for expensive renders
- `useMemo()` for filtered/sorted data
- Lazy loading for map markers

### Accessibility
- Semantic HTML (`<button>`, `<nav>`, `<main>`)
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus management

---

## 🧪 Testing Guidelines

### Manual Testing Checklist
- [ ] All filter combinations work
- [ ] Map markers cluster/uncluster correctly
- [ ] Mobile responsive on all screen sizes
- [ ] Print layouts work
- [ ] Navigation between routes
- [ ] Browser back/forward buttons

### Future: Automated Tests
- Unit tests for utility functions
- Integration tests for filters
- E2E tests for user flows

---

## 📝 Adding New Components

### Naming Conventions
- PascalCase for component files: `MyComponent.jsx`
- Descriptive names indicating purpose
- Suffix with component type if needed: `BusinessCard.jsx`

### File Structure
```jsx
import React, { useState } from 'react';
import { /* dependencies */ } from 'library';

// Component
const MyComponent = ({ prop1, prop2 }) => {
  // State
  const [state, setState] = useState(initial);
  
  // Handlers
  const handleAction = () => {
    // logic
  };
  
  // Render
  return (
    <div className="container">
      {/* JSX */}
    </div>
  );
};

export default MyComponent;
```

### Props Documentation
Add JSDoc comments for complex components:
```jsx
/**
 * BusinessCard - Displays business with sustainability info
 * @param {Object} business - Business data object
 * @param {Function} onViewDetails - Callback for detail view
 * @param {Function} onViewOnMap - Callback to show on map
 */
```

---

## 🔄 Component Dependencies

```
App.jsx
├── Header.jsx
├── MapView.jsx
│   └── react-leaflet-cluster
├── BusinessCard.jsx
├── Filters.jsx
├── ItineraryPlanner.jsx
│   └── BusinessCardSimple.jsx
├── AboutPage.jsx
├── CriteriaPage.jsx
├── Methodology.jsx
├── References.jsx
├── ServicesPage.jsx
└── Footer.jsx
```

---

## 🚀 Performance Tips

1. **MapView**: Avoid re-rendering when filters change - markers are conditionally rendered
2. **BusinessCard**: Evidence sections lazy-loaded on expand
3. **Filters**: Debounce search input if added
4. **Lists**: Use `key` prop with stable IDs, not array indices

---

## 📚 Further Reading

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [React Leaflet](https://react-leaflet.js.org)
- [Lucide Icons](https://lucide.dev)

---

**Need help?** Check the main [project README](../../README.md) or open an issue on GitHub.
