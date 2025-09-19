import { ExternalLink, BookOpen } from 'lucide-react'
import { REFERENCES } from '../data.js'

export default function References() {
  return (
    <div className="bg-white rounded-2xl shadow-soft border border-neutral-200 overflow-hidden">
      <div className="p-6 border-b border-neutral-200 bg-neutral-50">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-neutral-700" />
          <h2 className="text-xl font-bold text-neutral-900">References & Sources</h2>
        </div>
        <p className="text-neutral-600 mt-2">
          All ratings are based on publicly available evidence. Click any link to view the original source.
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REFERENCES.map((ref) => (
            <div key={ref.id} className="p-4 border border-neutral-200 rounded-lg hover:border-leaf-300 transition-colors">
              <div className="flex items-start gap-3">
                <ExternalLink className="w-4 h-4 text-leaf-600 mt-1 shrink-0" />
                <div className="flex-1 min-w-0">
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-leaf-700 hover:text-leaf-900 hover:underline leading-relaxed block"
                  >
                    {ref.title}
                  </a>
                  <div className="text-xs text-neutral-500 mt-1">
                    {ref.author} ({ref.year})
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 p-4 bg-leaf-50 border border-leaf-200 rounded-lg">
          <div className="flex items-start gap-2">
            <BookOpen className="w-4 h-4 text-leaf-700 mt-0.5" />
            <div className="text-sm text-leaf-800">
              <p className="font-medium mb-1">Evidence Standards</p>
              <p className="leading-relaxed">
                All evidence must be publicly documented within the last 36 months, from credible sources 
                including corporate reports, certification registers, press coverage, or NGO listings. 
                Each source is verified and linked for transparency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}