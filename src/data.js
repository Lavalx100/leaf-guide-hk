// Criteria kept as provided. Ladders are the source of truth for scoring.

export const CRITERIA = [
  { 
    key: 'governance', 
    name: 'Governance & public targets', 
    max: 10, 
    description: 'Public sustainability policies, time-bound targets, ESG reporting with baselines and progress tracking.',
    ladder: {
      0: 'No page or targets',
      4: 'Policy page or CSR paragraph',
      7: 'Time-bound targets or roadmap on group site',
      9: 'Property page with goals or brand report naming HK property',
      10: 'Annual ESG report with baselines and progress in last 2 years'
    }
  },
  { 
    key: 'legal', 
    name: 'Legal readiness & risk', 
    max: 10, 
    description: 'Compliance with Hong Kong regulations on plastics, food safety, and environmental standards.',
    ladder: {
      0: 'No information',
      4: 'General compliance mentions',
      7: 'Visible policies matching HK rules on plastics, shark fin, food safety',
      10: 'Policies plus property proof in menus, amenity pages, or press'
    }
  },
  { 
    key: 'energy', 
    name: 'Energy & carbon', 
    max: 10, 
    description: 'Energy efficiency, renewable energy procurement, carbon reduction projects with measurable impact.',
    ladder: {
      0: 'No information',
      5: 'Any project or claim, or renewable purchasing mention',
      8: 'Documented project at property, or group project applied in HK',
      10: 'Quantified reductions or verified project partner naming the site'
    }
  },
  { 
    key: 'water', 
    name: 'Water stewardship', 
    max: 10, 
    description: 'Water conservation, filtration systems, reuse programs with property-wide implementation.',
    ladder: {
      0: 'No information',
      5: 'Linen reuse or generic saving tips',
      8: 'Property filtration or refill system, or water-saving tech with photos',
      10: 'Measured savings or program details covering whole property'
    }
  },
  { 
    key: 'waste', 
    name: 'Waste & circularity', 
    max: 10, 
    description: 'Waste reduction, recycling programs, circular economy initiatives with measurable outcomes.',
    ladder: {
      0: 'No information',
      5: 'Policy or partner named',
      8: 'Property initiative in operation, even without tonnage',
      10: 'Tonnage, technology specs, or partner stats naming the site'
    }
  },
  { 
    key: 'food', 
    name: 'Food & beverage sustainability', 
    max: 10, 
    description: 'Sustainable sourcing, plant-forward menus, food waste reduction, recognized sustainable dining practices.',
    ladder: {
      0: 'No information',
      5: 'Plant-forward options or sustainable seafood policy',
      8: 'Sustained plant-focused program, award, or menu notes showing practice',
      10: 'Recognized sustainable dining award or measured impact on food waste'
    }
  },
  { 
    key: 'sourcing', 
    name: 'Responsible sourcing & materials', 
    max: 10, 
    description: 'Sustainable procurement, material choices, supply chain standards with third-party verification.',
    ladder: {
      0: 'No information',
      5: 'Plastic reduction or bulk amenities',
      8: 'Verified shifts in materials across rooms, bars, spa, packaging',
      10: 'Third-party material labels in use, or supply code with audits'
    }
  },
  { 
    key: 'community', 
    name: 'Community & biodiversity', 
    max: 10, 
    description: 'Local community programs, biodiversity conservation, partnerships with measurable outcomes.',
    ladder: {
      0: 'No information',
      5: 'Ongoing NGO program or donations relevant to HK',
      8: 'Recurring local program with outputs, or HK biodiversity work',
      10: 'Quantified community or biodiversity outcomes'
    }
  },
  { 
    key: 'guest', 
    name: 'Guest engagement & transparency', 
    max: 10, 
    description: 'Guest education, transparent reporting, consumer-facing sustainability information.',
    ladder: {
      0: 'No information',
      5: 'Property page with clear guest touchpoints',
      8: 'Programming involving guests or detailed property reporting',
      10: 'Independently verified consumer-facing disclosure for the site'
    }
  },
  { 
    key: 'recognition', 
    name: 'Recognition & certification', 
    max: 10, 
    description: 'Third-party certifications, awards, and recognition from credible sustainability organizations.',
    ladder: {
      0: 'None',
      3: 'Relevant award or label',
      5: 'GSTC-aligned certification, ISO 14001/50001, or MICHELIN Green Star',
      10: 'Multiple certifications or prestigious sustainability awards'
    }
  }
];

