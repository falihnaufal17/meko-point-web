'use client'

import dynamic from 'next/dynamic';

const Navigation = dynamic(() => import('./Navigation').then(mod => ({ default: mod.Navigation })), {
  ssr: false,
  loading: () => (
    <header className="bg-white shadow-lg fixed w-full z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="shrink-0 flex items-center">
              <div className="bg-purple-600 p-2 rounded-lg">
                <div className="h-6 w-6"></div>
              </div>
              <div className="ml-3">
                <h1 className="text-2xl font-bold text-gray-900">
                  Meko<span className="text-purple-600">Point</span>
                </h1>
                <p className="text-xs text-gray-500 -mt-1">POS dan Inventory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
});

interface ClientNavigationWrapperProps {
  scrollToSection: (sectionId: string) => void;
}

export function ClientNavigationWrapper({ scrollToSection }: ClientNavigationWrapperProps) {
  return <Navigation scrollToSection={scrollToSection} />;
}