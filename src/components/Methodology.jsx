import { useState } from 'react'
import { ChevronDown, ChevronUp, Award, Shield, Globe, Target, Leaf } from 'lucide-react'
import { CRITERIA, LEAF_TIERS, SECTOR_WEIGHTS } from '../data.js'

function MethodologySection({ title, icon: Icon, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  
  return (
    <div className="border border-neutral-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-white hover:bg-neutral-50 transition-colors"
      >
        <div className="flex items-center gap-3">
          <Icon className="w-5 h-5 text-leaf-700" />
          <h3 className="text-lg font-semibold text-left">{title}</h3>
        </div>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && (
        <div className="p-4 pt-0 bg-neutral-50 border-t border-neutral-200">
          {children}
        </div>
      )}
    </div>
  )
}

export default function Methodology() {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden">
      <div className="p-6 border-b border-neutral-200 bg-leaf-50">
        <div className="flex items-center gap-3 mb-3">
          <Leaf className="w-8 h-8 text-leaf-700" />
          <h2 className="text-2xl font-bold text-leaf-900">The Leaf Guide Methodology</h2>
        </div>
        <p className="text-leaf-800 leading-relaxed">
          A comprehensive, evidence-based sustainability rating system for hospitality in Hong Kong, 
          aligned with GSTC standards and UN Sustainable Development Goals.
        </p>
      </div>

      <div className="p-6 space-y-4">
        <MethodologySection title="Rating System Overview" icon={Award} defaultOpen={true}>
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              The Leaf Guide uses a transparent, Michelin-style approach to rate sustainable hospitality 
              practices across hotels, restaurants, cafes, and bakeries in Hong Kong.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(LEAF_TIERS).map(([tier, info]) => (
                <div key={tier} className="p-4 border border-leaf-200 rounded-lg bg-leaf-50">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(parseInt(tier))].map((_, i) => (
                        <Leaf key={i} className="w-4 h-4 text-leaf-700" />
                      ))}
                    </div>
                    <span className="font-semibold text-leaf-900">{info.name}</span>
                  </div>
                  <div className="text-sm text-leaf-700 mb-2">Score: {info.min}-{info.max}/100</div>
                  <p className="text-sm text-leaf-800 leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </MethodologySection>

        <MethodologySection title="Assessment Criteria" icon={Target}>
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              All businesses are evaluated across 6 core criteria, with sector-specific weightings 
              to reflect what each industry can realistically control and influence.
            </p>
            
            <div className="space-y-4">
              {CRITERIA.map((criterion) => (
                <div key={criterion.key} className="p-4 border border-neutral-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-neutral-900">{criterion.name}</h4>
                    {criterion.max && (
                      <span className="text-sm text-neutral-500">Max: {criterion.max} points</span>
                    )}
                  </div>
                  <p className="text-sm text-neutral-700 leading-relaxed">{criterion.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-neutral-900 mb-3">Sector Weightings</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(SECTOR_WEIGHTS).map(([sector, weights]) => (
                  <div key={sector} className="p-3 border border-neutral-200 rounded-lg">
                    <h5 className="font-medium text-neutral-900 mb-2">{sector}</h5>
                    <div className="space-y-1 text-sm">
                      <div className="flex justify-between">
                        <span>Food:</span>
                        <span className="font-medium">{weights.food}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Waste:</span>
                        <span className="font-medium">{weights.waste}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Energy:</span>
                        <span className="font-medium">{weights.energy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Water:</span>
                        <span className="font-medium">{weights.water}%</span>
                      </div>
                      <div className="flex justify-between text-neutral-600">
                        <span>Governance:</span>
                        <span>10%</span>
                      </div>
                      <div className="flex justify-between text-neutral-600">
                        <span>Community:</span>
                        <span>10%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </MethodologySection>

        <MethodologySection title="Evidence Standards" icon={Shield}>
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              Our rating system maintains strict transparency and fairness through rigorous evidence requirements:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900">Evidence Requirements</h4>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-leaf-600 rounded-full mt-2 shrink-0"></span>
                    Public documentation within last 36 months
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-leaf-600 rounded-full mt-2 shrink-0"></span>
                    Corporate reports and certification registers
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-leaf-600 rounded-full mt-2 shrink-0"></span>
                    Credible press coverage and NGO listings
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-leaf-600 rounded-full mt-2 shrink-0"></span>
                    Verifiable photos and documentation
                  </li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900">Confidence Levels</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">High</span>
                    <span className="text-sm text-neutral-700">Fresh, facility-specific evidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">Medium</span>
                    <span className="text-sm text-neutral-700">Group-level or slightly dated evidence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-medium">Low</span>
                    <span className="text-sm text-neutral-700">Limited or unverified evidence</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h4 className="font-semibold text-yellow-900 mb-2">Fairness Guardrails</h4>
              <ul className="space-y-1 text-sm text-yellow-800">
                <li>• Group policies count at 50% unless location-specific implementation is shown</li>
                <li>• Initiatives older than 36 months receive half credit until reconfirmed</li>
                <li>• Legal violations or misleading claims cap rating at 1 Leaf until resolved</li>
                <li>• Regular re-verification every 12 months</li>
              </ul>
            </div>
          </div>
        </MethodologySection>

        <MethodologySection title="Standards Alignment" icon={Globe}>
          <div className="space-y-4">
            <p className="text-neutral-700 leading-relaxed">
              The Leaf Guide aligns with internationally recognized sustainability frameworks:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900">GSTC Standards</h4>
                <div className="space-y-2 text-sm text-neutral-700">
                  <p><strong>Section A:</strong> Effective Sustainability Planning → Governance & Transparency</p>
                  <p><strong>Section B:</strong> Social and Economic Benefits → Community & Labor</p>
                  <p><strong>Section C:</strong> Cultural Heritage → Community Programs</p>
                  <p><strong>Section D:</strong> Environmental Management → Food, Waste, Energy, Water</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-neutral-900">UN SDGs</h4>
                <div className="grid grid-cols-2 gap-2 text-sm text-neutral-700">
                  <div>SDG 6: Clean Water</div>
                  <div>SDG 7: Clean Energy</div>
                  <div>SDG 8: Decent Work</div>
                  <div>SDG 12: Responsible Consumption</div>
                  <div>SDG 13: Climate Action</div>
                  <div>SDG 14: Life Below Water</div>
                  <div>SDG 15: Life on Land</div>
                </div>
              </div>
            </div>
            
            <div className="p-4 bg-leaf-50 border border-leaf-200 rounded-lg">
              <p className="text-sm text-leaf-800 leading-relaxed">
                <strong>Recognition of existing certifications:</strong> GSTC-accredited certifications 
                receive full credit for relevant sub-criteria. Other recognized certifications 
                (ISO 14001, Green Key, etc.) are weighted according to scope and rigor.
              </p>
            </div>
          </div>
        </MethodologySection>
      </div>
    </div>
  )
}