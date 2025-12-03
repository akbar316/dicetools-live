
import React from 'react';
import { TOOLS_REGISTRY } from '@/components/tools/tools-registry';
import ToolCard from '@/components/tools/ToolCard';

const ToolsPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tools</h1>
      <div>
        {Object.entries(TOOLS_REGISTRY).map(([category, tools]) => (
          <div key={category} className="mb-8">
            <h2 className="text-xl font-bold mb-4">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {tools.map((tool) => (
                <ToolCard key={tool.name} {...tool} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsPage;
