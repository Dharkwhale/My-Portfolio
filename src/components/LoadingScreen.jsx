import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Hello Recruiter />";

  useEffect(() => {
    let index = 0;
    
    // Safety check: don't start if we're somehow already finished
    const interval = setInterval(() => {
      // Use the functional update to ensure we have the latest index
      index++;
      const currentText = fullText.substring(0, index);
      setText(currentText);

      if (index >= fullText.length) {
        clearInterval(interval);
        
        // Give the user time to actually read the full text
        setTimeout(() => {
          onComplete?.(); 
        }, 1000);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]); // Removed 'mounted' to reduce complexity

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-black">
      <div className="mb-4 font-mono text-4xl font-bold text-black dark:text-white">
        {/* We use a non-breaking space or min-height to prevent layout jump */}
        <span className="min-h-[1.2em] inline-block">{text}</span>
        <span className="animate-pulse ml-1">|</span>
      </div>

      <div className="w-[200px] h-[1px] bg-gray-800 rounded relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar w-full" 
             style={{ animationDuration: '2s' }} />
      </div>
    </div>
  );
};