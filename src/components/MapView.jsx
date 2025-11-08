import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';
import { MapPin, ExternalLink, Hotel, UtensilsCrossed, Coffee, Droplet, Recycle } from 'lucide-react';
import L from 'leaflet';
import { LEAF_TIERS } from '../data.js';
import { getBusinessLocations, HK_MAP_CENTER } from '../utils/locations.js';
import { getBusinessImage } from '../utils/images.js';
import { WATER_FOUNTAINS } from '../data/waterFountains.js';
import { RECYCLING_LOCATIONS } from '../data/recyclingLocations.js';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Get icon and color based on business sector
const getSectorIcon = (sector) => {
  const icons = {
    'Hotel': { 
      icon: 'https://iili.io/K6JuZP4.png', 
      color: '#3b82f6' 
    },
    'Restaurant': { 
      icon: 'https://iili.io/K6JuQVf.png', 
      color: '#ef4444' 
    },
    'Bakery': { 
      icon: 'https://iili.io/K6Jubl2.md.png', 
      color: '#f59e0b' 
    },
    'Cafe': { 
      icon: 'https://iili.io/K6JuDKl.png', 
      color: '#8b5cf6' 
    }
  };
  return icons[sector] || { 
    icon: 'https://iili.io/K6JuQVf.png', 
    color: '#6b7280' 
  };
};

// Custom marker icons based on business sector
const createCustomIcon = (sector, leaves) => {
  const { icon, color } = getSectorIcon(sector);
  
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${color};
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <img src="${icon}" alt="${sector}" style="width: 24px; height: 24px; filter: brightness(0) invert(1);" />
      </div>
    `,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
  });
};

// Create small water fountain marker
const createWaterFountainIcon = () => {
  return L.divIcon({
    className: 'water-fountain-marker',
    html: `
      <div style="
        background-color: #3b82f6;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <img src="https://i.ibb.co/ch5C9yWT/water.png" alt="Water" style="width: 10px; height: 10px; filter: brightness(0) invert(1);" />
      </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 16],
    popupAnchor: [0, -16],
  });
};

// Create small recycling marker
const createRecyclingIcon = () => {
  return L.divIcon({
    className: 'recycling-marker',
    html: `
      <div style="
        background-color: #22c55e;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        border: 2px solid white;
        box-shadow: 0 2px 6px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
      ">
        <img src="https://i.ibb.co/kVp86RZ3/recycle.png" alt="Recycle" style="width: 10px; height: 10px; filter: brightness(0) invert(1);" />
      </div>
    `,
    iconSize: [16, 16],
    iconAnchor: [8, 16],
    popupAnchor: [0, -16],
  });
};

// Create custom cluster icon for water fountains
const createWaterClusterIcon = (cluster) => {
  const count = cluster.getChildCount();
  return L.divIcon({
    html: `
      <div style="
        background-color: #3b82f6;
        width: ${count < 10 ? '30px' : count < 100 ? '36px' : '42px'};
        height: ${count < 10 ? '30px' : count < 100 ? '36px' : '42px'};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: ${count < 100 ? '12px' : '11px'};
      ">
        ${count}
      </div>
    `,
    className: 'water-cluster-icon',
    iconSize: L.point(count < 10 ? 30 : count < 100 ? 36 : 42, count < 10 ? 30 : count < 100 ? 36 : 42),
  });
};

// Create custom cluster icon for recycling points
const createRecyclingClusterIcon = (cluster) => {
  const count = cluster.getChildCount();
  return L.divIcon({
    html: `
      <div style="
        background-color: #22c55e;
        width: ${count < 10 ? '30px' : count < 100 ? '36px' : '42px'};
        height: ${count < 10 ? '30px' : count < 100 ? '36px' : '42px'};
        border-radius: 50%;
        border: 3px solid white;
        box-shadow: 0 3px 10px rgba(0,0,0,0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        font-weight: bold;
        font-size: ${count < 100 ? '12px' : '11px'};
      ">
        ${count}
      </div>
    `,
    className: 'recycling-cluster-icon',
    iconSize: L.point(count < 10 ? 30 : count < 100 ? 36 : 42, count < 10 ? 30 : count < 100 ? 36 : 42),
  });
};

// Component to handle map zoom when business is selected
function MapController({ selectedBusiness }) {
  const map = useMap();
  
  useEffect(() => {
    if (selectedBusiness) {
      const locations = getBusinessLocations(selectedBusiness.id);
      if (locations.length > 0) {
        // Zoom to first location for businesses with multiple locations
        map.setView([locations[0].lat, locations[0].lng], 15, { animate: true });
      }
    }
  }, [selectedBusiness, map]);
  
  return null;
}

