import { Leaf, MapPin, ArrowRight, FileText } from 'lucide-react'
import clsx from 'clsx'
import { LEAF_TIERS } from '../data.js'

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

function ConfidenceBadge({ confidence }) {
  const colors = {
    'High': 'bg-green-100 text-green-800 border-green-200',
    'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Low': 'bg-red-100 text-red-800 border-red-200'
  }
  
  return (
    <span className={clsx('px-2 py-0.5 rounded-full text-xs font-medium border', colors[confidence])}>
      {confidence} confidence
    </span>
  )
}

export default function BusinessCard({ b, onViewDetails }) {
  const leafTier = LEAF_TIERS[b.leaves]
  
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start gap-4 mb-4">
          <div className="shrink-0 rounded-xl bg-leaf-50 p-3 border border-leaf-100">
            <Leaf className="w-6 h-6 text-leaf-700" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-2">
              <h3 className="text-lg font-semibold leading-tight">{b.name}</h3>
              <div className="flex items-center gap-2">
                <LeafIcons leaves={b.leaves} />
                <span className="text-sm font-medium text-leaf-700">{leafTier.name}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 text-sm text-neutral-600 mb-3">
              <span className="px-2 py-1 rounded-full bg-neutral-100 border border-neutral-200 font-medium">{b.sector}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> 
                {b.district}
              </span>
              <span className="font-medium">Score {b.total}/100</span>
              <ConfidenceBadge confidence={b.confidence} />
            </div>

            {/* Key Evidence */}
            <div className="mb-4 p-3 bg-neutral-50 rounded-lg border border-neutral-200">
              <div className="text-xs text-neutral-500 uppercase font-medium mb-1">Key Evidence</div>
              <p className="text-sm text-neutral-700 leading-relaxed">{b.keyEvidence}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {b.badges.map(badge => (
                <span 
                  key={badge} 
                  className="bg-leaf-100 text-leaf-800 border border-leaf-200 text-xs px-2 py-1 rounded-full font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>

            {/* View Details Button */}
            <button
              onClick={onViewDetails}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-leaf-600 text-white rounded-lg hover:bg-leaf-700 transition-colors font-medium"
            >
              <FileText size={16} />
              View Full Details & Scoring
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}