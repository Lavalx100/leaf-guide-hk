import { useMemo } from 'react'

export default function Filters({ 
  query, setQuery, 
  sector, setSector, 
  leaves, setLeaves, 
  confidence, setConfidence,
  badge, setBadge,
  sort, setSort 
}) {
  const sectors = useMemo(() => ['All','Hotel','Restaurant','Bakery','Cafe'], [])
  const leafOpts = ['All','1','2','3']
  const confidenceOpts = ['All','High','Medium','Low']
  const badgeOpts = useMemo(() => [
    'All',
    'Michelin Green Star',
    'Food waste tech',
    'Zero-carbon chiller',
    'Plastic-free packaging',
    'Plant-forward menus',
    'AI food waste tracking',
    'ecoSPIRITS',
    'Shell recycling'
  ], [])
  
  const sortOpts = [
    { value: 'score-desc', label: 'Score high to low' },
    { value: 'score-asc', label: 'Score low to high' },
    { value: 'name-asc', label: 'Name A to Z' },
    { value: 'name-desc', label: 'Name Z to A' },
    { value: 'sector', label: 'Sector' },
    { value: 'confidence', label: 'Confidence' }
  ]
  
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
        <div className="sm:col-span-2">
          <label className="block text-xs font-medium text-neutral-600 mb-1">Search</label>
          <input
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Name, district, evidence, badges..."
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300 focus:border-leaf-400"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1">Sector</label>
          <select 
            value={sector} 
            onChange={e => setSector(e.target.value)} 
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300"
          >
            {sectors.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1">Leaves</label>
          <select 
            value={leaves} 
            onChange={e => setLeaves(e.target.value)} 
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300"
          >
            {leafOpts.map(s => <option key={s} value={s}>{s === 'All' ? 'All levels' : `${s} Leaf${s === '1' ? '' : 'ves'}`}</option>)}
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-neutral-600 mb-1">Confidence</label>
          <select 
            value={confidence} 
            onChange={e => setConfidence(e.target.value)} 
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300"
          >
            {confidenceOpts.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="lg:col-span-2 xl:col-span-1">
          <label className="block text-xs font-medium text-neutral-600 mb-1">Sort by</label>
          <select 
            value={sort} 
            onChange={e => setSort(e.target.value)} 
            className="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300"
          >
            {sortOpts.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
          </select>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-neutral-200">
        <label className="block text-xs font-medium text-neutral-600 mb-2">Filter by badge</label>
        <select 
          value={badge} 
          onChange={e => setBadge(e.target.value)} 
          className="w-full sm:w-auto rounded-lg border border-neutral-300 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-leaf-300"
        >
          {badgeOpts.map(b => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
    </div>
  )
}
