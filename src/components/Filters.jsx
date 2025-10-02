import { useMemo } from 'react'

export default function Filters({ 
  query, setQuery, 
  sector, setSector, 
  leaves, setLeaves 
}) {
  const sectors = useMemo(() => ['All','Hotel','Restaurant','Bakery','Cafe'], [])
  const leafOpts = ['All','1','2','3']
  
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 p-4 sm:p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3">
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
            {leafOpts.map(s => <option key={s} value={s}>{s === 'All' ? 'All levels' : `${s} ${s === '1' ? 'Leaf' : 'Leaves'}`}</option>)}
          </select>
        </div>

      </div>
    </div>
  )
}
