import { Leaf, Globe, Shield, Award, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-16 bg-neutral-100 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Leaf className="w-5 h-5 text-leaf-700" />
              <h3 className="font-semibold text-neutral-900">Leaf Guide HK</h3>
            </div>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Evidence-based sustainability ratings for Hong Kong's hospitality sector, 
              aligned with international standards.
            </p>
          </div>

          {/* Standards */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
              <Award className="w-4 h-4 text-leaf-700" />
              Standards
            </h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div>GSTC Hotel Standards</div>
              <div>UN SDGs 6, 7, 8, 12, 13, 14, 15</div>
              <div>Evidence-based methodology</div>
              <div>36-month verification cycle</div>
            </div>
          </div>

          {/* Transparency */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
              <Shield className="w-4 h-4 text-leaf-700" />
              Transparency
            </h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div>Public evidence required</div>
              <div>Confidence levels shown</div>
              <div>Source attribution</div>
              <div>Regular re-verification</div>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-neutral-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-leaf-700" />
              Get Involved
            </h4>
            <div className="space-y-2 text-sm text-neutral-600">
              <div>Submit updated evidence</div>
              <div>Nominate new venues</div>
              <div>Partner with us</div>
              <div>Share feedback</div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-neutral-500">
          <div className="flex items-center gap-4">
            <p>© {new Date().getFullYear()} Leaf Guide HK</p>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>Pilot Version</span>
            </div>
          </div>
          <p>Last updated: September 2025 | Next review: March 2026</p>
        </div>
      </div>
    </footer>
  )
}