export const LEAF_TIERS = {
  1: { min: 50, max: 64, name: '1 Leaf', description: 'Foundational sustainability practices with basic policies and some active initiatives.' },
  2: { min: 65, max: 79, name: '2 Leaves', description: 'Strong sustainability performance with documented programs and measurable progress.' },
  3: { min: 80, max: 100, name: '3 Leaves', description: 'Leadership-level sustainability with verified impacts, comprehensive programs, and innovation.' }
};

// Added a few missing badges so UI labels match the evidence exactly.
export const BADGES = {
  'Food waste tech': { category: 'Food', description: 'On-site food waste processing technology' },
  'AI food waste tracking': { category: 'Food', description: 'AI-powered food waste monitoring systems' },
  'Food rescue': { category: 'Food', description: 'Food surplus redistribution programs' },
  'Plant-forward menus': { category: 'Food', description: 'Vegetarian or plant-based menu focus' },
  'Dairy-free menu': { category: 'Food', description: 'Dairy-free menu design' },
  'Zero-waste kitchen': { category: 'Food', description: 'Near-zero food waste operations' },
  'Local farms': { category: 'Food', description: 'Local farm sourcing partnerships' },

  'Plastic-lite rooms': { category: 'Waste', description: 'Reduced single-use plastics in guest rooms' },
  'ecoSPIRITS': { category: 'Waste', description: 'Low-impact spirit packaging system' },
  'Soap upcycling': { category: 'Waste', description: 'Amenity recycling and upcycling programs' },
  'Plastics phase-out': { category: 'Waste', description: 'Systematic elimination of single-use plastics' },
  'Shell recycling': { category: 'Waste', description: 'Marine habitat restoration through shell recycling' },
  'No disposables': { category: 'Waste', description: 'Elimination of disposable items' },
  'Seed-paper receipts': { category: 'Waste', description: 'Plantable receipt paper' },
  'Plastic-free packaging': { category: 'Waste', description: 'Complete elimination of plastic packaging' },
  'In-store sorting': { category: 'Waste', description: 'Customer-facing waste sorting systems' },

  'EV shuttle': { category: 'Energy', description: 'Electric vehicle transportation' },
  'Zero-carbon chiller': { category: 'Energy', description: 'Zero-carbon cooling technology' },
  'Solar power': { category: 'Energy', description: 'On-site solar generation' },

  'Filtered water': { category: 'Water', description: 'On-site water filtration to avoid bottled water' },

  'ISO systems': { category: 'Governance', description: 'ISO 14001 or 50001 certification' },
  'ESG reporting': { category: 'Governance', description: 'Recent ESG or sustainability progress report' },

  'Guest education': { category: 'Community', description: 'Sustainability education programs for guests' },
  'Donations': { category: 'Community', description: 'Food donation programs' },

  'Michelin Green Star': { category: 'Food', description: 'Michelin Guide sustainability recognition' }
};

