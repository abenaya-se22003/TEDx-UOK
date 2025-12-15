
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const AboutTedxUokPage = () => {
  useEffect(() => {
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, []);

  const currentTheme = "The Ripple Effect";
  const eventYear = "2024";

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
            <span className="text-white ml-4">UOK</span>
          </h1>
          <p className="text-4xl md:text-5xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
            Spreading Ideas at University of Kelaniya
          </p>
          <div className="inline-block bg-gradient-to-r from-[#EB0028]/20 to-transparent border-l-4 border-[#EB0028] px-8 py-4 mb-16">
            <p className="text-2xl md:text-3xl text-white">
              {eventYear} Theme: <span className="text-[#EB0028] font-bold">{currentTheme}</span>
            </p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="text-gray-500 text-sm mb-4">Scroll to explore</div>
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full mx-auto relative">
            <div className="w-1 h-3 bg-gray-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Mission & Story Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-white">Our</span>
            <span className="text-[#EB0028] ml-4">Story</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="h-1 w-32 bg-[#EB0028] mb-8"></div>
              <p className="text-2xl text-gray-300 mb-8 leading-relaxed">
                TEDxUOK was founded with a simple yet powerful vision: to create a platform 
                where innovative ideas from the University of Kelaniya community could be 
                shared with the world.
              </p>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                As the first officially licensed TEDx event at University of Kelaniya, 
                we're committed to fostering intellectual curiosity, interdisciplinary 
                dialogue, and transformative thinking.
              </p>
              
              <div className="bg-gradient-to-r from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-2xl p-8 mt-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300">
                  To become Sri Lanka's premier student-led platform for thought-provoking 
                  ideas that inspire action and positive change.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10 h-[500px] flex flex-col justify-center items-center">
              <div className="text-7xl mb-8">🏛️</div>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">University of Kelaniya</h3>
              <p className="text-gray-400 text-center text-xl">
                A premier institution fostering innovation, research, and community leadership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Theme Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-6xl md:text-7xl font-bold mb-6">
              <span className="text-white">TEDxUOK {eventYear}:</span>
              <span className="text-[#EB0028] ml-4">{currentTheme}</span>
            </h2>
            <div className="inline-block h-1 w-48 bg-gradient-to-r from-transparent via-[#EB0028] to-transparent"></div>
          </div>
          
          <div className="bg-gradient-to-b from-gray-900 to-black border-2 border-gray-800 rounded-3xl p-12 mb-12">
            <h3 className="text-4xl font-bold text-white mb-8 text-center">
              What is the Ripple Effect?
            </h3>
            <p className="text-2xl text-gray-300 mb-8 text-center leading-relaxed">
              Every idea, no matter how small, has the potential to create waves of change.
            </p>
            <p className="text-xl text-gray-400 mb-10 text-center leading-relaxed">
              Like a single pebble dropped in water creates ripples that expand outward, 
              our ideas and actions can influence far beyond our immediate reach.
            </p>
            <p className="text-lg text-gray-500 text-center leading-relaxed">
              Through this theme, we'll explore stories of innovation, courage, and 
              transformation that started small but created lasting impact.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌊</div>
              <h4 className="text-2xl font-bold text-white mb-4">Small Beginnings</h4>
              <p className="text-gray-400">Great ideas often start from simple origins</p>
            </div>
            
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">🌀</div>
              <h4 className="text-2xl font-bold text-white mb-4">Expanding Impact</h4>
              <p className="text-gray-400">How local actions create global change</p>
            </div>
            
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-2xl p-8 text-center">
              <div className="text-5xl mb-4">💫</div>
              <h4 className="text-2xl font-bold text-white mb-4">Lasting Legacy</h4>
              <p className="text-gray-400">Ideas that continue to inspire generations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Goals & Impact Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-black to-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-7xl font-bold mb-16 text-center">
            <span className="text-white">Goals</span>
            <span className="text-[#EB0028] ml-4">& Impact</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Short-term Goals */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-[#EB0028] mb-8 text-center">Short-term Goals</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Curate Inspiring Talks</h4>
                    <p className="text-gray-400">10+ talks from diverse fields and backgrounds</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Engage Community</h4>
                    <p className="text-gray-400">500+ attendees from university and local community</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-[#EB0028] text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Foster Connections</h4>
                    <p className="text-gray-400">Interdisciplinary connections among students</p>
                  </div>
                </li>
              </ul>
            </div>
            
            {/* Long-term Impact */}
            <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-10">
              <h3 className="text-3xl font-bold text-white mb-8 text-center">Long-term Impact</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Annual Tradition</h4>
                    <p className="text-gray-400">Establish yearly idea-sharing events</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Alumni Network</h4>
                    <p className="text-gray-400">Create network of speakers and thinkers</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="text-white text-2xl mt-1">•</div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-2">Inspire Innovation</h4>
                    <p className="text-gray-400">Research and innovation collaborations</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center p-8 border-2 border-gray-800 rounded-2xl hover:border-[#EB0028] transition-colors duration-300">
              <div className="text-5xl font-bold text-[#EB0028] mb-4">1st</div>
              <h4 className="text-xl font-bold text-white mb-2">Licensed Event</h4>
              <p className="text-gray-400">First TEDx at University of Kelaniya</p>
            </div>
            
            <div className="text-center p-8 border-2 border-gray-800 rounded-2xl hover:border-[#EB0028] transition-colors duration-300">
              <div className="text-5xl font-bold text-[#EB0028] mb-4">100%</div>
              <h4 className="text-xl font-bold text-white mb-2">Student-Led</h4>
              <p className="text-gray-400">Organized by passionate volunteers</p>
            </div>
            
            <div className="text-center p-8 border-2 border-gray-800 rounded-2xl hover:border-[#EB0028] transition-colors duration-300">
              <div className="text-5xl font-bold text-[#EB0028] mb-4">∞</div>
              <h4 className="text-xl font-bold text-white mb-2">Ideas Shared</h4>
              <p className="text-gray-400">Unlimited potential for impact</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA Section */}
      <section className="min-h-screen flex items-center justify-center px-6 bg-black">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-gradient-to-b from-[#0a0a0a] to-black border-2 border-[#1F1F1F] rounded-3xl p-12 mb-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8">
              <span className="text-white">Meet Our</span>
              <span className="text-[#EB0028] ml-4">Team</span>
            </h2>
            <p className="text-2xl text-gray-300 mb-10 max-w-2xl mx-auto">
              TEDxUOK is organized entirely by passionate volunteers from University of Kelaniya.
            </p>
            
            <Link 
              to="/team"
              className="inline-flex items-center bg-[#EB0028] text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-red-700 transition-colors duration-300"
            >
              View Organizing Team
              <svg className="w-8 h-8 ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>
          </div>
          
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Link 
                to="/about/ted"
                className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-black transition-all duration-300"
              >
                About TED
              </Link>
              
              <Link 
                to="/about/tedx"
                className="inline-flex items-center justify-center border-2 border-[#EB0028] text-[#EB0028] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#EB0028] hover:text-white transition-all duration-300"
              >
                About TEDx
              </Link>
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
        </div>
      </section>
    </div>
  );
};

export default AboutTedxUokPage;