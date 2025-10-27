import React, { useState } from 'react';
import { ArrowLeft, Leaf, MapPin, ExternalLink, Award, Info, Eye, Building2, TrendingUp, Users, Star } from 'lucide-react';
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

function ConfidenceBadge({ confidence }) {
  const colors = {
    'High': 'bg-green-100 text-green-800 border-green-200',
    'Medium': 'bg-yellow-100 text-yellow-800 border-yellow-200',
    'Low': 'bg-red-100 text-red-800 border-red-200'
  }
  
  return (
    <span className={clsx('px-3 py-1 rounded-full text-sm font-medium border', colors[confidence])}>
      {confidence} confidence
    </span>
  )
}

function ScoreBreakdown({ scores, upgradeRecommendations }) {
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold text-neutral-900">Detailed Score Breakdown</h3>
        <div className="text-sm text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">Scoring</div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.entries(scores).map(([key, value]) => {
          const criterion = CRITERIA.find(c => c.key === key)
          if (!criterion) return null;
          
          return (
            <div key={key} className={`rounded-lg border-2 p-5 ${getScoreColor(value)}`}>
              <div className="flex items-center justify-between mb-3">
                <div className="font-bold text-base">{criterion.name}</div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-2xl">{value}</span>
                  <span className="text-sm font-medium">/ 10</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold opacity-75">{getScoreDescription(value)}</span>
                <div className="w-20 bg-white bg-opacity-50 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-current opacity-75" 
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
          <ul className="space-y-2 text-blue-800">
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
  const [showAllEvidence, setShowAllEvidence] = useState(false);
  
  const restaurant = BUSINESSES.find(b => b.id === restaurantId);
  
  if (!restaurant) {
    return (
      <div className="min-h-screen py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <button 
            onClick={onClose}
            className="mb-6 flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Guide
          </button>
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h1 className="text-2xl font-bold text-neutral-900 mb-4">Restaurant Not Found</h1>
            <p className="text-neutral-600">The requested restaurant could not be found.</p>
          </div>
        </div>
      </div>
    );
  }

  const leafTier = LEAF_TIERS[restaurant.leaves];

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        <div className="bg-white border-b border-neutral-200 px-6 py-4">
          <button 
            onClick={onClose}
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Guide
          </button>
        </div>

        {/* Hero Section */}
        <div className="bg-white">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            {/* Left: Image Placeholder */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-leaf-100 to-leaf-200 rounded-xl border border-leaf-300 flex items-center justify-center">
                <div className="text-center text-leaf-700">
                  <Building2 size={48} className="mx-auto mb-3 opacity-60" />
                  <div className="text-lg font-semibold">{restaurant.name}</div>
                  <div className="text-sm opacity-75">{restaurant.sector} • {restaurant.district}</div>
                </div>
              </div>
              
              {/* Rating Badge Overlay */}
              <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3 border border-neutral-200">
                <div className="flex items-center gap-2 mb-1">
                  <LeafIcons leaves={restaurant.leaves} />
                  <span className="font-bold text-leaf-700">{leafTier.name}</span>
                </div>
                <div className="text-2xl font-bold text-neutral-900">{restaurant.total}/100</div>
                <div className="text-xs text-neutral-500 uppercase font-medium">Total Score</div>
              </div>
            </div>

            {/* Right: Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-4xl font-bold text-neutral-900 mb-4">{restaurant.name}</h1>
                <div className="flex flex-wrap items-center gap-4 text-lg mb-6">
                  <span className="flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full">
                    <Building2 size={16} />
                    {restaurant.sector}
                  </span>
                  <span className="flex items-center gap-2 text-neutral-600">
                    <MapPin size={16} />
                    {restaurant.district}
                  </span>
                  <ConfidenceBadge confidence={restaurant.confidence} />
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">{restaurant.notes}</p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-leaf-50 rounded-lg p-4 border border-leaf-200">
                  <div className="text-2xl font-bold text-leaf-700">{restaurant.leaves}</div>
                  <div className="text-sm text-leaf-600 font-medium">Leaf Rating</div>
                </div>
                <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                  <div className="text-2xl font-bold text-blue-700">{restaurant.evidence.length}</div>
                  <div className="text-sm text-blue-600 font-medium">Evidence Points</div>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                  <div className="text-2xl font-bold text-purple-700">{restaurant.sources.length}</div>
                  <div className="text-sm text-purple-600 font-medium">Sources</div>
                </div>
              </div>

              {/* Key Evidence Preview */}
              <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2 flex items-center gap-2">
                  <Star size={16} />
                  Key Evidence
                </h3>
                <p className="text-neutral-700 leading-relaxed">{restaurant.keyEvidence}</p>
              </div>
            </div>
          </div>
        </div>

          {/* Content */}
          <div className="p-8 space-y-8">
            {/* Key Evidence */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Key Evidence</h3>
              <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                <p className="text-neutral-700 leading-relaxed text-lg">{restaurant.keyEvidence}</p>
              </div>
            </div>

            {/* Badges */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Notable Features</h3>
              <div className="flex flex-wrap gap-3">
                {restaurant.badges.map(badge => (
                  <span 
                    key={badge} 
                    className="bg-leaf-100 text-leaf-800 border border-leaf-200 px-4 py-2 rounded-full font-medium"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            {/* Score Breakdown */}
            <ScoreBreakdown 
              scores={restaurant.scores} 
              upgradeRecommendations={restaurant.upgradeRecommendations}
            />

            {/* Evidence Details */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-neutral-900">Supporting Evidence</h3>
                {restaurant.evidence.length > 3 && (
                  <button
                    onClick={() => setShowAllEvidence(!showAllEvidence)}
                    className="flex items-center gap-2 text-leaf-600 hover:text-leaf-700 font-medium"
                  >
                    <Eye size={16} />
                    {showAllEvidence ? 'Show Less' : `Show All (${restaurant.evidence.length})`}
                  </button>
                )}
              </div>
              <div className="space-y-3">
                {(showAllEvidence ? restaurant.evidence : restaurant.evidence.slice(0, 3)).map((evidence, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <Info size={16} className="text-neutral-500 mt-0.5 shrink-0" />
                    <p className="text-neutral-700 leading-relaxed">{evidence}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Sources */}
            <div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">Sources & References</h3>
              <div className="grid gap-3">
                {restaurant.sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white border border-neutral-200 rounded-lg hover:border-leaf-300 hover:bg-leaf-50 transition-colors group"
                  >
                    <div>
                      <div className="font-medium text-neutral-900 group-hover:text-leaf-800">
                        {source.title}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {source.year} • {new URL(source.url).hostname}
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-neutral-400 group-hover:text-leaf-600" />
                  </a>
                ))}
              </div>
            </div>

            {/* Rating Explanation */}
            <div className="bg-leaf-50 rounded-xl p-6 border border-leaf-200">
              <div className="flex items-center gap-3 mb-3">
                <Award className="w-6 h-6 text-leaf-700" />
                <span className="text-xl font-bold text-leaf-800">{leafTier.name} Rating</span>
              </div>
              <p className="text-leaf-700 leading-relaxed text-lg">{leafTier.description}</p>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RestaurantDetail;