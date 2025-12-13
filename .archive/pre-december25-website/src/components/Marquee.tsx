import React from 'react';
import { 
  Database, Zap, Slack, Table, Box, Mail, MessageSquare, 
  Workflow, Layers, Command, Cpu, Globe
} from 'lucide-react';

const TOOLS = [
  { name: 'Make', icon: <Zap className="text-purple-500" /> },
  { name: 'Zapier', icon: <Workflow className="text-orange-500" /> }, // Kept original brand colors for tools
  { name: 'Airtable', icon: <Table className="text-blue-400" /> },
  { name: 'HubSpot', icon: <Box className="text-orange-600" /> },
  { name: 'Slack', icon: <Slack className="text-pink-500" /> },
  { name: 'Notion', icon: <Database className="text-gray-200" /> },
  { name: 'OpenAI', icon: <Cpu className="text-green-400" /> },
  { name: 'n8n', icon: <Layers className="text-red-500" /> },
  { name: 'Vapi', icon: <MessageSquare className="text-blue-300" /> },
  { name: 'Gmail', icon: <Mail className="text-red-400" /> },
  { name: 'Webflow', icon: <Globe className="text-blue-500" /> },
  { name: 'ClickUp', icon: <Command className="text-purple-400" /> },
];

export const Marquee: React.FC = () => {
  return (
    <div className="w-full bg-surface/30 border-y border-primary/20 shadow-[0_0_20px_rgba(45,212,191,0.1)] py-6 overflow-hidden relative backdrop-blur-sm z-20">
      {/* Gradient Masks */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="flex w-fit animate-marquee">
        {/* First Loop */}
        <div className="flex items-center space-x-20 mx-10">
          {TOOLS.map((tool, idx) => (
            <div key={`tool-1-${idx}`} className="flex items-center space-x-3 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
              <span className="transform transition-transform group-hover:scale-110 filter grayscale group-hover:grayscale-0 duration-300">{tool.icon}</span>
              <span className="text-xl font-medium text-gray-500 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
        
        {/* Second Loop (Duplicate for seamless scroll) */}
        <div className="flex items-center space-x-20 mx-10">
          {TOOLS.map((tool, idx) => (
            <div key={`tool-2-${idx}`} className="flex items-center space-x-3 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
              <span className="transform transition-transform group-hover:scale-110 filter grayscale group-hover:grayscale-0 duration-300">{tool.icon}</span>
              <span className="text-xl font-medium text-gray-500 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>

          {/* Third Loop (Extra buffer) */}
         <div className="flex items-center space-x-20 mx-10">
          {TOOLS.map((tool, idx) => (
            <div key={`tool-3-${idx}`} className="flex items-center space-x-3 group cursor-default opacity-50 hover:opacity-100 transition-opacity duration-300">
              <span className="transform transition-transform group-hover:scale-110 filter grayscale group-hover:grayscale-0 duration-300">{tool.icon}</span>
              <span className="text-xl font-medium text-gray-500 group-hover:text-white transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};