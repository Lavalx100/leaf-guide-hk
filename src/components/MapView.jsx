import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { MapPin, ExternalLink, Hotel, UtensilsCrossed, Coffee } from 'lucide-react';
import L from 'leaflet';
import { LEAF_TIERS } from '../data.js';
import { getBusinessLocations, HK_MAP_CENTER } from '../utils/locations.js';
import { getBusinessImage } from '../utils/images.js';
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
      icon: '/src/assets/Symbols/hotel.png', 
      color: '#3b82f6' 
    },
    'Restaurant': { 
      icon: '/src/assets/Symbols/restaurant.png', 
      color: '#ef4444' 
    },
    'Bakery': { 
      icon: '/src/assets/Symbols/bakery.png', 
      color: '#f59e0b' 
    },
    'Cafe': { 
      icon: '/src/assets/Symbols/cafe.png', 
      color: '#8b5cf6' 
    }
  };
  return icons[sector] || { 
    icon: '/src/assets/Symbols/restaurant.png', 
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
  return (
    <div className="h-full w-full relative">
      <MapContainer
        center={[HK_MAP_CENTER.lat, HK_MAP_CENTER.lng]}
        zoom={HK_MAP_CENTER.zoom}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <MapController selectedBusiness={selectedBusiness} />
        
        {businesses.map((business) => {
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
                          <span
                            key={n}
                            className={`text-sm ${n <= business.leaves ? 'opacity-100' : 'opacity-30'}`}
                          >
                            🍃
                          </span>
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
      </MapContainer>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-lg p-3 z-[1000] pointer-events-auto">
        <h4 className="font-semibold text-xs text-gray-900 mb-2">Business Types</h4>
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#3b82f6] flex items-center justify-center">
              <img src="/src/assets/Symbols/hotel.png" alt="Hotel" className="w-4 h-4 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Hotel</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#ef4444] flex items-center justify-center">
              <img src="/src/assets/Symbols/restaurant.png" alt="Restaurant" className="w-4 h-4 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Restaurant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#f59e0b] flex items-center justify-center">
              <img src="/src/assets/Symbols/bakery.png" alt="Bakery" className="w-4 h-4 brightness-0 invert" />
            </div>
            <span className="text-xs text-gray-600">Bakery</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