export const BUSINESSES = [
  {
    id: 'hotel-icon',
    name: 'Hotel ICON',
    sector: 'Hotel',
    district: 'Tsim Sha Tsui East',
    badges: ['Food waste tech', 'EV shuttle', 'Solar power', 'Filtered water', 'Plastic-lite rooms', 'Soap upcycling', 'Donations'],
    evidence: [
      'Governance: Go Green hub and 2022 sustainability message referencing Race to Zero intent. Source: Hotel ICON Go Green; PolyU case.',
      'Legal: Property materials show plastics reduction and responsible seafood positioning consistent with HK rules. Source: Hotel ICON Go Green.',
      'Energy: 100 percent electric fleet with first electric hotel shuttle bus. Solar panels serving vertical garden and The Market. Source: Hotel ICON Go Green.',
      'Water: In-room filtered water taps and refill sets across rooms. Source: Hotel ICON Go Green.',
      'Waste: ORCA on-site digestion with quantified outcomes 285 tonnes per year and 135,000 litres water recycled. Source: Thinking Green press release.',
      'Food: Early plant-forward leadership via Impossible Burger launch noted on Go Green and case study. Source: Go Green; PolyU case.',
      'Sourcing: Bulk amenities, cotton laundry bags, and sustainable room amenity choices. Source: Go Green.',
      'Community: Partnerships with Food Angel and Soap Cycling called out by hotel communications. Source: Go Green and hotel blog.',
      'Guest: Guest-facing sustainability content and room touchpoints described on Go Green site. Source: Go Green.',
      'Recognition: Innovation and sustainability features highlighted in case study and awards mentions. Source: PolyU case.'
    ],
    keyEvidence: 'Property-level tech and quantified waste-water impact from ORCA, electric fleet, and refill water are clearly published.',
    notes: 'Model property in HK with measurable outcomes and visible guest touchpoints.',
    scores: { governance: 9, legal: 7, energy: 10, water: 10, waste: 10, food: 8, sourcing: 8, community: 8, guest: 7, recognition: 7 },
    total: 84, // 9+7+10+10+10+8+8+8+7+7
    leaves: 3,
    confidence: 'High',
    upgradeRecommendations: [
      'Pursue GSTC or ISO certification to lift recognition toward 10.',
      'Publish a short annual update on quantified community outcomes.',
      'Add a guest-facing mini dashboard with key metrics.'
    ],
    sources: [
      { title: 'Go Green at Hotel ICON', url: 'https://www.hotel-icon.com/about-the-hotel/go-green', year: 2019 },
      { title: 'Thinking Green Press Release', url: 'https://www.hotel-icon.com/public/release/images/2/20180222_Thinking%20Green_EN.pdf', year: 2018 },
      { title: 'PolyU Case Study', url: 'https://ira.lib.polyu.edu.hk/bitstream/10397/89890/1/a0817-n03_1859.pdf', year: 2020 }
    ]
  },
  {
    id: 'four-seasons-hk',
    name: 'Four Seasons Hotel Hong Kong',
    sector: 'Hotel',
    district: 'Central',
    badges: ['AI food waste tracking', 'ecoSPIRITS', 'ESG reporting', 'Food rescue'],
    evidence: [
      'Governance: 2024 Progress Report with baselines and goals; brand-level governance in place. Source: 2024 Progress Report.',
      'Legal: Responsible seafood and plastics approach align with HK rules, reported on property site. Source: FS HK Sustainability.',
      'Energy: Efficiency measures and decarbonization direction at group with application to HK. Source: 2024 Progress Report.',
      'Water: No propertywide filtration disclosed; standard conservation steps mentioned. Source: FS HK Sustainability.',
      'Waste: Lumitics AI food-waste tracking on site; ecoSPIRITS reduces single-use glass. Source: FS HK Sustainability; ecoSPIRITS release.',
      'Food: Menu design and bar program to minimize waste; plant-forward options available. Source: FS HK Sustainability.',
      'Sourcing: Supplier standards referenced at group level; applied at property. Source: 2024 Progress Report.',
      'Community: Food donation partners listed on property sustainability page. Source: FS HK Sustainability.',
      'Guest: Public page with clear initiatives for guest awareness. Source: FS HK Sustainability.',
      'Recognition: Limited third-party certifications mentioned at property level. Source: FS HK Sustainability.'
    ],
    keyEvidence: 'Lumitics deployment and ecoSPIRITS partnership show concrete waste progress at property level.',
    notes: 'Strong on governance and waste tech. Water transparency is the main gap.',
    scores: { governance: 10, legal: 7, energy: 8, water: 6, waste: 9, food: 8, sourcing: 7, community: 6, guest: 6, recognition: 4 },
    total: 71,
    leaves: 2,
    confidence: 'High',
    upgradeRecommendations: [
      'Install and publish propertywide refill water program.',
      'Disclose energy savings or renewable procurement for HK.',
      'Pursue a property certification such as EarthCheck or GSTC-recognized.'
    ],
    sources: [
      { title: 'Four Seasons Hong Kong Sustainability', url: 'https://www.fourseasons.com/hongkong/sustainability/', year: 2024 },
      { title: 'Four Seasons partners with ecoSPIRITS', url: 'https://ecospirits.global/four-seasons-hotels-resorts-partners-with-ecospirits/', year: 2020 },
      { title: '2024 Progress Report', url: 'https://www.fourseasons.com/content/dam/fourseasons/images/web/PDFs/2024-Progress-Report.pdf', year: 2024 }
    ]
  },
  {
    id: 'peninsula-hk',
    name: 'The Peninsula Hong Kong',
    sector: 'Hotel',
    district: 'Tsim Sha Tsui',
    badges: ['Plastics phase-out', 'ISO systems', 'Whole-building energy tracking', 'Bee conservation'],
    evidence: [
      'Governance: HSH 2024 CRS Report with portfolio baselines and progress. Source: HSH 2024 CRS.',
      'Legal: Policies on plastics and seafood consistent with HK regulations. Source: Sustainable Luxury page.',
      'Energy: EarthCheck assessment and energy monitoring at the property. Source: HSH and property materials.',
      'Water: EarthCheck tracking and conservation noted. Source: HSH CRS; Sustainable Luxury.',
      'Waste: Reduction programs mentioned; scope for more quantified diversion. Source: Sustainable Luxury.',
      'Food: Sustainable seafood commitment and menu improvements. Source: Sustainable Luxury.',
      'Sourcing: Supplier standards and responsible material choices. Source: HSH CRS.',
      'Community: Rooftop bee conservation and related education. Source: property brand pages.',
      'Guest: Consumer-facing sustainability information at brand and property level. Source: Sustainable Luxury.',
      'Recognition: EarthCheck plus group ISO systems. Source: HSH CRS.'
    ],
    keyEvidence: 'Third-party EarthCheck assessment and HSH reporting anchor transparency.',
    notes: 'Very strong governance and recognition. Next step is deeper waste metrics.',
    scores: { governance: 10, legal: 8, energy: 8, water: 7, waste: 7, food: 6, sourcing: 7, community: 8, guest: 7, recognition: 9 },
    total: 77,
    leaves: 2,
    confidence: 'High',
    upgradeRecommendations: [
      'Publish property food waste tonnage or diversion rate.',
      'Share local sourcing percentages for key categories.',
      'Add guest-facing metric snapshots on the site.'
    ],
    sources: [
      { title: 'Sustainable Luxury', url: 'https://www.peninsula.com/en/global-pages/sustainable-luxury', year: 2024 },
      { title: 'HSH 2024 CRS Report', url: 'https://www.hshgroup.com/-/media/files/hsh/sustainability-reports/2024/2024-crs-report-en.pdf', year: 2024 }
    ]
  },
  {
    id: 'rosewood-hk',
    name: 'Rosewood Hong Kong',
    sector: 'Hotel',
    district: 'Tsim Sha Tsui',
    badges: ['LEED Gold', 'Guest education'],
    evidence: [
      'Governance: Sustainability section outlines initiatives. Source: Rosewood HK Impacts page.',
      'Legal: General compliance and plastics actions reflected in brand comms. Source: Impacts page.',
      'Energy: LEED Gold base building performance supports efficiency. Source: external feature.',
      'Water: Standard conservation steps referenced. Source: Impacts page.',
      'Waste: Limited quantitative disclosure at property level. Source: Impacts page.',
      'Food: Partnerships and menu efforts mentioned. Source: Impacts page.',
      'Sourcing: General commitments in brand materials. Source: Impacts page.',
      'Community: Staycation for Good program with NGO partners. Source: Press release.',
      'Guest: Programming and education via Staycation for Good. Source: Press release.',
      'Recognition: LEED Gold for building. Source: external feature.'
    ],
    keyEvidence: 'LEED Gold provides strong base. Guest learning is a differentiator.',
    notes: 'Opportunity to publish metrics and supply chain detail.',
    scores: { governance: 7, legal: 6, energy: 7, water: 6, waste: 6, food: 6, sourcing: 6, community: 7, guest: 7, recognition: 7 },
    total: 65,
    leaves: 2,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Publish energy and water intensity data for the property.',
      'Add food waste diversion numbers or partner metrics.',
      'Consider EarthCheck or equivalent certification.'
    ],
    sources: [
      { title: 'Rosewood Hong Kong Impacts', url: 'https://www.rosewoodhotels.com/en/hong-kong/overview/impacts', year: 2024 },
      { title: 'Staycation for Good', url: 'https://www.rosewoodhotels.com/en/hong-kong/media/press/2021/rosewood-hong-kong-further-its-sustainability-commitment-with-the-launch-of-a-quarterly-staycation-for-good', year: 2021 }
    ]
  },
  {
    id: 'ovolo-hotels',
    name: 'Ovolo Hotels Hong Kong',
    sector: 'Hotel',
    district: 'Multiple',
    badges: ['Plant-forward menus', 'Plastics phase-out', 'Donations', 'Guest education'],
    evidence: [
      'Governance: ESG sustainability policy published. Source: ESG Sustainability Policy PDF.',
      'Legal: Removal of plastic water bottles and related policies align with HK rules. Source: ESG Policy.',
      'Energy: General efficiency and digitalization. Source: ESG Policy.',
      'Water: Plastic-bottle removal plus refill provisioning. Source: ESG Policy.',
      'Waste: Plastic reduction and operational waste focus. Source: ESG Policy.',
      'Food: Year of the Veg and Plant’d programs make vegetarian-first dining. Source: Year of the Veg media release.',
      'Sourcing: Supplier and packaging improvements. Source: ESG Policy.',
      'Community: Do Good Feel Good donations and local programs. Source: program page.',
      'Guest: Clear consumer materials on programs. Source: program page.',
      'Recognition: Multiple media mentions and awards, not formal certification. Source: brand materials.'
    ],
    keyEvidence: 'Vegetarian-first dining and plastics elimination are concrete and visible.',
    notes: 'Great F&B stance. Formal certification would help recognition.',
    scores: { governance: 7, legal: 6, energy: 6, water: 6, waste: 8, food: 9, sourcing: 7, community: 8, guest: 7, recognition: 6 },
    total: 70,
    leaves: 2,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Seek a third-party certification such as EarthCheck or B Corp.',
      'Add annual HK property progress metrics for energy and water.',
      'Publish waste diversion figures for Hong Kong sites.'
    ],
    sources: [
      { title: 'ESG Sustainability Policy', url: 'https://ovolohotels.com/wp-content/uploads/2022/12/ESG_Sustainability-Policy.pdf/', year: 2022 },
      { title: "Ovolo - Do Good Feel Good", url: 'https://ovolohotels.com/do-good-feel-good//', year: 2024 },
      { title: "Ovolo launches 'Year of the Veg'", url: 'https://ovolohotels.com/wp-content/uploads/2020/10/Ovolo-Launch-Year-of-the-Veg-Globally.pdf', year: 2020 }
    ]
  },
  {
    id: 'nina-hotel',
    name: 'Nina Hotel Tsuen Wan West',
    sector: 'Hotel',
    district: 'Tsuen Wan',
    badges: ['Zero-carbon chiller', 'ISO systems', 'ESG reporting'],
    evidence: [
      'Governance: Group sustainability communications in 2024 outline objectives. Source: Nina news and ESG page.',
      'Legal: Compliance posture described in ESG materials. Source: ESG page.',
      'Energy: Zero-carbon chiller at Nina Tower with over 50 percent electricity reduction and 7,000 tCO2 avoided per year through CLPe BOOT model. Source: CLPe press release; Nina news.',
      'Water: Fixtures and conservation steps stated. Source: ESG page.',
      'Waste: Ongoing improvements, limited tonnage disclosure. Source: ESG page.',
      'Food: Basic actions, scope to grow. Source: ESG page.',
      'Sourcing: Early progress on materials and procurement. Source: ESG page.',
      'Community: Philanthropy and local engagement. Source: ESG page.',
      'Guest: Public-facing ESG info. Source: ESG page.',
      'Recognition: ISO systems referenced plus innovative energy project. Source: Nina materials.'
    ],
    keyEvidence: 'Verified utility partner project at the complex is a standout for energy decarbonization.',
    notes: 'Energy leader. Next steps are food and waste metrics.',
    scores: { governance: 8, legal: 7, energy: 10, water: 6, waste: 6, food: 6, sourcing: 6, community: 6, guest: 6, recognition: 8 },
    total: 69,
    leaves: 2,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Introduce property food waste tracking and publish diversion rates.',
      'Document sustainable sourcing KPIs and packaging changes.',
      'Add guest education around the zero-carbon chiller.'
    ],
    sources: [
      { title: 'CLPe zero-carbon chiller', url: 'https://www.clpgroup.com/content/dam/clp-group/channels/media/document/2023/20230213_en.pdf.coredownload.pdf', year: 2023 },
      { title: 'Nina sustainable living', url: 'https://www.ninahotelgroup.com/en/news-media/Nina_Leading_the_way_in_sustainable_living.html', year: 2024 },
      { title: 'Nina ESG hub', url: 'https://www.ninahotelgroup.com/esg/', year: 2024 }
    ]
  },
  {
    id: 'amber-restaurant',
    name: 'Amber',
    sector: 'Restaurant',
    district: 'Central',
    badges: ['Michelin Green Star', 'Local farms', 'Plant-forward menus'],
    evidence: [
      'Governance: Sustainability statement published by the restaurant. Source: Amber sustainability statement PDF.',
      'Legal: Food safety and ethical sourcing practices align with HK norms. Source: statement and guide.',
      'Energy: Kitchen efficiency measures implied in operations. Source: sustainability statement.',
      'Water: Conservation practices in prep and service outlined. Source: statement.',
      'Waste: Waste reduction via precise portioning and menu engineering. Source: statement.',
      'Food: MICHELIN Green Star plus seasonal plant-forward approach. Source: Michelin page and statement.',
      'Sourcing: Local farm partnerships and sustainable suppliers cited. Source: statement.',
      'Community: Chef engagement and industry education. Source: statement.',
      'Guest: Public-facing sustainability statement and menu notes. Source: statement.',
      'Recognition: MICHELIN Green Star and three stars in 2025. Source: Michelin page.'
    ],
    keyEvidence: 'Green Star recognition directly maps to the food ladder and guest transparency.',
    notes: 'Culinary leader. Could publish more utility data.',
    scores: { governance: 7, legal: 6, energy: 6, water: 6, waste: 8, food: 10, sourcing: 8, community: 7, guest: 7, recognition: 9 },
    total: 74,
    leaves: 2,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Publish basic annual metrics for energy and water.',
      'Add food waste diversion data from back-of-house tracking.',
      'Consider a broader certification beyond Michelin.'
    ],
    sources: [
      { title: 'Amber sustainability statement', url: 'https://photos.mandarinoriental.com/is/content/MandarinOriental/LMHKG%20-%20Landmark/PDFs/landmark-amber-sustainability-statement.pdf', year: 2024 },
      { title: 'MICHELIN - Amber', url: 'https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/amber569032', year: 2025 }
    ]
  },
  {
    id: 'roganic-restaurant',
    name: 'Roganic Hong Kong',
    sector: 'Restaurant',
    district: 'Causeway Bay',
    badges: ['Michelin Green Star', 'Urban farming', 'Zero-waste kitchen', 'Local farms'],
    evidence: [
      'Governance: Public sustainability promise outlining practices. Source: Roganic site.',
      'Legal: Compliance with seafood and food safety reflected in materials. Source: site.',
      'Energy: Kitchen efficiency focus noted. Source: site.',
      'Water: Conservation and filtration at service described. Source: site.',
      'Waste: Nose-to-tail and near zero waste kitchen approach. Source: site.',
      'Food: MICHELIN Green Star recognition, seasonal sourcing. Source: Michelin page; site.',
      'Sourcing: Local producers and on-site herbs. Source: site.',
      'Community: Supplier storytelling and education. Source: site.',
      'Guest: Public promise page and menu narratives. Source: site.',
      'Recognition: MICHELIN Green Star. Source: Michelin page.'
    ],
    keyEvidence: 'Green Star plus specific kitchen methods justify high food and waste scores.',
    notes: 'Front-runner in sustainable dining philosophy. Add measured metrics next.',
    scores: { governance: 7, legal: 6, energy: 6, water: 6, waste: 9, food: 10, sourcing: 8, community: 6, guest: 7, recognition: 9 },
    total: 74,
    leaves: 2,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Publish annual waste and energy intensity info.',
      'Share local sourcing percentages.',
      'Consider third-party environmental certification.'
    ],
    sources: [
      { title: 'Roganic sustainability promise', url: 'https://www.roganic.com.hk/our-sustainability-promise', year: 2024 },
      { title: 'MICHELIN - Roganic', url: 'https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/roganic1185143', year: 2025 }
    ]
  },
  {
    id: 'mono-restaurant',
    name: 'MONO',
    sector: 'Restaurant',
    district: 'Central',
    badges: ['Filtered water', 'Seed-paper receipts', 'Food rescue', 'Plant-forward menus'],
    evidence: [
      'Governance: Public positioning and practices noted on channels. Source: MONO site.',
      'Legal: Operations align with HK food safety norms. Source: SCMP feature.',
      'Energy: Efficiency steps in kitchen. Source: SCMP feature.',
      'Water: Nordaq in-house filtration in place avoids bottled water. Source: SCMP feature.',
      'Waste: Biodegradable film and seed-paper receipts plus donations. Source: SCMP feature.',
      'Food: Plant-forward and seasonal Latin American cuisine. Source: SCMP feature; site.',
      'Sourcing: Local suppliers emphasis. Source: feature.',
      'Community: Donations to Zero Foodprint Asia. Source: feature.',
      'Guest: Communications through menus and media. Source: site and feature.',
      'Recognition: Media recognition; no Green Star listed. Source: feature.'
    ],
    keyEvidence: 'Nordaq filtration and packaging changes map directly to water and waste ladders.',
    notes: 'Creative solutions. Add a formal sustainability statement and metrics.',
    scores: { governance: 6, legal: 6, energy: 5, water: 7, waste: 8, food: 8, sourcing: 7, community: 7, guest: 6, recognition: 6 },
    total: 66,
    leaves: 2,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Publish a simple page with targets.',
      'Track and share annual utilities and waste.',
      'Explore third-party recognition.'
    ],
    sources: [
      { title: 'MONO Restaurant', url: 'https://www.mono.hk', year: 2024 },
      { title: 'SCMP eco-conscious dining feature', url: 'https://www.scmp.com/magazines/100-top-tables/article/3215245/how-mono-championing-eco-conscious-dining-hong-kong-ricardo-chanetons-latin-american-restaurant', year: 2023 }
    ]
  },
  {
    id: 'baker-bottleman',
    name: 'The Baker & The Bottleman',
    sector: 'Bakery',
    district: 'Wan Chai',
    badges: ['Plastic-free packaging', 'In-store sorting', 'Food rescue', 'Local farms'],
    evidence: [
      'Governance: Sustainability concept described in profiles. Source: So Good Magazine; Sustainabl. Planet.',
      'Legal: Packaging and sourcing align with HK rules. Source: profiles.',
      'Energy: No published project data yet. Source: profiles.',
      'Water: Standard kitchen conservation practices. Source: profiles.',
      'Waste: Plastic-free FSC packaging and reusable options with sorting in store. Source: So Good Magazine; Sustainabl. Planet.',
      'Food: Seasonal menu planning and minimal waste prep. Source: profiles.',
      'Sourcing: FSC and sustainable materials for packaging. Source: profiles.',
      'Community: Local partnerships and outreach. Source: profiles.',
      'Guest: Visible front-of-house sorting and communication. Source: profiles.',
      'Recognition: Positive press features. Source: profiles.'
    ],
    keyEvidence: 'Clear packaging leadership and guest-facing sorting meet waste ladder at 8.',
    notes: 'Strong for a small venue. Add monitoring and a simple governance page.',
    scores: { governance: 6, legal: 6, energy: 5, water: 5, waste: 8, food: 7, sourcing: 7, community: 8, guest: 6, recognition: 6 },
    total: 64,
    leaves: 1,
    confidence: 'Medium',
    upgradeRecommendations: [
      'Post a sustainability page with 3 to 5 targets.',
      'Track electricity and water monthly and publish a summary.',
      'Add a short food waste tracking pilot and share results.'
    ],
    sources: [
      { title: 'So Good Magazine feature', url: 'https://www.sogoodmagazine.com/uncategorized/baker-bottleman-sustainable-bakery-wine-bar-hong-kong/', year: 2022 },
      { title: 'Sustainabl. Planet spotlight', url: 'https://www.sustainablplanet.com/blog/spotlight-on-the-baker-the-bottleman', year: 2022 }
    ]
  }
];