const MapView = ({ businesses, onBusinessSelect, selectedBusiness }) => {
  // State to track which categories are visible
  const [visibleCategories, setVisibleCategories] = useState({
    Hotel: true,
    Restaurant: true,
    Bakery: true,
    Cafe: true,
    waterFountains: true,
    recycling: true
  });

  // Toggle category visibility
  const toggleCategory = (category) => {
    setVisibleCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Filter businesses by visible categories
  const filteredBusinesses = businesses.filter(business => 
    visibleCategories[business.sector]
  );

  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[HK_MAP_CENTER.lat, HK_MAP_CENTER.lng]}
        zoom={HK_MAP_CENTER.zoom}
        maxZoom={19}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          maxZoom={19}
        />
        
        <MapController selectedBusiness={selectedBusiness} />
        
        {filteredBusinesses.map((business) => {
          const locations = getBusinessLocations(business.id);
          if (locations.length === 0) return null;
          
          const leafTier = LEAF_TIERS[business.leaves];
          const businessImage = getBusinessImage(business.id);
          
          // Render a marker for each location
          return locations.map((location, index) => (
            <Marker
              key={`${business.id}-${index}`}
              position={[location.lat, location.lng]}
              icon={createCustomIcon(business.sector, business.leaves)}
            >
              <Popup maxWidth={250}>
                <div className="p-1">
                  {businessImage && (
                    <div className="mb-1.5 -mx-1 -mt-1">
                      <img
                        src={businessImage}
                        alt={business.name}
                        className="w-full h-28 object-cover rounded-t"
                        onError={(e) => { e.target.style.display = 'none'; }}
                      />
                    </div>
                  )}
                  
                  <div className="space-y-1">
                    <div>
                      <h3 className="font-bold text-sm text-gray-900 leading-tight">{business.name}</h3>
                      {locations.length > 1 && (
                        <p className="text-xs text-leaf-600 font-medium">
                          Location {index + 1} of {locations.length}
                        </p>
                      )}
                      <p className="text-xs text-gray-600 mt-0.5">{business.sector}</p>
                    </div>
                    
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-center gap-0.5">
                        {[1, 2, 3].map(n => (
                          <svg
                            key={n}
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`${n <= business.leaves ? 'text-leaf-600' : 'text-gray-300'}`}
                          >
                            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path>
                            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
                          </svg>
                        ))}
                      </div>
                      <span className="text-xs font-medium text-gray-700">
                        {business.total}/100
                      </span>
                    </div>
                    
                    <div className="flex items-start gap-1.5 text-xs text-gray-600 pt-1.5 border-t border-gray-200">
                      <MapPin size={12} className="mt-0.5 flex-shrink-0" />
                      <span className="line-clamp-2">{location.address}</span>
                    </div>
                    
                    <button
                      onClick={() => onBusinessSelect(business)}
                      className="w-full mt-1.5 bg-leaf-600 text-white px-2 py-1.5 rounded text-xs font-medium hover:bg-leaf-700 transition-colors flex items-center justify-center gap-1.5"
                    >
                      View Details
                      <ExternalLink size={12} />
                    </button>
                  </div>
                </div>
              </Popup>
            </Marker>
          ));
        })}
        
        {/* Water Fountain Markers with Clustering */}
        {visibleCategories.waterFountains && (
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createWaterClusterIcon}
            maxClusterRadius={50}
            spiderfyOnMaxZoom={true}
            showCoverageOnHover={false}
            zoomToBoundsOnClick={true}
          >
            {WATER_FOUNTAINS.map((fountain, index) => (
            <Marker
              key={`fountain-${index}`}
              position={[fountain.lat, fountain.lng]}
              icon={createWaterFountainIcon()}
            >
              <Popup maxWidth={200}>
                <div className="p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplet size={16} className="text-blue-600" />
                    <h3 className="font-semibold text-sm text-gray-900">Water Fountain</h3>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">{fountain.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{fountain.district}</p>
                </div>
              </Popup>
            </Marker>
          ))}
          </MarkerClusterGroup>
        )}
        
        {/* Recycling Location Markers with Clustering */}
        {visibleCategories.recycling && (
          <MarkerClusterGroup
            chunkedLoading
            iconCreateFunction={createRecyclingClusterIcon}
            maxClusterRadius={50}
            spiderfyOnMaxZoom={true}
            showCoverageOnHover={false}
            zoomToBoundsOnClick={true}
          >
            {RECYCLING_LOCATIONS.map((location, index) => (
            <Marker
              key={`recycling-${index}`}
              position={[location.lat, location.lng]}
              icon={createRecyclingIcon()}
            >
              <Popup maxWidth={300}>
                <div className="p-2">
                  <div className="flex items-center gap-2 mb-2">
                    <Recycle size={16} className="text-green-600" />
                    <h3 className="font-semibold text-sm text-gray-900">Recycling Point</h3>
                  </div>
                  <p className="text-xs text-gray-700 font-medium">{location.name}</p>
                  <p className="text-xs text-gray-500 mt-1">{location.district}</p>
                  {location.collectionPointType && (
                    <p className="text-xs text-blue-600 mt-1 font-medium">{location.collectionPointType}</p>
                  )}
                  {location.materials && (
                    <div className="mt-2 pt-2 border-t border-gray-200">
                      <p className="text-xs text-gray-600 font-medium mb-1">Materials Accepted:</p>
                      <p className="text-xs text-gray-700">{location.materials}</p>
                    </div>
                  )}
                  {location.notes && (
                    <p className="text-xs text-gray-500 mt-2 italic">{location.notes}</p>
                  )}
                </div>
              </Popup>
            </Marker>
          ))}
          </MarkerClusterGroup>
        )}
      </MapContainer>
      
      {/* Map Legend - Now Interactive */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1000] pointer-events-auto">
        <h4 className="font-semibold text-xs text-gray-900 mb-2">Filter Map</h4>
        <div className="space-y-1.5">
          <button
            onClick={() => toggleCategory('Hotel')}
            className={`flex items-center gap-2 w-full text-left transition-opacity hover:bg-gray-50 p-1 rounded ${
              visibleCategories.Hotel ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-[#3b82f6] flex items-center justify-center">
              <img src="https://iili.io/K6JuZP4.png" alt="Hotel" className="w-4 h-4 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Hotel</span>
          </button>
          
          <button
            onClick={() => toggleCategory('Restaurant')}
            className={`flex items-center gap-2 w-full text-left transition-opacity hover:bg-gray-50 p-1 rounded ${
              visibleCategories.Restaurant ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center">
              <img src="https://iili.io/K6JuQVf.png" alt="Restaurant" className="w-4 h-4 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Restaurant</span>
          </button>
          
          <button
            onClick={() => toggleCategory('Bakery')}
            className={`flex items-center gap-2 w-full text-left transition-opacity hover:bg-gray-50 p-1 rounded ${
              visibleCategories.Bakery ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-[#f59e0b] flex items-center justify-center">
              <img src="https://iili.io/K6Jubl2.md.png" alt="Bakery" className="w-4 h-4 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Bakery</span>
          </button>
          
          <button
            onClick={() => toggleCategory('Cafe')}
            className={`flex items-center gap-2 w-full text-left transition-opacity hover:bg-gray-50 p-1 rounded ${
              visibleCategories.Cafe ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-7 h-7 rounded-full bg-[#8b5cf6] flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8h1a4 4 0 1 1 0 8h-1"/>
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/>
                <line x1="6" y1="2" x2="6" y2="4"/>
                <line x1="10" y1="2" x2="10" y2="4"/>
                <line x1="14" y1="2" x2="14" y2="4"/>
              </svg>
            </div>
            <span className="text-xs text-gray-600">Cafe</span>
          </button>
          
          <button
            onClick={() => toggleCategory('waterFountains')}
            className={`flex items-center gap-2 pt-1 border-t border-gray-200 w-full text-left transition-opacity hover:bg-gray-50 p-1 rounded ${
              visibleCategories.waterFountains ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-[#3b82f6] border-2 border-white flex items-center justify-center">
              <img src="https://i.ibb.co/ch5C9yWT/water.png" alt="Water" className="w-2.5 h-2.5 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Water Fountain</span>
          </button>
          
          <button
            onClick={() => toggleCategory('recycling')}
            className={`flex items-center gap-2 w-full text-left transition-opacity hover:bg-gray-50 p-1 rounded ${
              visibleCategories.recycling ? 'opacity-100' : 'opacity-40'
            }`}
          >
            <div className="w-4 h-4 rounded-full bg-[#22c55e] border-2 border-white flex items-center justify-center">
              <img src="https://i.ibb.co/kVp86RZ3/recycle.png" alt="Recycle" className="w-2.5 h-2.5 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Recycling Point</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MapView;
