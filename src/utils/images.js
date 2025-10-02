// Business image mappings with fallback URLs
export const BUSINESS_IMAGES = {
  'hotel-icon': 'https://www.hkbio.org.hk/hkbh2017/images/hotel/Hotel-ICON.jpg',
  'four-seasons-hk': 'https://www.fourseasons.com/content/dam/fourseasons/images/web/HKG/HKG_1632_original.jpg',
  'peninsula-hk': 'https://www.peninsula.com/-/media/01-hong-kong-property/exterior-2_1440.jpg',
  'rosewood-hk': 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/168953041.jpg?k=59dbc371424d6434006ca7e3fe4ae2a1ec15c63002cc9c7e15bb740340f852d1&o=&hp=1',
  'ovolo-hotels': 'https://ovolohotels.com/ovolo/southside/wp-content/themes/wonderful/assets/img/newbooking/southside.jpg',
  'nina-hotel': 'https://partnernet.hktb.com/filemanager/company/1160/image/27319_2.%20Nina%20TW%20West_Premier%20Harbour%20View%20King_R.jpg',
  'amber-restaurant': 'https://assets-us-01.kc-usercontent.com/9e9a95c0-1d15-00d5-e878-50f070203f13/0c289ca9-3bec-4a6a-aa95-c6df3c5df3a4/amber-slider-1.jpg',
  'roganic-restaurant': 'https://sr-images.eu-central-1.linodeobjects.com/Roganic-HK/20250214-Roganic_020.jpg',
  'mono-restaurant': 'https://images.squarespace-cdn.com/content/v1/63d223fd0cb2274e46becec1/5e0b2258-08c4-41c1-991a-2002d7dc06c6/Mono+Chef+Counter.JPG',
  'baker-bottleman': 'https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0f/75/storefront.jpg'
};

export const getBusinessImage = (businessId) => {
  return BUSINESS_IMAGES[businessId] || null;
};

// Helper function to handle image loading errors
export const handleImageError = (event) => {
  // If the primary image fails, we could add additional fallback logic here
  console.warn('Image failed to load:', event.target.src);
  event.target.style.display = 'none';
  // Show the default icon placeholder instead
};