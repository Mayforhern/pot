import { FiSend } from "react-icons/fi";
import Link from "next/link";

const NeumorphismButton = () => {
  return (
    <Link href="https://t.me/the_axisos" target="_blank" rel="noopener noreferrer">
      <button
        className={`
          px-6 py-3 rounded-full 
          flex items-center gap-3 
          text-slate-700 text-lg font-semibold
          shadow-[-7px_-7px_14px_rgba(255,_255,_255,_0.9),_7px_7px_14px_rgba(0,_0,_0,_0.25)]
          
          transition-all transform hover:scale-105

          hover:shadow-[-2px_-2px_8px_rgba(255,_255,_255,_0.7),_2px_2px_8px_rgba(0,_0,_0,_0.3),inset_-3px_-3px_8px_rgba(255,_255,_255,_1),inset_3px_3px_6px_rgba(0,_0,_0,_0.3)]
          hover:text-white
        `}
        style={{ transition: 'color 0.3s, background-color 0.3s' }}
      >
        <FiSend size={24} /> {/* Increased icon size */}
        <span>Join</span>
      </button>
    </Link>
  );
};

export default NeumorphismButton;
