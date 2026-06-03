import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { TeamMember } from '../types';
import { ArrowUpRight } from 'lucide-react';
import { LogoMark } from './Logo';

const teamMembers: TeamMember[] = [
  {
    id: 'eric',
    name: 'Eric Shao',
    role: 'Co-Founder & Managing Partner',
    bio: 'Former technical lead in scalable data architectures. Specializes in optimizing hybrid cloud infrastructures for latency-sensitive applications.',
    imageUrl: '/eric.jfif'
  },
  {
    id: 'joel',
    name: 'Joel Yeo',
    role: 'Co-Founder & Managing Partner',
    bio: 'Expert in applied machine learning and Generative AI strategy. Bridges the gap between academic capabilities and enterprise requirements.',
    imageUrl: '/joel.jfif'
  },
  {
    id: 'hamza',
    name: 'Hamza Oksuz',
    role: 'Co-Founder & Managing Partner',
    bio: 'Lead architect for autonomous agentic workflows. Focuses on security, compliance, and deterministic execution of LLM systems.',
    imageUrl: '/hamza.jfif'
  }
];

export function Team() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const rotateBg = useTransform(scrollYProgress, [0, 1], [-30, 0]);
  const yBg = useTransform(scrollYProgress, [0, 1], [300, -100]);

  const smoothEase = [0.16, 1, 0.3, 1];

  return (
    <section id="team" ref={containerRef} className="pt-10 pb-32 bg-black relative overflow-hidden">
      {/* Background large logo offset to the right */}
      <motion.div 
        style={{ rotate: rotateBg, y: yBg }}
        className="absolute top-0 -right-64 opacity-[0.1] pointer-events-none transform origin-center"
      >
        <LogoMark className="w-[1200px] h-[1200px] text-white" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-16">
          {teamMembers.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 120, scale: 0.95, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.4, delay: idx * 0.2, ease: smoothEase }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="aspect-[4/5] bg-[#111] mb-8 overflow-hidden relative rounded-sm">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
              </div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-3xl font-bold group-hover:text-gray-300 transition-colors tracking-tight">{member.name}</h3>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-all duration-500 ease-[0.16,1,0.3,1] transform -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 text-white" size={28} />
              </div>
              
              <div className="relative overflow-hidden mb-6 h-6">
                <div className="absolute top-0 left-0 w-full transform group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-gray-400">
                     {member.role}
                  </p>
                </div>
                <div className="absolute top-full left-0 w-full transform group-hover:-translate-y-full transition-transform duration-500 ease-[0.16,1,0.3,1]">
                  <p className="text-sm font-bold uppercase tracking-[0.15em] text-white">
                     {member.role}
                  </p>
                </div>
              </div>
              
              <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-500 text-lg font-light">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
