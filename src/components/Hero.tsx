import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { LogoMark } from './Logo';
import { SMOOTH_EASE, scrollToElement } from '../utils';

export function Hero() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const opacityBg = useTransform(scrollY, [0, 600], [0.03, 0]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [progress, setProgress] = useState(0);
  const [barOpacity, setBarOpacity] = useState(1);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.playbackRate = 0.60;
    const onTimeUpdate = () => {
      if (video.duration) {
        setProgress(video.currentTime / video.duration * 100);
        setBarOpacity(video.duration - video.currentTime < 0.5 ? 0 : 1);
      }
    };
    video.addEventListener('timeupdate', onTimeUpdate);
    return () => video.removeEventListener('timeupdate', onTimeUpdate);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-20">

      <motion.div
        style={{ y: yBg, opacity: opacityBg, scale: scaleBg }}
        className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-0 mt-32 md:mt-16"
      >
        <img src="/BlackLogoNoName.png" alt="" className="w-300 h-300 opacity-10" style={{ filter: 'invert(1)' }} />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">

          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            <div className="flex flex-col items-start mb-6 gap-1 w-full">
              <div className="overflow-hidden pb-4 pt-2">
                <motion.h1
                  initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: isMobile ? 2.0 : 1.4, ease: SMOOTH_EASE, delay: 0.1 }}
                  className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05]"
                >
                  Architecting the
                </motion.h1>
              </div>
              <div className="overflow-hidden pb-4">
                <motion.h1
                  initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  transition={{ duration: isMobile ? 2.0 : 1.4, ease: SMOOTH_EASE, delay: 0.2 }}
                  className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter leading-[1.05] text-gray-400"
                >
                  Intelligence Era.
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden mb-10 w-full max-w-xl pb-2">
              <motion.p
                initial={{ y: "150%", opacity: 0, filter: "blur(10px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: isMobile ? 2.0 : 1.4, delay: 0.3, ease: SMOOTH_EASE }}
                className="text-lg md:text-xl text-gray-300 leading-relaxed font-light"
              >
                Solvrin Group delivers enterprise-grade AI integration and rigorous data strategy. We turn complex infrastructure into decisive operational advantage.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)", y: 20 }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 1.4, delay: 0.45, ease: SMOOTH_EASE }}
              className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto"
            >
              <button
                onClick={() => scrollToElement('contact')}
                className="w-full sm:w-auto bg-white text-black px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-gray-200 transition-colors"
              >
                Work With Us
              </button>
              <button
                onClick={() => scrollToElement('services')}
                className="w-full sm:w-auto bg-transparent border border-white/20 text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:border-white hover:bg-white/5 transition-all"
              >
                Explore Capabilities
              </button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pr-8">
            <motion.div
              initial={{ opacity: 0, y: 50, rotateX: 10, rotateY: -10 }}
              animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0 }}
              transition={{ duration: 1.8, delay: 0.4, ease: SMOOTH_EASE }}
              className="relative mx-auto lg:mx-0 w-70 h-145 md:w-80 md:h-162.5 bg-black rounded-[3rem] border-8 border-[#111] shadow-2xl overflow-hidden shrink-0 perspective-1000 transform-gpu group"
            >
              <div className="absolute top-0 inset-x-0 h-6 bg-[#111] rounded-b-3xl w-1/3 mx-auto z-20 flex justify-center items-center">
                <div className="w-12 h-1.5 bg-black/50 rounded-full mt-1"></div>
              </div>

              <div className="absolute inset-0 bg-linear-to-tr from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 pointer-events-none"></div>
              <div className="absolute -inset-full animate-spin-slow bg-linear-to-r from-transparent via-white/5 to-transparent z-20 pointer-events-none opacity-50 mix-blend-overlay"></div>

              <div className="absolute inset-0 bg-[#111] flex items-center justify-center z-0">
                <LogoMark className="w-32 h-32 text-gray-600 animate-pulse absolute" />
              </div>

              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover z-10 relative"
              >
                <source src="/hero-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                    <LogoMark className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <p className="text-white text-sm font-bold">Solvrin Group</p>
                  </div>
                </div>
                <div className="h-0.5 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full transition-all duration-300 ease-linear" style={{ width: `${progress}%`, opacity: barOpacity, transition: 'width 300ms linear, opacity 400ms ease' }}></div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
