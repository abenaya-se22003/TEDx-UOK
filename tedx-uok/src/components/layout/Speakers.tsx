import { motion } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useSpeakers } from '../../hooks/useSpeakers';

export function Speakers() {
  const ref = useRef(null);
  const { speakers, loading } = useSpeakers();

  if (loading) {
    return null;
  }

  // Display only first 4 speakers on homepage
  const displayedSpeakers = speakers.slice(0, 4);

  return (
    <section id="speakers" ref={ref} className="relative py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#EB0028] rounded-full blur-[200px] opacity-10"></div>

      <div className="relative max-w-7xl xl:max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-[#EB0028]/10 border border-[#EB0028]/20 rounded-full text-[#EB0028] mb-6"
            style={{ fontWeight: 500, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase' }}
          >
            Featured Speakers
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white mb-6"
            style={{ fontWeight: 700, fontSize: 'clamp(36px, 5vw, 64px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
          >
            Meet Our <span className="text-[#EB0028]">Speakers</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto text-lg"
            style={{ fontWeight: 300 }}
          >
            Visionaries, innovators, and thought leaders who are shaping the future
          </motion.p>
        </div>

        {/* Speaker Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedSpeakers.map((speaker, index) => (
            <motion.div
              key={speaker.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="cursor-pointer"
            >
              <Link to={`/speakers/${speaker.id}`}>
                <div className="relative bg-[#111111] border border-white/10 rounded-3xl overflow-hidden transition-colors hover:border-[#EB0028]/50 h-full">
                  {/* Speaker Image */}
                  <div className="aspect-square overflow-hidden relative">
                    <img
                      src={speaker.photo_url}
                      alt={speaker.full_name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60"></div>
                  </div>

                  {/* Speaker Info */}
                  <div className="p-6 space-y-2">
                    <h3 className="text-white" style={{ fontWeight: 600, fontSize: '20px' }}>
                      {speaker.full_name}
                    </h3>
                    <p className="text-[#EB0028]" style={{ fontWeight: 500, fontSize: '13px' }}>
                      {speaker.title}
                    </p>
                    <p className="text-white/50 pt-2 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                      {speaker.talk_title}
                    </p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/speakers">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-[#EB0028] text-white rounded-full hover:bg-[#d00024] transition-all shadow-lg shadow-[#EB0028]/30"
              style={{ fontWeight: 500, fontSize: '16px' }}
            >
              View All Speakers
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}