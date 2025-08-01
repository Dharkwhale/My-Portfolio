import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [show, setShow] = useState(true);
  const [mounted, setMounted] = useState(false);
  const fullText = "<Hello Recruiter />";

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let index = 0;

    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));

      if (index === fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setShow(false);
          onComplete?.(); // safely call if defined
        }, 1500);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [mounted, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed flex flex-col justify-center items-center z-50 inset-0 bg-white dark:bg-black">
      <div className="mb-4 text-4xl font-mono font-bold text-black dark:text-white">
        {text}
        <span className="animate-blink mb-1">|</span>
      </div>

      <div className="w-[200px] h-[2px] bg-gray-800 rounded relative overflow-hidden">
        <div className="w-[40%] h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] animate-loading-bar" />
      </div>
    </div>
  );
};
