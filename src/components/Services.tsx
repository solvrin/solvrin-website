import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Service } from '../types';
import { BrainCircuit, Database, GitMerge, X, ChevronDown } from 'lucide-react';
import { LogoMark } from './Logo';
import { SMOOTH_EASE } from '../utils';

const servicesData: Service[] = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Custom LLM Integration',
    description: 'Bespoke large language model deployment aligned with your proprietary data taxonomies.',
    icon: 'brain',
    processSteps: [
      { title: 'Readiness Audit', description: 'Assessing data maturity and infrastructure readiness for AI deployment.' },
      { title: 'Model Selection', description: 'Evaluating open-weight and proprietary models by latency, cost, and fit.' },
      { title: 'RAG Pipeline Deployment', description: 'Building secure retrieval-augmented generation pipelines over enterprise data.' },
      { title: 'RLHF Fine-Tuning', description: 'Aligning model outputs to domain-specific expertise and operational tone.' }
    ]
  },
  {
    id: 'data-arch',
    title: 'Enterprise Data Architecture & Cloud Infrastructure',
    description: 'Resilient, high-availability data pipelines designed for scale and zero-downtime analytics.',
    icon: 'database',
    processSteps: [
      { title: 'Topology Design', description: 'Mapping data flow across multi-cloud or hybrid environments.' },
      { title: 'Warehouse Modernization', description: 'Migrating legacy silos into unified, structured data lakes.' },
      { title: 'Real-Time Streaming', description: 'Implementing robust Kafka/Kinesis event streams for instant insights.' },
      { title: 'Governance & Compliance', description: 'Enforcing strict access controls and audit logging protocols.' }
    ]
  },
  {
    id: 'workflow-auto',
    title: 'Workflow Automation & Agentic Orchestration',
    description: 'Autonomous AI agents that execute complex, multi-step business logic without human intervention.',
    icon: 'workflow',
    processSteps: [
      { title: 'Process Mining', description: 'Identifying high-friction manual tasks suitable for automation.' },
      { title: 'Agent Framing', description: 'Defining tight operational boundaries and tool-access constraints.' },
      { title: 'Integration Mapping', description: 'Connecting agents securely to internal APIs, CRMs, and ERPs.' },
      { title: 'Monitoring & HIL', description: 'Deploying Human-in-the-Loop oversight dashboards for critical actions.' }
    ]
  }
];

const IconMap = {
  brain: BrainCircuit,
  database: Database,
  workflow: GitMerge,
} as const;

export function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section id="services" ref={containerRef} className="pt-32 pb-10 bg-[#050505] relative overflow-hidden">

      <motion.div
        style={{ y: yBg, rotate: rotateBg }}
        className="absolute top-0 right-0 -mr-64 mt-12 opacity-[0.1] pointer-events-none origin-center"
      >
        <LogoMark className="w-250 h-250 text-white" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

        <div className="mb-12 md:w-2/3">
          <div className="overflow-hidden pb-4">
            <motion.h2
              initial={{ y: "130%", opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.2, ease: SMOOTH_EASE }}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tighter"
            >
              Core Capabilities
            </motion.h2>
          </div>
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 1, ease: SMOOTH_EASE, delay: 0.2 }}
            className="w-24 h-0.5 bg-white mb-10 origin-left"
          />
          <div className="overflow-hidden pb-2">
            <motion.p
              initial={{ y: "120%", opacity: 0, filter: "blur(10px)" }}
              whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 1.2, ease: SMOOTH_EASE, delay: 0.3 }}
              className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-2xl font-light"
            >
              We architect solutions at the intersection of deep tech and business logic. Our methodologies are rigorous, repeatable, and aligned with enterprise security standards.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => {
            const Icon = IconMap[service.icon];
            return (
               <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 120, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.4, delay: idx * 0.2, ease: SMOOTH_EASE }}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer bg-black border border-white/5 p-10 hover:border-white/40 transition-all hover:shadow-2xl overflow-hidden relative min-h-100 flex flex-col justify-between"
              >
                <div className="absolute -bottom-16 -right-16 opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 ease-[0.16,1,0.3,1] group-hover:scale-150 origin-center group-hover:-rotate-12 pointer-events-none">
                  <LogoMark className="w-80 h-80 text-white/50" />
                </div>

                <div>
                  <div className="mb-8 p-5 bg-[#111] inline-block rounded-full relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:text-black">
                    <Icon size={32} className="currentColor transition-all" strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 z-10 relative tracking-tight leading-tight">{service.title}</h3>
                  <p className="text-gray-400 text-lg mb-8 z-10 relative leading-relaxed">{service.description}</p>
                </div>

                <div className="flex items-center text-sm font-bold uppercase tracking-widest gap-3 opacity-60 group-hover:opacity-100 transition-all duration-500 ease-out z-10 relative mt-auto border-t border-white/5 pt-6">
                  Primary Scope <ChevronDown size={18} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: SMOOTH_EASE }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.95, y: 20, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: SMOOTH_EASE }}
              className="relative w-full max-w-4xl bg-black border border-white/10 overflow-hidden shadow-2xl"
            >
              <div className="p-10 md:p-16 max-h-[85vh] overflow-y-auto">
                <button
                  onClick={() => setSelectedService(null)}
                  aria-label="Close modal"
                  className="absolute top-8 right-8 p-3 bg-[#111] text-gray-400 hover:text-white hover:bg-[#222] rounded-full transition-all"
                >
                  <X size={24} />
                </button>

                <div className="w-16 h-0.5 bg-white mb-8" />
                <h3 className="text-4xl md:text-5xl font-bold mb-6 pr-12 tracking-tight leading-tight">{selectedService.title}</h3>
                <p className="text-xl md:text-2xl text-gray-300 mb-16 font-light">{selectedService.description}</p>

                <h4 className="text-sm uppercase tracking-widest font-bold mb-10 text-white">Deployment Architecture</h4>

                <div className="space-y-12">
                  {selectedService.processSteps.map((step, idx) => (
                    <motion.div
                      key={step.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, delay: 0.2 + (idx * 0.1), ease: SMOOTH_EASE }}
                      className="flex gap-8 group/step"
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-lg font-bold shrink-0 text-gray-400 group-hover/step:bg-white group-hover/step:text-black transition-colors duration-500">
                          {idx + 1}
                        </div>
                        {idx !== selectedService.processSteps.length - 1 && (
                          <div className="w-px h-full bg-white/10 my-4" />
                        )}
                      </div>
                      <div className="pb-4 pt-1">
                        <h5 className="text-2xl font-bold mb-3">{step.title}</h5>
                        <p className="text-lg text-gray-400 leading-relaxed font-light">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
