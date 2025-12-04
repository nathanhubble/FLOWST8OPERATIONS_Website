import React, { useState } from 'react';
import { generateWorkflowIdea } from '../services/geminiService';
import { Button } from './ui/Button';
import { ArrowRight, Sparkles, Loader2 } from 'lucide-react';

interface WorkflowResult {
  title: string;
  steps: { tool: string; action: string }[];
  efficiencyGain: string;
}

export const InteractiveDemo: React.FC = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<WorkflowResult | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setResult(null);

    try {
      const jsonStr = await generateWorkflowIdea(input);
      // Clean potential markdown fencing from AI response
      const cleanJson = jsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsed = JSON.parse(cleanJson);
      setResult(parsed);
    } catch (error) {
      console.error(error);
      setResult({
        title: "Custom Lead Qualification Bot",
        steps: [
          { tool: "Typeform", action: "Capture lead details via intelligent form" },
          { tool: "OpenAI", action: "Analyse response sentiment and qualify lead" },
          { tool: "Slack", action: "Notify sales team if high value" }
        ],
        efficiencyGain: "5+ hours/week"
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 relative overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] blob-orange rounded-full filter blur-[100px] opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] blob-teal rounded-full filter blur-[100px] opacity-20 pointer-events-none" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm mb-4">
              <Sparkles className="w-4 h-4 mr-2" />
              Try It Free
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-white">
              See Your Workflow. <span className="text-gradient-brand">Automated.</span>
            </h2>
            <p className="text-text-muted text-lg">
              Describe any repetitive task you're sick of doing. Our AI will design an automation blueprint — instantly.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Input Side */}
            <div className="glass-panel p-8 rounded-2xl h-full border-white/5">
              <form onSubmit={handleSubmit} className="flex flex-col h-full justify-center space-y-6">
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium text-text-muted mb-2">
                    What's eating your time?
                  </label>
                  <textarea
                    id="prompt"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="e.g., Copying leads from emails into CRM and scheduling follow-ups..."
                    className="w-full bg-surface border border-white/10 rounded-xl p-4 text-text placeholder-gray-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary resize-none h-32 transition-all"
                  />
                </div>
                <Button type="submit" fullWidth disabled={isLoading || !input} className="group">
                  {isLoading ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" /> Analysing...</>
                  ) : (
                    <>Generate My Automation Plan <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" /></>
                  )}
                </Button>
              </form>
            </div>

            {/* Output Side */}
            <div className="relative min-h-[300px]">
              {result ? (
                <div className="glass-panel p-8 rounded-2xl border-primary/30 bg-gradient-to-br from-white/5 to-primary/5 animate-in fade-in slide-in-from-bottom-4 duration-500 shadow-2xl shadow-primary/10">
                  <h3 className="text-xl font-bold text-secondary mb-2">{result.title}</h3>
                  <div className="text-sm text-text-muted mb-6">Estimated Savings: <span className="text-white font-semibold">{result.efficiencyGain}</span></div>
                  
                  <div className="space-y-4 relative">
                    <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-primary/50 to-transparent" />
                    {result.steps.map((step, idx) => (
                      <div key={idx} className="relative flex items-start pl-10 group">
                        <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border border-primary/50 flex items-center justify-center text-xs text-primary font-bold z-10 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-[0_0_10px_rgba(45,212,191,0.3)]">
                          {idx + 1}
                        </div>
                        <div>
                          <div className="font-semibold text-white group-hover:text-secondary transition-colors">{step.tool}</div>
                          <div className="text-sm text-text-muted">{step.action}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 pt-4 border-t border-white/10 text-center">
                    <p className="text-sm text-text-muted mb-2">Ready to build this?</p>
                    <button className="text-secondary hover:text-secondary-dark font-medium text-sm transition-colors hover:underline underline-offset-4">
                      Book a free strategy call &rarr;
                    </button>
                  </div>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-white/5 rounded-2xl bg-white/[0.02]">
                  <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                    <Workflow className="w-8 h-8 text-gray-600" />
                  </div>
                  <h4 className="text-lg font-medium text-text-muted">Your custom automation roadmap appears here</h4>
                  <p className="text-sm text-gray-600 mt-2">Powered by Gemini 2.0 Flash</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Simple Icon component for the placeholder
const Workflow = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></svg>
);