import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex flex-col gap-4 p-8">
        <h4 className="text-xl mb-4">Legal</h4>
        <a href="#" className="text-gray-300">
          Terms of Service
        </a>
        <a href="#" className="text-gray-300">
          Privacy Policy
        </a>
      </div>
      <div className="p-8">
        <p className="text-gray-500 text-sm">© 2022 Delivery Log</p>
      </div>
    </div>
  );
};

export default Footer;
