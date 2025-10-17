import { Copy, Diamond } from 'lucide-react';

export default function Inspector() {
  return (
    <div className="w-80 bg-gemini-inspector-bg p-4 space-y-4">
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Learning Path</h3>
          <Copy size={16} className="text-gray-500" />
        </div>
        <div className="mt-4 space-y-2">
          <div>
            <div className="text-xs text-gray-500">Course</div>
            <div className="text-sm text-black">Coding Fundamentals</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Module</div>
            <div className="text-sm text-black">Coding Fundamentals</div>
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Learning Objectives</h3>
          <span className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
            1
          </span>
        </div>
        <div className="mt-4">
          <p className="text-sm text-gray-800">
            Understand the motivations for...
          </p>
          <div className="flex items-center text-xs text-gray-500 mt-2">
            <Diamond size={12} className="text-blue-500 mr-1.5" />
            Bloom 1 (Knowledge)
          </div>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center">
          <h3 className="font-bold text-gray-800">Learning Experiences</h3>
          <button className="text-sm bg-gray-200 text-gray-700 px-2 py-1 rounded">
            New +
          </button>
        </div>
      </div>
    </div>
  );
}
