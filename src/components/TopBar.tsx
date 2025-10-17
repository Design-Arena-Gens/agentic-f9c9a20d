import { ChevronDown, Cog } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-gemini-blue text-white h-[55px] flex items-center justify-between px-6">
      <div className="flex items-center">
        <div>
          <div className="flex items-center">
            <span className="font-medium">AI Generated Version</span>
            <ChevronDown className="w-4 h-4 ml-1" />
          </div>
          <div className="text-xs text-white/80">Changes saved</div>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <Cog className="w-6 h-6" />
        <button className="bg-white text-black px-4 py-1.5 rounded text-sm border border-gemini-preview-border">
          Preview
        </button>
        <button className="bg-gemini-dark-gray text-white px-4 py-1.5 rounded text-sm">
          Save
        </button>
      </div>
    </div>
  );
}
