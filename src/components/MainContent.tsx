import { X } from 'lucide-react';
import Inspector from './Inspector';
import Canvas from './Canvas';

export default function MainContent() {
  return (
    <div className="flex-1 flex flex-col">
      <div className="h-[65px] border-b border-gemini-border-gray flex items-center px-6">
        <X className="text-gray-600" />
        <h1 className="text-2xl font-bold text-black ml-4">Why Do We Code</h1>
      </div>
      <div className="flex-1 flex">
        <Inspector />
        <Canvas />
      </div>
    </div>
  );
}
