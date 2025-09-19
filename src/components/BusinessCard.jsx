import { Leaf, Info, MapPin, ExternalLink, Award, AlertCircle } from 'lucide-react'
import { useState } from 'react'
import clsx from 'clsx'
import { BADGES, CRITERIA, LEAF_TIERS } from '../data.js'

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

function ScoreBreakdown({ scores, sector, upgradeRecommendations }) {
  const getScoreColor = (score) => {
    if (score >= 8) return 'text-leaf-dark bg-leaf-light border-leaf-medium';
    if (score >= 5) return 'text-yellow-700 bg-yellow-100 border-yellow-300';
    return 'text-red-700 bg-red-100 border-red-300';
  };

  const getScoreDescription = (score) => {
    if (score >= 8) return 'Strong';
    if (score >= 5) return 'Developing';
    return 'Basic';
  };

  return (
    <div className="mt-6 space-y-4">
      <div className="flex items-center justify-between">
        <h4 className="text-lg font-semibold text-neutral-900">Detailed Score Breakdown</h4>
        <div className="text-sm text-neutral-500">Scoring</div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.entries(scores).map(([key, value]) => {
          const criterion = CRITERIA.find(c => c.key === key)
          if (!criterion) return null;
          
          return (
            <div key={key} className={`rounded-lg border-2 p-4 ${getScoreColor(value)}`}>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold text-sm">{criterion.name}</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">{value}</span>
                  <span className="text-xs font-medium">/ 10</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium opacity-75">{getScoreDescription(value)}</span>
                <div className="w-16 bg-white bg-opacity-50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-current opacity-75" 
                    style={{ width: `${(value / 10) * 100}%` }}
                  ></div>
                </div>
              </div>
              
              <p className="text-xs opacity-80 leading-relaxed">{criterion.description}</p>
            </div>
          )
        })}
      </div>

      {/* Upgrade Recommendations */}
      {upgradeRecommendations && upgradeRecommendations.length > 0 && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <h5 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
            • Improvement Opportunities
          </h5>
          <ul className="space-y-1 text-sm text-blue-800">
            {upgradeRecommendations.map((rec, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default function BusinessCard({ b }) {
  const [showDetails, setShowDetails] = useState(false)
  const [showEvidence, setShowEvidence] = useState(false)
  
  const leafTier = LEAF_TIERS[b.leaves]
  
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden">
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

            {/* Quick Criteria Overview */}
            <div className="mb-4 p-3 bg-white rounded-lg border border-neutral-200">
              <div className="flex items-center justify-between mb-3">
                <div className="text-xs text-neutral-500 uppercase font-medium">10-Criteria Breakdown</div>
                <div className="text-xs text-neutral-500">Scoring</div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {Object.entries(b.scores).map(([key, value]) => {
                  const criterion = CRITERIA.find(c => c.key === key);
                  const getScoreColor = (score) => {
                    if (score >= 8) return 'bg-leaf-500';
                    if (score >= 5) return 'bg-yellow-400';
                    return 'bg-red-400';
                  };
                  
                  return (
                    <div key={key} className="text-center" title={`${criterion?.name}: ${value}/10`}>
                      <div className={`w-8 h-8 rounded-full ${getScoreColor(value)} text-white text-xs font-bold flex items-center justify-center mx-auto mb-1`}>
                        {value}
                      </div>
                      <div className="text-xs text-neutral-600 font-medium capitalize">{key}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-4">
              {b.badges.map(badge => {
                const badgeInfo = BADGES[badge]
                return (
                  <span 
                    key={badge} 
                    className="leaf-badge bg-leaf-100 text-leaf-800 border border-leaf-200 text-xs px-2 py-1 rounded-full"
                    title={badgeInfo?.description}
                  >
                    {badge}
                  </span>
                )
              })}
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="inline-flex items-center gap-2 text-sm text-leaf-800 hover:text-leaf-900 font-medium"
              >
                <Info className="w-4 h-4" />
                {showDetails ? 'Hide details' : 'Show details'}
              </button>
              <button
                onClick={() => setShowEvidence(!showEvidence)}
                className="inline-flex items-center gap-2 text-sm text-neutral-600 hover:text-neutral-800 font-medium"
              >
                <ExternalLink className="w-4 h-4" />
                {showEvidence ? 'Hide evidence' : 'Show evidence'}
              </button>
            </div>
          </div>
        </div>

        {/* Detailed breakdown */}
        {showDetails && (
          <div className="border-t border-neutral-200 pt-4 space-y-4">
            <ScoreBreakdown 
              scores={b.scores} 
              sector={b.sector} 
              upgradeRecommendations={b.upgradeRecommendations}
            />
            
            {/* Rating explanation */}
            <div className="p-3 bg-leaf-50 rounded-lg border border-leaf-200">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-leaf-700" />
                <span className="text-sm font-medium text-leaf-800">{leafTier.name} ({b.total}/100)</span>
              </div>
              <p className="text-sm text-leaf-700 leading-relaxed">{leafTier.description}</p>
            </div>

            {/* Notes */}
            {b.notes && (
              <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-sm font-medium text-yellow-800 mb-1">Assessment Notes</div>
                    <p className="text-sm text-yellow-700 leading-relaxed">{b.notes}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Sources */}
            {b.sources && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-neutral-700">Sources & Evidence</h4>
                <div className="space-y-2">
                  {b.sources.map((source, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <ExternalLink className="w-3.5 h-3.5 text-leaf-600 mt-0.5 shrink-0" />
                      <a
                        href={source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-leaf-700 hover:text-leaf-900 hover:underline leading-relaxed"
                      >
                        {source.title} ({source.year})
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Evidence list */}
        {showEvidence && (
          <div className="border-t border-neutral-200 pt-4">
            <h4 className="text-sm font-medium text-neutral-700 mb-3">Supporting Evidence</h4>
            <ul className="space-y-2">
              {b.evidence.map((e, i) => (
                <li key={i} className="text-sm text-neutral-700 leading-relaxed flex items-start gap-2">
                  <span className="w-1.5 h-1.5 bg-leaf-600 rounded-full mt-2 shrink-0"></span>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
