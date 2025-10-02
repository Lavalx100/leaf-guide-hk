import { Leaf, MapPin, Award, BarChart3, Info, Briefcase, Calendar } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="relative">
                <Leaf className="w-8 h-8 text-leaf-700" />
                <Award className="w-4 h-4 text-leaf-600 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-neutral-900">Leaf Guide HK</h1>
                <p className="text-xs text-neutral-600 hidden sm:block">Sustainable Hospitality Rating</p>
              </div>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => navigate('/criteria')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === '/criteria' 
                  ? 'bg-leaf-600 text-white' 
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <BarChart3 size={16} />
              View Scoring Criteria
            </button>
            <button
              onClick={() => navigate('/services')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === '/services' 
                  ? 'bg-leaf-600 text-white' 
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <Briefcase size={16} />
              Services
            </button>
            <button
              onClick={() => navigate('/itinerary')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === '/itinerary' 
                  ? 'bg-leaf-600 text-white' 
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <Calendar size={16} />
              Itinerary Planner
            </button>
            <button
              onClick={() => navigate('/about')}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                location.pathname === '/about' 
                  ? 'bg-leaf-600 text-white' 
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              <Info size={16} />
              About Us
            </button>
          </nav>
        </div>
      </div>
    </header>
  )
}