// helper
const calculateRating = (scores) => Object.values(scores).reduce((s, v) => s + v, 0);

export const SECTOR_WEIGHTS = {
  Hotel:   { food: 30, waste: 20, energy: 20, water: 10 },
  Restaurant: { food: 45, waste: 25, energy: 10, water: 5 },
  Bakery:  { food: 40, waste: 30, energy: 10, water: 5 },
  Cafe:    { food: 40, waste: 30, energy: 10, water: 5 }
};

export const REFERENCES = [
  { id: 'hotel-icon-sustainability', title: 'Go Green at Hotel ICON', author: 'Hotel ICON', year: 2019, url: 'https://www.hotel-icon.com/about-the-hotel/go-green' },
  { id: 'hotel-icon-orca', title: 'Thinking Green Press Release', author: 'Hotel ICON', year: 2018, url: 'https://www.hotel-icon.com/public/release/images/2/20180222_Thinking%20Green_EN.pdf' },
  { id: 'polyu-case', title: 'Towards a model hotel pioneering sustainable solutions', author: 'Nam, H. V. et al.', year: 2020, url: 'https://ira.lib.polyu.edu.hk/bitstream/10397/89890/1/a0817-n03_1859.pdf' },

  { id: 'four-seasons-sustainability', title: 'Sustainability', author: 'Four Seasons Hotel Hong Kong', year: 2024, url: 'https://www.fourseasons.com/hongkong/sustainability/' },
  { id: 'four-seasons-ecospirits', title: 'Four Seasons partners with ecoSPIRITS across Asia Pacific', author: 'Four Seasons Hotels and Resorts', year: 2020, url: 'https://ecospirits.global/four-seasons-hotels-resorts-partners-with-ecospirits/' },
  { id: 'four-seasons-progress', title: '2024 Progress Report', author: 'Four Seasons Hotels and Resorts', year: 2024, url: 'https://www.fourseasons.com/content/dam/fourseasons/images/web/PDFs/2024-Progress-Report.pdf' },

  { id: 'hsh-sustainability', title: 'Sustainable Luxury', author: 'HSH Group', year: 2024, url: 'https://www.hshgroup.com/en/sustainable-luxury' },
  { id: 'hsh-crs-report', title: '2024 CRS Report', author: 'HSH Group', year: 2024, url: 'https://www.hshgroup.com/-/media/files/hsh/sustainability-reports/2024/2024-crs-report-en.pdf' },

  { id: 'rosewood-staycation', title: 'Staycation for Good', author: 'Rosewood Hong Kong', year: 2021, url: 'https://www.rosewoodhotels.com/en/hong-kong/media/press/2021/rosewood-hong-kong-further-its-sustainability-commitment-with-the-launch-of-a-quarterly-staycation-for-good' },
  { id: 'rosewood-impacts', title: 'Impacts page', author: 'Rosewood Hong Kong', year: 2024, url: 'https://www.rosewoodhotels.com/en/hong-kong/overview/impacts' },

  { id: 'ovolo-year-veg', title: "Ovolo launches 'Year of the Veg' globally", author: 'Ovolo Hotels', year: 2020, url: 'https://ovolohotels.com/wp-content/uploads/2020/10/Ovolo-Launch-Year-of-the-Veg-Globally.pdf' },
  { id: 'ovolo-esg', title: 'ESG Sustainability Policy', author: 'Ovolo Hotels', year: 2022, url: 'https://ovolohotels.com/wp-content/uploads/2022/12/ESG_Sustainability-Policy.pdf/' },
  { id: 'ovolo-do-good', title: 'Do Good Feel Good', author: 'Ovolo Hotels', year: 2024, url: 'https://ovolohotels.com/do-good-feel-good//' },

  { id: 'clpe-zero-carbon', title: "CLPe signs deal on Hong Kong's first zero-carbon chiller system", author: 'CLPe', year: 2023, url: 'https://www.clpgroup.com/content/dam/clp-group/channels/media/document/2023/20230213_en.pdf.coredownload.pdf' },
  { id: 'nina-sustainable-living', title: 'Leading the way in sustainable living', author: 'Nina Hospitality', year: 2024, url: 'https://www.ninahotelgroup.com/en/news-media/Nina_Leading_the_way_in_sustainable_living.html' },
  { id: 'nina-esg', title: 'Nina ESG hub', author: 'Nina Hospitality', year: 2024, url: 'https://www.ninahotelgroup.com/esg/' },

  { id: 'amber-statement', title: 'Amber sustainability statement', author: 'Landmark Mandarin Oriental', year: 2024, url: 'https://photos.mandarinoriental.com/is/content/MandarinOriental/LMHKG%20-%20Landmark/PDFs/landmark-amber-sustainability-statement.pdf' },
  { id: 'michelin-amber', title: 'Amber achieves three MICHELIN Stars, retains Green Star', author: 'The MICHELIN Guide', year: 2025, url: 'https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/amber569032' },

  { id: 'roganic-sustainability', title: 'Roganic sustainability promise', author: 'Roganic Hong Kong', year: 2024, url: 'https://www.roganic.com.hk/our-sustainability-promise' },
  { id: 'michelin-roganic', title: 'Roganic – Hong Kong', author: 'The MICHELIN Guide', year: 2025, url: 'https://guide.michelin.com/us/en/hong-kong-region/hong-kong/restaurant/roganic1185143' },

  { id: 'mono-site', title: 'MONO Restaurant', author: 'MONO', year: 2024, url: 'https://www.mono.hk' },
  { id: 'scmp-mono-eco', title: 'How MONO is championing eco-conscious dining in Hong Kong', author: 'SCMP', year: 2023, url: 'https://www.scmp.com/magazines/100-top-tables/article/3215245/how-mono-championing-eco-conscious-dining-hong-kong-ricardo-chanetons-latin-american-restaurant' },

  { id: 'so-good-baker', title: 'The Baker & The Bottleman, a sustainable bakery and wine bar', author: 'So Good Magazine', year: 2022, url: 'https://www.sogoodmagazine.com/uncategorized/baker-bottleman-sustainable-bakery-wine-bar-hong-kong/' },
  { id: 'sustainabl-baker', title: 'Spotlight on The Baker & The Bottleman', author: 'Sustainabl. Planet', year: 2022, url: 'https://www.sustainablplanet.com/blog/spotlight-on-the-baker-the-bottleman' }
];
