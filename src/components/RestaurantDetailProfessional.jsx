import React, { useState } from 'react';
import { ArrowLeft, Leaf, MapPin, ExternalLink, Phone, Globe, Facebook, Instagram, Twitter, ChevronDown, ChevronUp, Building2, TrendingUp, CheckCircle } from 'lucide-react';
import { BUSINESSES, CRITERIA, LEAF_TIERS } from '../data.js';
import clsx from 'clsx';

function LeafIcons({ leaves }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3].map(n => (
        <Leaf key={n} className={clsx(
          "w-5 h-5",
          n <= leaves ? "text-leaf-700" : "text-neutral-300"
        )} />
      ))}
    </div>
  )
}

function CollapsibleSection({ title, children, defaultExpanded = false }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded);

  return (
    <div className="border border-neutral-200 rounded-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-6 py-4 text-left bg-neutral-50 hover:bg-neutral-100 transition-colors flex items-center justify-between rounded-t-lg"
      >
        <h3 className="text-lg font-semibold text-neutral-900">{title}</h3>
        {isExpanded ? 
          <ChevronUp className="h-5 w-5 text-neutral-500" /> : 
          <ChevronDown className="h-5 w-5 text-neutral-500" />
        }
      </button>
      
      {isExpanded && (
        <div className="px-6 py-6 bg-white border-t border-neutral-100">
          {children}
        </div>
      )}
    </div>
  );
}

