import React, { useState } from 'react';
import { CRITERIA, LEAF_TIERS } from '../data.js';
import { ChevronDown, ChevronUp, X } from 'lucide-react';

const CriteriaPage = ({ onClose }) => {
  const [expandedCriterion, setExpandedCriterion] = useState(null);

  const toggleCriterion = (key) => {
    setExpandedCriterion(expandedCriterion === key ? null : key);
  };

  const getScoreColor = (score) => {
    if (score >= 8) return 'text-leaf-dark bg-leaf-light';
    if (score >= 5) return 'text-yellow-700 bg-yellow-100';
    return 'text-red-700 bg-red-100';
  };

  const getLeafColor = (tier) => {
    switch(tier) {
      case 3: return 'text-leaf-dark bg-leaf-light border-leaf-medium';
      case 2: return 'text-green-700 bg-green-100 border-green-300';
      case 1: return 'text-amber-700 bg-amber-100 border-amber-300';
      default: return 'text-gray-700 bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 text-white px-6 py-4 rounded-t-lg">
          <div className="flex items-center gap-3">
            <X 
              onClick={onClose} 
              className="h-6 w-6 cursor-pointer hover:text-green-200 transition-colors"
            />
            <div className="flex items-center gap-3">
              <span className="text-2xl">■</span>
              <h2 className="text-xl font-bold">Leaf Guide Sustainability Scoring Criteria</h2>
            </div>
          </div>
        </div>

        {/* Overview Section */}
        <div className="p-8 border-b border-gray-200">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-leaf-dark mb-2">10</div>
              <div className="text-gray-600">Equal Criteria</div>
              <div className="text-sm text-gray-500 mt-1">Each worth 10 points</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-leaf-dark mb-2">100</div>
              <div className="text-gray-600">Total Points</div>
              <div className="text-sm text-gray-500 mt-1">Maximum possible score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-leaf-dark mb-2">3</div>
              <div className="text-gray-600">Leaf Tiers</div>
              <div className="text-sm text-gray-500 mt-1">Bronze, Silver, Gold</div>
            </div>
          </div>

          {/* Leaf Tiers */}
          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {Object.entries(LEAF_TIERS).map(([tier, info]) => (
              <div key={tier} className={`border-2 rounded-lg p-4 ${getLeafColor(parseInt(tier))}`}>
                <div className="text-center">
                  <div className="font-bold text-lg mb-1">{info.name}</div>
                  <div className="text-sm opacity-75">{info.min}-{info.max} points</div>
                  <div className="text-xs mt-2 opacity-60">{info.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Criteria Details */}
        <div className="p-8">
          <h3 className="text-xl font-bold mb-6 text-gray-900">Detailed Criteria Breakdown</h3>
          <div className="space-y-4">
            {CRITERIA.map((criterion, index) => (
              <div key={criterion.key} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCriterion(criterion.key)}
                  className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-semibold text-green-600 bg-green-100 px-2 py-1 rounded">
                      {(index + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="font-medium text-gray-900">{criterion.name}</span>
                  </div>
                  {expandedCriterion === criterion.key ? 
                    <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  }
                </button>
                
                {expandedCriterion === criterion.key && (
                  <div className="px-6 py-4 bg-white border-t border-gray-100">
                    <p className="text-gray-700 mb-4">{criterion.description}</p>
                    
                    <div className="grid gap-4">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Scoring Ladder</h5>
                        <div className="space-y-2">
                          {criterion.ladder && Object.entries(criterion.ladder).map(([score, description]) => (
                            <div key={score} className="flex items-start gap-3">
                              <span className={`px-2 py-1 rounded text-sm font-semibold ${getScoreColor(parseInt(score))}`}>
                                {score}
                              </span>
                              <span className="text-gray-700 text-sm flex-1">{description}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {criterion.examples && (
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-2">Examples</h5>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {criterion.examples.map((example, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <span className="text-green-500 mt-1">•</span>
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      {criterion.improvementStrategy && (
                        <div className="bg-blue-50 rounded-lg p-4">
                          <h5 className="font-semibold text-blue-900 mb-2">• Improvement Strategy</h5>
                          <p className="text-sm text-blue-800">{criterion.improvementStrategy}</p>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Methodology Section */}
        <div className="p-8 bg-gray-50 border-t border-gray-200">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900">◉ Scoring Philosophy</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  Our scoring system balances ambitious sustainability goals with practical business realities. 
                  Each criterion uses a 0-10 scale where:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>0-3:</strong> Basic compliance or minimal effort</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>4-6:</strong> Good practices with room for improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>7-8:</strong> Advanced sustainability leadership</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span>
                    <span><strong>9-10:</strong> Industry-leading innovation and impact</span>
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 text-gray-900">▼ Our Methodology</h3>
              <div className="text-gray-700 space-y-3">
                <p>
                  This methodology represents a significant evolution in our approach, moving from subjective 
                  assessments to evidence-based evaluation with clear documentation requirements.
                </p>
                <p>
                  This update aligns with Global Sustainable Tourism Council (GSTC) standards while 
                  maintaining accessibility for Hong Kong's diverse hospitality landscape.
                </p>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-gray-300 text-center">
            <p className="text-sm text-gray-600 mb-2">
              Built for Hong Kong's hospitality industry • Updated September 2025
            </p>
            <p className="text-sm text-gray-500">
              Questions or feedback? Contact us to discuss your venue's sustainability journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CriteriaPage;
