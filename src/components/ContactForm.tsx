import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactData, FormStatus } from '../types';
import { Loader2, CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState<ContactData>({
    name: '',
    company: '',
    email: '',
    projectScope: 'AI Strategy',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>('IDLE');
  const [errorMsg, setErrorMsg] = useState<string>('');

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('VALIDATING');
    setErrorMsg('');

    if (!formData.name || !formData.company || !formData.email || !formData.message) {
      setStatus('ERROR');
      setErrorMsg('All fields are required.');
      return;
    }

    if (!validateEmail(formData.email)) {
      setStatus('ERROR');
      setErrorMsg('Please enter a valid email architecture.');
      return;
    }

    setStatus('SUBMITTING');

    // Simulate network request
    await new Promise(resolve => setTimeout(resolve, 1500));

    setStatus('SUCCESS');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      company: '',
      email: '',
      projectScope: 'AI Strategy',
      message: ''
    });
    setStatus('IDLE');
  };

  return (
    <section id="contact" className="py-32 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Initiate Protocol</h2>
          <div className="w-20 h-1 bg-white mb-12" />
          <p className="text-xl text-gray-300 mb-8 max-w-md">
            Engage with our core engineering team to map out your infrastructure integration plan.
          </p>
          <div className="space-y-4 text-gray-400">
            <p className="font-medium text-white">contact@solvringroup.com</p>
            <p className="font-mono text-sm opacity-70">[ SECURE TRANSMISSION CHANNEL ]</p>
          </div>
        </div>

        <div className="bg-black p-8 md:p-12 border border-white/10 relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {status !== 'SUCCESS' ? (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit} 
                className="space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest block text-gray-300">Name</label>
                    <input 
                      type="text" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      disabled={status === 'SUBMITTING'}
                      className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:outline-none focus:border-white transition-colors rounded-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest block text-gray-300">Company</label>
                    <input 
                      type="text" 
                      value={formData.company}
                      onChange={e => setFormData({...formData, company: e.target.value})}
                      disabled={status === 'SUBMITTING'}
                      className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:outline-none focus:border-white transition-colors rounded-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest block text-gray-300">Corporate Email</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    disabled={status === 'SUBMITTING'}
                    className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:outline-none focus:border-white transition-colors rounded-none"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest block text-gray-300">Primary Scope</label>
                  <select 
                    value={formData.projectScope}
                    onChange={e => setFormData({...formData, projectScope: e.target.value as any})}
                    disabled={status === 'SUBMITTING'}
                    className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:outline-none focus:border-white transition-colors appearance-none rounded-none cursor-pointer"
                  >
                    <option value="AI Strategy" className="bg-[#111] text-white">AI Strategy & LLMs</option>
                    <option value="Data Architecture" className="bg-[#111] text-white">Data Architecture & Cloud</option>
                    <option value="Agentic Workflows" className="bg-[#111] text-white">Agentic Workflows</option>
                    <option value="Other" className="bg-[#111] text-white">Other / Unsure</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-widest block text-gray-300">Project Abstract</label>
                  <textarea 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    disabled={status === 'SUBMITTING'}
                    rows={4}
                    className="w-full border-b border-white/20 py-3 bg-transparent text-white focus:outline-none focus:border-white transition-colors resize-none rounded-none"
                  />
                </div>

                {status === 'ERROR' && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-sm font-medium">
                    {errorMsg}
                  </motion.p>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'SUBMITTING'}
                  className="w-full bg-white text-black py-4 font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors disabled:opacity-50 flex justify-center items-center h-14"
                >
                  {status === 'SUBMITTING' ? <Loader2 className="animate-spin text-black" size={20} /> : 'Transmit Directive'}
                </button>
              </motion.form>
            ) : (
              <motion.div 
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-black outline outline-1 outline-white/10"
              >
                <div className="w-16 h-16 bg-[#111] border border-white/10 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 size={32} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-bold mb-4 text-white">Transmission Received</h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  Your project scope has been securely logged. An engineering principal will review `{formData.company}` requirements and respond shortly.
                </p>
                <button 
                  onClick={handleReset}
                  className="border border-white/20 px-8 py-3 font-semibold uppercase tracking-widest text-sm hover:border-white hover:bg-white/5 transition-colors text-white"
                >
                  Acknowledge
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