function ScoreBreakdown({ scores, upgradeRecommendations }) {
  const getScoreColor = (score) => {
    if (score >= 8) return 'text-leaf-dark bg-leaf-light border-leaf-medium';
    if (score >= 5) return 'text-yellow-700 bg-yellow-100 border-yellow-300';
    return 'text-red-700 bg-red-100 border-red-300';
  };

  const getScoreDescription = (score) => {
    if (score >= 8) return 'Strong Performance';
    if (score >= 5) return 'Developing';
    return 'Basic Level';
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(scores).map(([key, value]) => {
          const criterion = CRITERIA.find(c => c.key === key)
          if (!criterion) return null;
          
          return (
            <div key={key} className={`rounded-xl border-2 p-6 ${getScoreColor(value)} transition-all hover:shadow-md`}>
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-base">{criterion.name}</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-3xl">{value}</span>
                  <span className="text-sm font-medium opacity-75">/ 10</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold opacity-75">{getScoreDescription(value)}</span>
                <div className="w-24 bg-white bg-opacity-50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-current opacity-75 transition-all duration-500" 
                    style={{ width: `${(value / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-sm opacity-80 leading-relaxed">{criterion.description}</p>
            </div>
          )
        })}
      </div>

      {/* Upgrade Recommendations */}
      {upgradeRecommendations && upgradeRecommendations.length > 0 && (
        <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h4 className="font-bold text-blue-900 mb-4 flex items-center gap-2 text-lg">
            <TrendingUp size={20} />
            Improvement Opportunities
          </h4>
          <ul className="space-y-3 text-blue-800">
            {upgradeRecommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-blue-600 mt-1 font-bold">•</span>
                <span className="leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

const RestaurantDetail = ({ restaurantId, onClose }) => {
  const restaurant = BUSINESSES.find(b => b.id === restaurantId);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen bg-neutral-50">
        <div className="max-w-4xl mx-auto py-16 px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <Building2 size={64} className="mx-auto mb-4 text-neutral-400" />
            <h1 className="text-2xl font-bold text-neutral-900 mb-4">Venue Not Found</h1>
            <p className="text-neutral-600 mb-6">The requested venue could not be found in our database.</p>
            <button 
              onClick={onClose}
              className="inline-flex items-center gap-2 px-4 py-2 bg-leaf-600 text-white rounded-lg hover:bg-leaf-700 transition-colors"
            >
              <ArrowLeft size={16} />
              Return to Guide
            </button>
          </div>
        </div>
      </div>
    );
  }

  const leafTier = LEAF_TIERS[restaurant.leaves];

  // Real business data
  const getBusinessData = (id) => {
    const businessData = {
      'hotel-icon': {
        address: '17 Science Museum Road, Tsim Sha Tsui East, Kowloon, Hong Kong',
        phone: '+852 3400 1000',
        website: 'https://www.hotel-icon.com',
        image: '/src/assets/images/hotel-icon.jpg',
        social: {
          facebook: 'https://www.facebook.com/HotelICON'
        },
        about: 'Hotel ICON is a contemporary teaching and research hotel owned by PolyU, located in the heart of Tsim Sha Tsui East. As Hong Kong\'s first teaching hotel, we combine world-class hospitality with cutting-edge sustainability practices. Our Go Green initiative features innovative technologies including Hong Kong\'s first electric hotel shuttle, on-site food waste processing, and comprehensive water conservation systems, making us a leader in sustainable hospitality.'
      },
            'four-seasons-hk': {
        address: '8 Finance Street, Central, Hong Kong',
        phone: '+852 3196 8888',
        website: 'https://www.fourseasons.com/hongkong',
        image: '/src/assets/images/four-seasons.jpg',
        social: {
          facebook: 'https://www.facebook.com/FourSeasonsHongKong'
        },
        about: 'Four Seasons Hotel Hong Kong epitomizes luxury hospitality while leading the industry in environmental responsibility. Our comprehensive sustainability program includes innovative waste reduction initiatives, energy-efficient technologies, and partnerships with local organic farms. Located in the heart of Central, we offer guests unparalleled service and amenities while maintaining our commitment to protecting Hong Kong\'s natural environment for future generations.'
      },
            'peninsula-hk': {
        address: 'Salisbury Road, Tsim Sha Tsui, Kowloon, Hong Kong',
        phone: '+852 2920 2888',
        website: 'https://www.peninsula.com/hong-kong',
        image: '/src/assets/images/peninsula.jpg',
        social: {
          facebook: 'https://www.facebook.com/ThePeninsulaHongKong'
        },
        about: 'The Peninsula Hong Kong has been the epitome of luxury and service excellence since 1928. Our Green Peninsula initiative demonstrates our commitment to environmental stewardship through comprehensive sustainability practices including energy conservation, waste reduction, and sustainable sourcing. As Hong Kong\'s grand dame hotel, we continue to set the standard for luxury hospitality while actively contributing to the preservation of our beautiful harbor city.'
      },
      'rosewood-hk': {
        address: '18 Salisbury Road, Tsim Sha Tsui, Kowloon, Hong Kong',
        phone: '+852 3891 8888',
        website: 'https://www.rosewoodhotels.com/hongkong',
        image: '/src/assets/images/rosewood.jpg',
        social: {
          instagram: '@rosewoodhk'
        },
        about: 'Rosewood Hong Kong is an ultra-luxury hotel that celebrates the artistic and cultural spirit of Hong Kong. Housed in a LEED Gold certified building, we integrate sustainability into every aspect of our operations. Our Staycation for Good program combines luxury hospitality with meaningful community engagement, while our sustainable practices reflect our commitment to responsible luxury and environmental stewardship.'
      },
      'ovolo-hotels': {
        address: 'Multiple locations across Hong Kong',
        phone: '+852 5705 5388',
        website: 'https://ovolohotels.com',
        image: '/src/assets/images/ovolo.jpg',
        social: {
          facebook: 'https://www.facebook.com/OvoloHotels',
          instagram: '@ovolohotels'
        },
        about: 'Ovolo Hotels Hong Kong is a vibrant collection of boutique hotels that challenge conventional hospitality norms. Our Do Good Feel Good philosophy drives our comprehensive sustainability initiatives, including our groundbreaking Year of the Veg plant-forward dining program, plastic-free initiatives, and community partnerships. We believe that staying at Ovolo should be fun, memorable, and responsible.'
      },
      'nina-hotel': {
        address: '8 Yeung Uk Road, Tsuen Wan, New Territories, Hong Kong',
        phone: '+852 2280 2898',
        website: 'https://www.ninahotelgroup.com',
        image: '/src/assets/images/nina.jpg',
        social: {
          facebook: 'https://www.facebook.com/NinaHotelGroup'
        },
        about: 'Nina Hotel Tsuen Wan West is part of the innovative Nina Tower complex, pioneering sustainable hospitality in the New Territories. Our zero-carbon chiller system represents a breakthrough in hotel energy efficiency, reducing electricity consumption by over 50% and avoiding 7,000 tonnes of CO2 annually. We demonstrate that modern hospitality can achieve exceptional guest comfort while leading the way in environmental innovation.'
      },
      'amber-restaurant': {
        address: '7/F, The Landmark Mandarin Oriental, 15 Queen\'s Road Central, Hong Kong',
        phone: '+852 2132 0066',
        website: 'https://www.mandarinoriental.com/en/hong-kong/the-landmark/dine/amber',
        image: '/src/assets/images/amber.jpg',
        social: {
          instagram: '@amberrestaurant'
        },
        about: 'Amber is a three-Michelin-starred restaurant that exemplifies culinary excellence and environmental responsibility. Under Chef Richard Ekkebus\'s leadership, we have earned the coveted Michelin Green Star for our sustainable practices. Our commitment to seasonal, locally-sourced ingredients and innovative cooking techniques creates extraordinary dining experiences while minimizing our environmental footprint. We believe that exceptional cuisine and sustainability are inseparable.'
      },
      'roganic-restaurant': {
        address: 'UG/F, Causeway Bay Plaza 2, 463-483 Lockhart Road, Causeway Bay, Hong Kong',
        phone: '+852 2817 8383',
        website: 'https://www.roganic.com.hk',
        image: '/src/assets/images/roganic.jpg',
        social: {
          facebook: 'https://www.facebook.com/RoganicHK',
          instagram: '@roganic_hk'
        },
        about: 'Roganic Hong Kong brings Chef Simon Rogan\'s innovative farm-to-table philosophy to Asia, earning a Michelin Green Star for our sustainable practices. Our zero-waste kitchen approach, urban farming initiatives, and partnerships with local producers demonstrate our commitment to responsible dining. We create extraordinary culinary experiences that celebrate the natural world while protecting it for future generations.'
      },
      'mono-restaurant': {
        address: 'G/F, 5-6 Wing Fung Street, Wan Chai, Hong Kong',
        phone: '+852 9726 9301',
        website: 'https://www.mono.hk',
        image: '/src/assets/images/mono.jpg',
        social: {
          instagram: '@mono.hk'
        },
        about: 'MONO is a contemporary Latin American restaurant that champions eco-conscious dining in Hong Kong. Our innovative approach includes Nordaq filtration systems to eliminate bottled water, biodegradable packaging, and seed-paper receipts that grow into plants. Chef Ricardo Chaneton\'s seasonal menu celebrates Latin American flavors while demonstrating that exceptional dining and environmental responsibility can work in perfect harmony.'
      },
      'baker-bottleman': {
        address: 'G/F, 1-5 Wan Chai Road, Wan Chai, Hong Kong',
        phone: '+852 2386 8933',
        website: 'https://thebakerandthebottleman.hk',
        image: '/src/assets/images/baker-bottleman.jpg',
        social: {
          instagram: '@bakerbottlemanhk'
        },
        about: 'The Baker & The Bottleman is a pioneering sustainable bakery and wine bar in the heart of Wan Chai. Our commitment to environmental responsibility includes plastic-free FSC packaging, in-store waste sorting, and partnerships with local suppliers. We believe that great bread, exceptional wine, and environmental stewardship create the perfect recipe for a better future, one meal at a time.'
      }
    };
    
    return businessData[id] || {};
  };

  const businessData = getBusinessData(restaurant.id);

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Navigation Header */}
        <div className="bg-white border-b border-neutral-200 px-6 py-4 sticky top-0 z-10">
          <div className="flex items-center justify-between">
            <button 
              onClick={onClose}
              className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
            >
              <ArrowLeft size={20} />
              Back to Guide
            </button>
            <div className="text-sm text-neutral-500">
              Sustainability Assessment • {new Date().getFullYear()}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-white">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left: Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl border border-leaf-300 overflow-hidden">
                {businessData.image ? (
                  <img 
                    src={businessData.image} 
                    alt={restaurant.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-leaf-100 to-leaf-200 flex items-center justify-center">
                    <div className="text-center text-leaf-700">
                      <Building2 size={64} className="mx-auto mb-4 opacity-60" />
                      <div className="text-xl font-bold mb-1">{restaurant.name}</div>
                      <div className="text-sm opacity-75">{restaurant.sector} • {restaurant.district}</div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Rating Badge Overlay */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-neutral-200">
                <div className="flex items-center gap-2 mb-2">
                  <LeafIcons leaves={restaurant.leaves} />
                  <span className="font-bold text-leaf-700">{leafTier.name}</span>
                </div>
                <div className="text-3xl font-bold text-neutral-900">{restaurant.total}</div>
                <div className="text-xs text-neutral-500 uppercase font-medium">/ 100 Points</div>
              </div>
            </div>

            {/* Right: Business Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-4 leading-tight">{restaurant.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-lg mb-6">
                  <span className="flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-full font-medium">
                    <Building2 size={18} />
                    {restaurant.sector}
                  </span>
                  <span className="flex items-center gap-2 text-neutral-600">
                    <MapPin size={18} />
                    {restaurant.district}
                  </span>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-neutral-900">Contact Information</h3>
                
                <div className="flex items-center gap-3 text-neutral-700">
                  <MapPin size={18} className="text-neutral-500" />
                  <span>{businessData.address}</span>
                </div>
                
                <div className="flex items-center gap-3 text-neutral-700">
                  <Phone size={18} className="text-neutral-500" />
                  <span>{businessData.phone}</span>
                </div>
                
                <div className="flex items-center gap-3 text-neutral-700">
                  <Globe size={18} className="text-neutral-500" />
                  <a href={businessData.website} target="_blank" rel="noopener noreferrer" className="text-leaf-600 hover:text-leaf-700 transition-colors">
                    {businessData.website}
                  </a>
                </div>

                {businessData.social && (businessData.social.facebook || businessData.social.instagram) && (
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-sm text-neutral-500">Follow us:</span>
                    <div className="flex items-center gap-3">
                      {businessData.social.facebook && (
                        <a href={businessData.social.facebook} target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-blue-600 transition-colors">
                          <Facebook size={20} />
                        </a>
                      )}
                      {businessData.social.instagram && (
                        <a href="#" className="text-neutral-400 hover:text-pink-600 transition-colors">
                          <Instagram size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-white border-t border-neutral-200 p-8">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">About the Business</h2>
          <p className="text-lg text-neutral-700 leading-relaxed max-w-4xl">
            {businessData.about}
          </p>
        </div>

        {/* Collapsible Sections at Bottom */}
        <div className="p-8 space-y-4">
          <CollapsibleSection title="Scoring Breakdown">
            <ScoreBreakdown 
              scores={restaurant.scores} 
              upgradeRecommendations={restaurant.upgradeRecommendations}
            />
          </CollapsibleSection>

          <CollapsibleSection title="Supporting Evidence">
            <div className="grid gap-4">
              {restaurant.evidence.map((evidence, index) => (
                <div key={index} className="flex items-start gap-4 p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                  <div className="bg-leaf-100 rounded-full p-2 shrink-0">
                    <CheckCircle size={16} className="text-leaf-600" />
                  </div>
                  <p className="text-neutral-700 leading-relaxed">{evidence}</p>
                </div>
              ))}
            </div>
          </CollapsibleSection>

          <CollapsibleSection title="Sources & References">
            <div className="grid gap-4">
              {restaurant.sources.map((source, index) => (
                <a
                  key={index}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-6 bg-neutral-50 border border-neutral-200 rounded-lg hover:border-leaf-300 hover:bg-leaf-50 transition-colors group"
                >
                  <div className="flex-1">
                    <div className="font-semibold text-neutral-900 group-hover:text-leaf-800 mb-1">
                      {source.title}
                    </div>
                    <div className="text-sm text-neutral-500">
                      {source.year} • {new URL(source.url).hostname}
                    </div>
                  </div>
                  <ExternalLink size={20} className="text-neutral-400 group-hover:text-leaf-600 ml-4" />
                </a>
              ))}
            </div>
          </CollapsibleSection>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;