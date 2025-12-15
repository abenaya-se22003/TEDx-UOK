// pages/About/AboutPage.tsx
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const AboutPage = () => {
  // Remove any scroll restrictions for full screen
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white w-full">
      {/* Full Screen Hero */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20">
        <div className="text-center max-w-6xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-bold mb-8 tracking-tight">
            About
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Discover the mission, history, and ideas behind TED, TEDx, and TEDxUOK.
          </p>
        </div>

        {/* Navigation Cards - Full Width */}
        <div className="w-full max-w-7xl mx-auto mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-4">
            {/* TED Card */}
            <Link 
              to="/about/ted" 
              className="group relative h-[500px] bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              {/* Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#EB0028]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div>
                <div className="mb-8">
                  <span className="text-[#EB0028] font-bold text-7xl">TED</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">About TED</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Mission, history, and global initiatives of the world's leading ideas platform.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#EB0028] text-xl font-bold group-hover:underline">
                  Learn more
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div className="text-gray-500 text-sm">
                  Explore →
                </div>
              </div>
            </Link>

            {/* TEDx Card */}
            <Link 
              to="/about/tedx" 
              className="group relative h-[500px] bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#EB0028]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div>
                <div className="mb-8">
                  <span className="text-white font-medium text-5xl">TED</span>
                  <span className="text-[#EB0028] font-bold text-7xl ml-2">x</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">About TEDx</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Learn about the TEDx program, licensing, and how it differs from TED conferences.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#EB0028] text-xl font-bold group-hover:underline">
                  Learn more
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div className="text-gray-500 text-sm">
                  Discover →
                </div>
              </div>
            </Link>

            {/* TEDxUOK Card */}
            <Link 
              to="/about/tedx-uok" 
              className="group relative h-[500px] bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#EB0028]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div>
                <div className="mb-8">
                  <span className="text-white font-medium text-5xl">TED</span>
                  <span className="text-[#EB0028] font-bold text-7xl ml-2">x</span>
                  <span className="text-white font-bold text-5xl ml-2">UOK</span>
                </div>
                <h2 className="text-4xl font-bold text-white mb-6">About TEDxUOK</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Our story, mission, and commitment to spreading ideas at University of Kelaniya.
                </p>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center text-[#EB0028] text-xl font-bold group-hover:underline">
                  Learn more
                  <svg className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </div>
                <div className="text-gray-500 text-sm">
                  Join us →
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 text-center">
          <div className="text-gray-500 text-sm mb-4">Scroll to explore more</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Additional Content Section - Optional */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-10">
            <span className="text-white">Why </span>
            <span className="text-[#EB0028]">Ideas</span>
            <span className="text-white"> Matter</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
            At the heart of every TED, TEDx, and TEDxUOK event is a simple belief: 
            ideas have the power to change attitudes, lives, and ultimately, the world.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 border border-gray-800 rounded-2xl hover:border-[#EB0028] transition-colors duration-300">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-2xl font-bold mb-4">Global Community</h3>
              <p className="text-gray-400">
                Connecting thinkers and doers across boundaries and disciplines.
              </p>
            </div>
            
            <div className="p-8 border border-gray-800 rounded-2xl hover:border-[#EB0028] transition-colors duration-300">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-2xl font-bold mb-4">Local Impact</h3>
              <p className="text-gray-400">
                Bringing global ideas to our community at University of Kelaniya.
              </p>
            </div>
            
            <div className="p-8 border border-gray-800 rounded-2xl hover:border-[#EB0028] transition-colors duration-300">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-4">Future Forward</h3>
              <p className="text-gray-400">
                Exploring ideas that will shape tomorrow's world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="min-h-[70vh] flex items-center justify-center px-6 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Ready to 
            <span className="text-[#EB0028]"> Dive Deeper</span>
            ?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Select any of the sections above to explore the complete story behind each initiative.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/"
              className="px-10 py-4 border-2 border-white text-white rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
            >
              Return Home
            </Link>
            <Link 
              to="/events"
              className="px-10 py-4 bg-[#EB0028] text-white rounded-full text-lg font-bold hover:bg-red-700 transition-colors duration-300"
            >
              View Events
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;