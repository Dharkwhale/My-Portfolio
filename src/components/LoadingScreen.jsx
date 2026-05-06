import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const onCompleteRef = useRef(onComplete);
  onCompleteRef.current = onComplete;

  const fullText = "<Hello Recruiter />";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index++;
      setText(fullText.substring(0, index));
      if (index >= fullText.length) {
        clearInterval(interval);
        // wait for the user to read, then signal the parent to unmount
        setTimeout(() => onCompleteRef.current?.(), 1000);
      }
    }, 75);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0a0a0a]"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-8 font-mono text-3xl md:text-5xl font-bold"
      >
        <span className="gradient-text">{text}</span>
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="text-blue-400 ml-1"
        >
          |
        </motion.span>
      </motion.div>

      <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 animate-loading-bar rounded-full" />
      </div>
    </motion.div>
  );
};
