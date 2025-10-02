// Business image mappings
export const BUSINESS_IMAGES = {
  'hotel-icon': '/src/assets/images/hotel-icon.jpg',
  'four-seasons-hk': '/src/assets/images/four-seasons.jpg',
  'peninsula-hk': '/src/assets/images/peninsula.jpg',
  'rosewood-hk': '/src/assets/images/rosewood.jpg',
  'ovolo-hotels': '/src/assets/images/ovolo.jpg',
  'nina-hotel': '/src/assets/images/nina.jpg',
  'amber-restaurant': '/src/assets/images/amber.jpg',
  'roganic-restaurant': '/src/assets/images/roganic.jpg',
  'mono-restaurant': '/src/assets/images/mono.jpg',
  'baker-bottleman': '/src/assets/images/baker-bottleman.jpg'
};

export const getBusinessImage = (businessId) => {
  return BUSINESS_IMAGES[businessId] || null;
};