import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-center text-white py-4">
      <p className="text-sm">
        © 2024 Copyright:{" "}
        <a
          href="https://github.com/mayforhern"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline hover:text-gray-400"
        >
          mayforhern
        </a>
      </p>
    </footer>
  );
};

export default Footer;
