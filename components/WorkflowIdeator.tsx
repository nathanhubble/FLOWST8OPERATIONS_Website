import React, { useState } from 'react';
import { generateWorkflowIdeas } from '../services/geminiService';
import { Sparkles, ArrowRight, Loader2 } from 'lucide-react';
import Button from './Button';

const WorkflowIdeator: React.FC = () => {
  const [industry, setIndustry] = useState('');
  const [role, setRole] = useState('');
  const [ideas, setIdeas] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasGenerated, setHasGenerated] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!industry || !role) return;

    setLoading(true);
    setIdeas([]);
    try {
      const generatedIdeas = await generateWorkflowIdeas(industry, role);
      setIdeas(generatedIdeas);
      setHasGenerated(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden mt-8">
      <div className="bg-gradient-to-r from-charcoal to-gray-800 p-6 text-white">
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="text-softorange w-5 h-5" />
          <h3 className="font-heading font-bold text-xl">AI Workflow Ideator</h3>
        </div>
        <p className="text-gray-300 text-sm">Not sure what to automate? Ask our AI model for quick wins based on your role.</p>
      </div>

      <div className="p-6 md:p-8">
        {!hasGenerated ? (
          <form onSubmit={handleGenerate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Industry</label>
                <input 
                  type="text" 
                  placeholder="e.g. Real Estate, Video Production"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent outline-none transition-all"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Role</label>
                <input 
                  type="text" 
                  placeholder="e.g. Founder, Editor"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage focus:border-transparent outline-none transition-all"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  required
                />
              </div>
            </div>
            <Button type="submit" fullWidth disabled={loading} variant="secondary" className="mt-4">
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Thinking...
                </>
              ) : (
                'Generate Ideas'
              )}
            </Button>
          </form>
        ) : (
          <div className="animate-fade-in">
            <h4 className="font-heading font-bold text-lg mb-4 text-charcoal">Suggested Automations:</h4>
            <ul className="space-y-3 mb-6">
              {ideas.map((idea, idx) => (
                <li key={idx} className="flex items-start gap-3 p-3 bg-offwhite rounded-lg border border-gray-100">
                  <div className="bg-sage/20 p-1 rounded mt-0.5">
                    <ArrowRight className="w-4 h-4 text-teal-700" />
                  </div>
                  <span className="text-gray-800 font-medium">{idea}</span>
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <Button onClick={() => setHasGenerated(false)} variant="outline" className="flex-1 text-sm py-2">
                Try Again
              </Button>
              <a 
                href="#audit" 
                className="flex-1"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Button fullWidth className="text-sm py-2 bg-softorange hover:bg-orange-500 text-charcoal border-none">
                  Build These
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkflowIdeator;