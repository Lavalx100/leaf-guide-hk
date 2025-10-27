import { BrowserRouter as Router, Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { useMemo, useState } from 'react'
import { BarChart3, FileText, Grid3X3, Grid2X2, Map, List } from 'lucide-react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Filters from './components/Filters.jsx'
import BusinessCard from './components/BusinessCardSimple.jsx'
import MapView from './components/MapView.jsx'
import References from './components/References.jsx'
import CriteriaPage from './components/CriteriaPage.jsx'
import RestaurantDetail from './components/RestaurantDetailProfessional.jsx'
import AboutPage from './components/AboutPage.jsx'
import ServicesPage from './components/ServicesPage.jsx'
import ItineraryPlanner from './components/ItineraryPlanner.jsx'
import { BUSINESSES } from './data.js'

function HomePage() {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('All')
  const [leaves, setLeaves] = useState('All')
  const [sort, setSort] = useState('score-desc')
  const [viewMode, setViewMode] = useState('3') // '2' or '3' columns
  const [displayMode, setDisplayMode] = useState('list') // 'list' or 'map'
  const [selectedBusiness, setSelectedBusiness] = useState(null)

  const filtered = useMemo(() => {
    let list = BUSINESSES.slice()

    if (sector !== 'All') list = list.filter(b => b.sector === sector)
    if (leaves !== 'All') list = list.filter(b => String(b.leaves) === leaves)

    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(b => [
        b.name, b.sector, b.district, 
        b.badges.join(' '), b.evidence.join(' '), 
        b.keyEvidence, b.notes || ''
      ].join(' ').toLowerCase().includes(q))
    }

    switch (sort) {
      case 'score-asc':
        list.sort((a,b) => a.total - b.total); break
      case 'name-asc':
        list.sort((a,b) => a.name.localeCompare(b.name)); break
      case 'name-desc':
        list.sort((a,b) => b.name.localeCompare(a.name)); break
      case 'sector':
        list.sort((a,b) => a.sector.localeCompare(b.sector) || b.total - a.total); break

      default:
        list.sort((a,b) => b.total - a.total); break
    }
    return list
  }, [query, sector, leaves, sort])

  const stats = useMemo(() => {
    const total = filtered.length
    const bySector = filtered.reduce((acc, b) => {
      acc[b.sector] = (acc[b.sector] || 0) + 1
      return acc
    }, {})
    const byLeaves = filtered.reduce((acc, b) => {
      acc[b.leaves] = (acc[b.leaves] || 0) + 1
      return acc
    }, {})

    const avgScore = total > 0 ? Math.round(filtered.reduce((sum, b) => sum + b.total, 0) / total) : 0
    
    return { total, bySector, byLeaves, avgScore }
  }, [filtered])

  const openRestaurantDetail = (restaurantId) => {
    navigate(`/business/${restaurantId}`)
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pt-6 pb-8">
      <div className="mb-6">
        <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">
          Hong Kong Sustainable Hospitality Guide
        </h2>
      </div>


      
      <Filters
        query={query} setQuery={setQuery}
        sector={sector} setSector={setSector}
        leaves={leaves} setLeaves={setLeaves}
      />
      
      {/* Sort by and View Mode Toggle */}
      <div className="flex items-center justify-between mt-6 mb-4 flex-wrap gap-4">
        {displayMode === 'list' && (
          <div className="flex items-center gap-3">
            <span className="text-sm text-neutral-600">Sort by:</span>
            <select 
              value={sort} 
              onChange={e => setSort(e.target.value)} 
              className="rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300"
            >
              <option value="score-desc">Score high to low</option>
              <option value="score-asc">Score low to high</option>
              <option value="name-asc">Name A to Z</option>
              <option value="name-desc">Name Z to A</option>
              <option value="sector">Sector</option>
            </select>
          </div>
        )}
        
        <div className="flex items-center gap-4">
          {/* Display Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-600">Display:</span>
            <div className="flex rounded-lg border border-neutral-200 overflow-hidden">
              <button
                onClick={() => setDisplayMode('list')}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  displayMode === 'list' 
                    ? 'bg-leaf-600 text-white' 
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <List size={16} />
                <span className="hidden sm:inline">List</span>
              </button>
              <button
                onClick={() => setDisplayMode('map')}
                className={`px-3 py-2 text-sm font-medium transition-colors flex items-center gap-1 ${
                  displayMode === 'map' 
                    ? 'bg-leaf-600 text-white' 
                    : 'bg-white text-neutral-700 hover:bg-neutral-50'
                }`}
              >
                <Map size={16} />
                <span className="hidden sm:inline">Map</span>
              </button>
            </div>
          </div>
          
          {/* Grid View Toggle (only show in list mode) */}
          {displayMode === 'list' && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-600">View:</span>
              <div className="flex rounded-lg border border-neutral-200 overflow-hidden">
                <button
                  onClick={() => setViewMode('2')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === '2' 
                      ? 'bg-leaf-600 text-white' 
                      : 'bg-white text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <Grid2X2 size={16} />
                </button>
                <button
                  onClick={() => setViewMode('3')}
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    viewMode === '3' 
                      ? 'bg-leaf-600 text-white' 
                      : 'bg-white text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  <Grid3X3 size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Content Area - List or Map */}
      {displayMode === 'list' ? (
        <div className={`grid gap-6 ${
          viewMode === '3' 
            ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
            : 'grid-cols-1 lg:grid-cols-2'
        }`}>
          {filtered.map(b => <BusinessCard key={b.id} b={b} onViewDetails={() => openRestaurantDetail(b.id)} />)}
        </div>
      ) : (
        <div className="h-[600px] relative">
          <MapView 
            businesses={filtered} 
            onBusinessSelect={(business) => openRestaurantDetail(business.id)}
            selectedBusiness={selectedBusiness}
          />
        </div>
      )}
      
      <div className="mt-8 text-sm text-neutral-500 space-y-2">
        <div>
          Showing {stats.total} result(s). By sector:{" "}
          {Object.entries(stats.bySector).map(([k,v]) => 
            <span key={k} className="mr-3 font-medium">{k}: {v}</span>
          )}
        </div>

      </div>
    </section>
  )
}

function BusinessDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  
  return (
    <RestaurantDetail 
      restaurantId={id} 
      onClose={() => navigate('/')}
    />
  )
}

function CriteriaPageRoute() {
  const navigate = useNavigate()
  
  return (
    <CriteriaPage onClose={() => navigate('/')} />
  )
}

function AboutPageRoute() {
  const navigate = useNavigate()
  
  return (
    <AboutPage onClose={() => navigate('/')} />
  )
}

function ServicesPageRoute() {
  const navigate = useNavigate()
  
  return (
    <ServicesPage onClose={() => navigate('/')} />
  )
}

function ItineraryPlannerRoute() {
  const navigate = useNavigate()
  
  return (
    <ItineraryPlanner onClose={() => navigate('/')} />
  )
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-neutral-50">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/criteria" element={<CriteriaPageRoute />} />
            <Route path="/services" element={<ServicesPageRoute />} />
            <Route path="/itinerary" element={<ItineraryPlannerRoute />} />
            <Route path="/about" element={<AboutPageRoute />} />
            <Route path="/business/:id" element={<BusinessDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}
