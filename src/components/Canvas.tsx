import { Grip, Trash2, Plus } from 'lucide-react';

export default function Canvas() {
  return (
    <div className="flex-1 bg-white p-8">
      <div className="w-full max-w-2xl mx-auto">
        <h2 className="text-xl font-semibold text-black mb-6">
          Why Do We Code
        </h2>
        <div className="space-y-4">
          <CanvasCard
            title="Introduction to the course"
            type="Video"
            duration="5 min"
          />
          <CanvasCard
            title="What is code?"
            type="Reading"
            duration="10 min"
          />
        </div>
      </div>
    </div>
  );
}

function CanvasCard({ title, type, duration }: { title: string; type: string; duration: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 flex items-center shadow-sm">
      <Grip className="text-gray-400 cursor-move" />
      <div className="flex-grow ml-4">
        <div className="text-sm text-gray-500">{type}</div>
        <div className="text-base font-medium text-black">{title}</div>
      </div>
      <div className="text-sm text-gray-500 mr-4">{duration}</div>
      <div className="flex items-center space-x-2">
        <button className="p-1.5 text-gray-500 hover:text-black">
          <Trash2 size={16} />
        </button>
        <button className="p-1.5 text-gray-500 hover:text-black">
          <Plus size={16} />
        </button>
      </div>
    </div>
  );
}
