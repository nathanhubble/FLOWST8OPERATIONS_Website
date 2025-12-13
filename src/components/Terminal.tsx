import React, { useState, useRef, useEffect } from 'react';
import { generateBlueprint } from '../services/geminiService';
import Button from './Button';
import { Loader2, Terminal as TerminalIcon } from 'lucide-react';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setOutput('');
    
    // Simulate initial "thinking" terminal effect
    setOutput('> INITIALISING CONNECTION...\n> ANALYSING WORKFLOW VECTORS...');
    
    try {
      const blueprint = await generateBlueprint(input);
      setOutput((prev) => `${prev}\n> DATA RECEIVED.\n\n${blueprint}`);
    } catch (e) {
      setOutput((prev) => `${prev}\n> ERROR: UPLINK FAILED.`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [output]);

  return (
    <div className="w-full max-w-4xl mx-auto mt-12">
      <div className="bg-[#1a1c23] border-2 border-black rounded-sm overflow-hidden shadow-hard">
        {/* Terminal Header */}
        <div className="bg-[#2a2d35] px-4 py-2 flex items-center gap-2 border-b-2 border-black">
          <div className="w-3 h-3 rounded-full bg-red-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500 border border-black"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 border border-black"></div>
          <span className="ml-2 font-mono text-xs text-gray-400">gemini-2.5-flash_terminal.exe</span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm md:text-base">
          <div className="mb-4 text-mint-start">
            <span className="mr-2">$</span>
            <span className="text-gray-400">// Describe a repetitive task to generate a blueprint</span>
          </div>

          <div className="flex flex-col gap-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What's eating your time? (e.g., Copying leads from email to CRM manually...)"
              className="w-full bg-[#0F1115] border-2 border-[#333] focus:border-mint-start text-off-white p-4 outline-none resize-none h-24 placeholder-gray-600 transition-colors"
              disabled={loading}
            />

            <div className="flex justify-end">
              <Button 
                onClick={handleGenerate} 
                disabled={loading || !input}
                className="flex items-center gap-2"
              >
                {loading ? <Loader2 className="animate-spin w-4 h-4" /> : <TerminalIcon className="w-4 h-4" />}
                {loading ? 'ARCHITECTING...' : 'GENERATE BLUEPRINT'}
              </Button>
            </div>
          </div>

          {/* Output Area */}
          {(output || loading) && (
            <div 
              ref={outputRef}
              className="mt-6 border-t border-dashed border-gray-700 pt-6 text-mint-start whitespace-pre-wrap leading-relaxed h-64 overflow-y-auto scrollbar-hide"
            >
              {output}
              <span className="inline-block w-2 h-4 bg-mint-start ml-1 animate-blink"></span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Terminal;