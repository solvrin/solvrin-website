import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { Service } from '../types';
import { BrainCircuit, Database, GitMerge, Plus } from 'lucide-react';
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
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const rotateBg = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  const expandedService = servicesData.find(s => s.id === expandedId) ?? null;

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
            const isActive = expandedId === service.id;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 120, scale: 0.95, filter: "blur(10px)" }}
                whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                viewport={{ once: false, margin: "-50px" }}
                transition={{ duration: 1.4, delay: idx * 0.2, ease: SMOOTH_EASE }}
                onClick={() => setExpandedId(isActive ? null : service.id)}
                className={`group cursor-pointer bg-black border p-10 transition-all hover:shadow-2xl overflow-hidden relative min-h-100 flex flex-col ${
                  isActive ? 'border-white/40' : 'border-white/5 hover:border-white/40'
                }`}
              >
                <div className="absolute -bottom-16 -right-16 opacity-0 group-hover:opacity-[0.03] transition-all duration-1000 group-hover:scale-150 origin-center group-hover:-rotate-12 pointer-events-none">
                  <LogoMark className="w-80 h-80 text-white/50" />
                </div>

                <div
                  className={`absolute top-6 right-6 w-6 h-6 flex items-center justify-center transition-all duration-300 z-10 ${
                    isActive ? 'rotate-45 text-white' : 'text-gray-600 group-hover:text-gray-400'
                  }`}
                >
                  <Plus size={16} strokeWidth={2} />
                </div>

                <div>
                  <div className="mb-8 p-5 bg-[#111] inline-block rounded-full relative z-10 transition-transform duration-700 ease-out group-hover:-translate-y-2 group-hover:bg-white group-hover:text-black">
                    <Icon size={32} className="currentColor transition-all" strokeWidth={1} />
                  </div>
                  <h3 className="text-3xl font-bold mb-6 z-10 relative tracking-tight leading-tight pr-8">{service.title}</h3>
                  <p className="text-gray-400 text-lg z-10 relative leading-relaxed">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {expandedService && (
            <motion.div
              key={expandedService.id}
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease: SMOOTH_EASE }}
              className="mt-8 bg-black border border-white/10 p-10 md:p-12"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6">
                {expandedService.title}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {expandedService.processSteps.map((step, idx) => (
                  <div key={step.title} className="flex gap-5">
                    <div className="w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center justify-center text-sm font-bold shrink-0 text-gray-400 mt-0.5">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-base font-bold mb-1 tracking-tight">{step.title}</h5>
                      <p className="text-gray-400 leading-relaxed font-light text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
