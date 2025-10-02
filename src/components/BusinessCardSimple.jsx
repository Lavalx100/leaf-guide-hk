import { Leaf, MapPin, ArrowRight, Building2 } from 'lucide-react'
import clsx from 'clsx'
import { LEAF_TIERS } from '../data.js'
import { getBusinessImage } from '../utils/images.js'

function LeafIcons({ leaves }) {
  return (
    <div className="flex items-center gap-1">
      {[1,2,3].map(n => (
        <Leaf key={n} className={clsx(
          "w-4 h-4",
          n <= leaves ? "text-leaf-700" : "text-neutral-300"
        )} />
      ))}
    </div>
  )
}

export default function BusinessCard({ b, onViewDetails }) {
  const leafTier = LEAF_TIERS[b.leaves]
  const businessImage = getBusinessImage(b.id)
  
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={onViewDetails}>
      {/* Business Image */}
      <div className="h-48 overflow-hidden">
        {businessImage ? (
          <img 
            src={businessImage} 
            alt={b.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full bg-gradient-to-br from-leaf-100 to-leaf-200 flex items-center justify-center">
            <Building2 className="w-16 h-16 text-leaf-600 opacity-60" />
          </div>
        )}
      </div>
      
      <div className="p-6">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-lg font-semibold leading-tight">{b.name}</h3>
            <div className="flex items-center gap-2">
              <LeafIcons leaves={b.leaves} />
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 mb-4">
            <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200 font-medium">{b.sector}</span>
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" /> 
              {b.district}
            </span>
          </div>

          {/* View Details Button */}
          <button
            onClick={onViewDetails}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-leaf-600 text-white rounded-lg hover:bg-leaf-700 transition-colors font-medium"
          >
            View Details
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}