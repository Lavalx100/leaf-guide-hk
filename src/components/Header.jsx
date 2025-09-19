import { Leaf, MapPin, Award } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-neutral-200 shadow-sm">
      <div className="mx-auto max-w-7xl px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Leaf className="w-8 h-8 text-leaf-700" />
                <Award className="w-4 h-4 text-leaf-600 absolute -top-1 -right-1" />
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-neutral-900">Leaf Guide HK</h1>
                <p className="text-xs text-neutral-600 hidden sm:block">Sustainable Hospitality Rating</p>
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-4 text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-leaf-600" />
              <span className="font-medium">Hong Kong</span>
            </div>
            <div className="w-px h-4 bg-neutral-300"></div>
            <span className="text-neutral-500">10 venues rated</span>
            <span className="text-neutral-500">GSTC aligned</span>
          </div>
          
          <div className="md:hidden flex items-center gap-1 text-sm text-neutral-600">
            <MapPin className="w-4 h-4 text-leaf-600" />
            <span className="font-medium">HK</span>
          </div>
        </div>
      </div>
    </header>
  )
}
