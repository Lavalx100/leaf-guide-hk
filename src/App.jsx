import { useMemo, useState } from 'react'
import { BarChart3, FileText } from 'lucide-react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Filters from './components/Filters.jsx'
import BusinessCard from './components/BusinessCardSimple.jsx'
import References from './components/References.jsx'
import CriteriaPage from './components/CriteriaPage.jsx'
import RestaurantDetail from './components/RestaurantDetailProfessional.jsx'
import { BUSINESSES } from './data.js'

export default function App() {
  const [query, setQuery] = useState('')
  const [sector, setSector] = useState('All')
  const [leaves, setLeaves] = useState('All')
  const [confidence, setConfidence] = useState('All')
  const [badge, setBadge] = useState('All')
  const [sort, setSort] = useState('score-desc')
  const [showReferences, setShowReferences] = useState(false)
  const [currentPage, setCurrentPage] = useState('home') // 'home', 'criteria', or 'restaurant'
  const [selectedRestaurantId, setSelectedRestaurantId] = useState(null)

  const filtered = useMemo(() => {
    let list = BUSINESSES.slice()

    if (sector !== 'All') list = list.filter(b => b.sector === sector)
    if (leaves !== 'All') list = list.filter(b => String(b.leaves) === leaves)
    if (confidence !== 'All') list = list.filter(b => b.confidence === confidence)
    if (badge !== 'All') list = list.filter(b => b.badges.includes(badge))

    const q = query.trim().toLowerCase()
    if (q) {
      list = list.filter(b => [
        b.name, b.sector, b.district, b.confidence, 
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
      case 'confidence':
        const confidenceOrder = { 'High': 3, 'Medium': 2, 'Low': 1 }
        list.sort((a,b) => confidenceOrder[b.confidence] - confidenceOrder[a.confidence] || b.total - a.total); break
      default:
        list.sort((a,b) => b.total - a.total); break
    }
    return list
  }, [query, sector, leaves, confidence, badge, sort])

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
    const byConfidence = filtered.reduce((acc, b) => {
      acc[b.confidence] = (acc[b.confidence] || 0) + 1
      return acc
    }, {})
    const avgScore = total > 0 ? Math.round(filtered.reduce((sum, b) => sum + b.total, 0) / total) : 0
    
    return { total, bySector, byLeaves, byConfidence, avgScore }
  }, [filtered])

  const openRestaurantDetail = (restaurantId) => {
    setSelectedRestaurantId(restaurantId)
    setCurrentPage('restaurant')
  }

  const closeRestaurantDetail = () => {
    setSelectedRestaurantId(null)
    setCurrentPage('home')
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <Header />
      <main className="flex-1">
        {currentPage === 'home' ? (
          <section className="mx-auto max-w-7xl px-4 pt-6 pb-8">
            <div className="mb-6">
              <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-2">
                Hong Kong Sustainable Hospitality Guide
              </h2>
              <p className="text-neutral-600 text-lg leading-relaxed max-w-4xl mb-4">
                A transparent rating system for sustainable hospitality in Hong Kong. Based on evidence-backed 
                assessment across 10 equal criteria, aligned with GSTC standards and UN SDGs. Each venue is rated 
                on a 3-leaf scale with detailed transparency and confidence indicators.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => setCurrentPage('criteria')}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-leaf-600 text-white rounded-lg hover:bg-leaf-700 transition-colors font-medium"
                >
                  <BarChart3 size={16} />
                  View Scoring Criteria
                </button>
                <button
                  onClick={() => setShowReferences(!showReferences)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg border border-neutral-200 hover:bg-neutral-200 transition-colors font-medium"
                >
                  <FileText size={16} />
                  {showReferences ? 'Hide' : 'View all'} sources & references
                </button>
              </div>
            </div>

            {showReferences && (
              <div className="mb-8">
                <References />
              </div>
            )}
            
            <Filters
              query={query} setQuery={setQuery}
              sector={sector} setSector={setSector}
              leaves={leaves} setLeaves={setLeaves}
              confidence={confidence} setConfidence={setConfidence}
              badge={badge} setBadge={setBadge}
              sort={sort} setSort={setSort}
            />
            
            {/* Summary stats */}
            <div className="mt-6 bg-white rounded-2xl shadow-soft border border-neutral-200 p-6">
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-neutral-900">{stats.total}</div>
                  <div className="text-sm text-neutral-600">Venues</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-leaf-700">{stats.avgScore}</div>
                  <div className="text-sm text-neutral-600">Avg Score</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">{stats.byLeaves[3] || 0}</div>
                  <div className="text-sm text-neutral-600">3 Leaves</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-neutral-900">{stats.byLeaves[2] || 0}</div>
                  <div className="text-sm text-neutral-600">2 Leaves</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">{stats.byConfidence.High || 0}</div>
                  <div className="text-sm text-neutral-600">High Confidence</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filtered.map(b => <BusinessCard key={b.id} b={b} onViewDetails={() => openRestaurantDetail(b.id)} />)}
            </div>
            
            <div className="mt-8 text-sm text-neutral-500 space-y-2">
              <div>
                Showing {stats.total} result(s). By sector:{" "}
                {Object.entries(stats.bySector).map(([k,v]) => 
                  <span key={k} className="mr-3 font-medium">{k}: {v}</span>
                )}
              </div>
              <div>
                By confidence:{" "}
                {Object.entries(stats.byConfidence).map(([k,v]) => 
                  <span key={k} className="mr-3 font-medium">{k}: {v}</span>
                )}
              </div>
            </div>
          </section>
        ) : currentPage === 'criteria' ? (
          <CriteriaPage onClose={() => setCurrentPage('home')} />
        ) : (
          <RestaurantDetail 
            restaurantId={selectedRestaurantId} 
            onClose={closeRestaurantDetail}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}
