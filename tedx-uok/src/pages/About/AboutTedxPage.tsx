// pages/About/AboutTedxPage.tsx
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutTedxPage = () => {
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
            <span className="text-white">TED</span>
            <span className="text-[#EB0028]">x</span>
          </h1>
          <p className="text-4xl md:text-5xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Independently Organized TED Events
          </p>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-4xl mx-auto leading-relaxed">
            In the spirit of ideas worth spreading, TEDx is a program of local, 
            self-organized events that bring people together to share a TED-like experience.
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

      {/* Definition Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 h-[500px] flex flex-col justify-center">
              <div className="text-7xl mb-8 text-center">🎯</div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">What is TEDx?</h3>
              <p className="text-gray-400 text-center text-xl">
                TEDx events are independently organized under a free license granted by TED.
                These events bring the spirit of TED to local communities around the globe.
              </p>
            </div>
            
            <div>
              <h2 className="text-6xl md:text-7xl font-bold mb-10">
                <span className="text-white">Community</span>
                <span className="text-[#EB0028] ml-4">Driven</span>
              </h2>
              <div className="h-1 w-32 bg-[#EB0028] mb-8"></div>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                At a TEDx event, TED Talk videos and live speakers combine 
                to spark deep discussion and connection.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed">
                Each event is organized by passionate volunteers who believe 
                in the power of ideas to transform their communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TED vs TEDx Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-white">TED</span>
            <span className="text-gray-500 mx-6">vs</span>
            <span className="text-[#EB0028]">TEDx</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* TED Column */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-300">
              <div className="text-center mb-10">
                <span className="text-[#EB0028] font-bold text-6xl">TED</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Organized by TED</h4>
                    <p className="text-gray-400">Directly organized by the TED organization</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Global Conferences</h4>
                    <p className="text-gray-400">Major international events</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">TED-Invited Speakers</h4>
                    <p className="text-gray-400">Speakers directly invited by TED</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Paid Attendance</h4>
                    <p className="text-gray-400">Ticket-based entry</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* TEDx Column */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 hover:border-[#EB0028] transition-all duration-300">
              <div className="text-center mb-10">
                <span className="text-white font-medium text-5xl">TED</span>
                <span className="text-[#EB0028] font-bold text-6xl">x</span>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Independently Organized</h4>
                    <p className="text-gray-400">Organized by local volunteers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Local Community Events</h4>
                    <p className="text-gray-400">Held in communities worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Volunteer-Organized</h4>
                    <p className="text-gray-400">Run by passionate volunteers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Often Free/Low-Cost</h4>
                    <p className="text-gray-400">Accessible to wider audiences</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Licensing Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-white">Licensing</span>
            <span className="text-[#EB0028] ml-4">& Rules</span>
          </h2>
          
          <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-12 mb-12">
            <p className="text-2xl text-gray-300 mb-10 leading-relaxed">
              TEDx events are operated under license from TED. Organizers agree to follow 
              strict guidelines to ensure quality and consistency with TED values.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-6">Key Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-[#EB0028] text-xl mt-1">✓</span>
                    <span className="text-gray-300 text-lg">Non-commercial nature</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EB0028] text-xl mt-1">✓</span>
                    <span className="text-gray-300 text-lg">Official TEDx branding</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#EB0028] text-xl mt-1">✓</span>
                    <span className="text-gray-300 text-lg">All talks recorded & shared</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white mb-6">Prohibited</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl mt-1">✗</span>
                    <span className="text-gray-300 text-lg">Political/religious agendas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl mt-1">✗</span>
                    <span className="text-gray-300 text-lg">Pseudoscience content</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gray-500 text-xl mt-1">✗</span>
                    <span className="text-gray-300 text-lg">Individual talk sponsorship</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-12 mb-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-white">Organize Your</span>
              <span className="text-[#EB0028] ml-4">Own TEDx</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Interested in bringing TEDx to your community?
            </p>
            
            <a 
              href="https://www.ted.com/participate/organize-a-local-tedx-event"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-[#EB0028] text-[#EB0028] px-12 py-5 rounded-full font-bold text-xl hover:bg-[#EB0028] hover:text-white transition-all duration-300"
            >
              Learn About Organizing
              <svg className="w-8 h-8 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="pt-12 border-t border-gray-800">
            <Link 
              to="/about"
              className="inline-flex items-center text-xl text-gray-400 hover:text-white transition-colors duration-300"
            >
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to About Overview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutTedxPage;