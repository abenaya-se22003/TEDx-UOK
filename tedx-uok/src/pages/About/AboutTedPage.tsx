// pages/About/AboutTedPage.tsx
import { useEffect } from 'react';

const AboutTedPage = () => {
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
      <section className="min-h-screen flex flex-col justify-center items-center px-6 py-20 relative">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0a0a0a] to-[#1a0000]"></div>
        
        <div className="text-center max-w-6xl mx-auto relative z-10">
          <h1 className="text-8xl md:text-9xl font-bold mb-10 tracking-tight">
            <span className="text-[#EB0028]">TED</span>
          </h1>
          <p className="text-4xl md:text-5xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Ideas Worth Spreading
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            A global community welcoming people from every discipline and culture 
            who seek a deeper understanding of the world.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="text-gray-500 text-sm mb-4">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-6xl md:text-7xl font-bold mb-10">
                <span className="text-white">Our</span>
                <span className="text-[#EB0028] ml-4">Mission</span>
              </h2>
              <div className="h-1 w-32 bg-[#EB0028] mb-8"></div>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                TED's mission is to spread ideas. We believe passionately in the 
                power of ideas to change attitudes, lives and, ultimately, the world.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                On TED.com, we're building a clearinghouse of free knowledge from 
                the world's most inspired thinkers — and a community of curious 
                souls to engage with ideas and each other.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 h-[500px] flex flex-col justify-center">
              <div className="text-7xl mb-8 text-center">🌍</div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Global Impact</h3>
              <p className="text-gray-400 text-center text-xl">
                Reaching millions across 100+ languages through talks, podcasts, and initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-[#EB0028]">History</span>
            <span className="text-white ml-4">& Timeline</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-300 h-[400px] flex flex-col">
              <div className="text-[#EB0028] text-5xl mb-6">1984</div>
              <h3 className="text-2xl font-bold text-white mb-4">The Beginning</h3>
              <p className="text-gray-400 flex-grow">
                TED began as a conference where Technology, Entertainment and Design converged.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-300 h-[400px] flex flex-col">
              <div className="text-[#EB0028] text-5xl mb-6">2006</div>
              <h3 className="text-2xl font-bold text-white mb-4">Going Online</h3>
              <p className="text-gray-400 flex-grow">
                First TED Talks posted online, beginning the global idea-sharing revolution.
              </p>
            </div>
            
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-8 hover:border-[#EB0028] transition-all duration-300 h-[400px] flex flex-col">
              <div className="text-[#EB0028] text-5xl mb-6">Today</div>
              <h3 className="text-2xl font-bold text-white mb-4">Global Platform</h3>
              <p className="text-gray-400 flex-grow">
                Covering all topics in 100+ languages with billions of views worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-white">Key</span>
            <span className="text-[#EB0028] ml-4">Initiatives</span>
          </h2>
          
          <div className="space-y-12">
            <div className="bg-gradient-to-r from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="text-6xl">🎬</div>
                <div className="flex-grow">
                  <h3 className="text-4xl font-bold text-white mb-4">TED Talks</h3>
                  <p className="text-xl text-gray-400">
                    Free videos from the world's most inspiring thinkers, available at TED.com and on YouTube.
                    Millions of views daily across every continent.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="text-6xl">🎓</div>
                <div className="flex-grow">
                  <h3 className="text-4xl font-bold text-white mb-4">TED Conferences</h3>
                  <p className="text-xl text-gray-400">
                    Annual flagship events in Vancouver, Canada, featuring world-changing ideas 
                    and innovations from leading thinkers.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
                <div className="text-6xl">📚</div>
                <div className="flex-grow">
                  <h3 className="text-4xl font-bold text-white mb-4">TED-Ed</h3>
                  <p className="text-xl text-gray-400">
                    Lessons worth sharing. An award-winning youth and education initiative 
                    creating animated educational videos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-12">
            <span className="text-white">Explore</span>
            <span className="text-[#EB0028] ml-4">More</span>
          </h2>
          <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto">
            Dive deeper into the world of ideas worth spreading.
          </p>
          
          <div className="space-y-8">
            <a 
              href="https://www.ted.com/about"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full max-w-md bg-[#EB0028] text-white px-12 py-6 rounded-full text-2xl font-bold hover:bg-red-700 transition-colors duration-300 mx-auto"
            >
              Visit TED.com
              <svg className="w-8 h-8 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
            
            <div className="pt-12 border-t border-gray-800">
              <a 
                href="/about"
                className="inline-flex items-center text-xl text-gray-400 hover:text-white transition-colors duration-300"
              >
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to About Overview
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTedPage;