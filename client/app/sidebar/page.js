'use client'
import { useState } from "react";
import { Home, ShoppingCart, User, Settings, Menu, LogOut, Users } from "lucide-react";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <motion.div
      initial={{ width: isOpen ? 280 : 90 }}
      animate={{ width: isOpen ? 280 : 90 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white shadow-2xl flex flex-col p-5 overflow-hidden backdrop-blur-lg bg-opacity-80 border-r border-gray-700"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="mb-6 text-white flex items-center space-x-3 hover:scale-105 transition-transform"
      >
        <Menu className="w-7 h-7 text-cyan-400" />
        {isOpen && <span className="text-lg font-bold text-cyan-400">Menu</span>}
      </button>

      {/* Navigation Items */}
      <nav className="flex flex-col space-y-6">
        {navItems.map((item) => (
          <motion.a
            key={item.name}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            className="flex items-center space-x-4 p-3 rounded-lg transition bg-gray-800/50 hover:bg-cyan-600 shadow-md"
          >
            <item.icon className="w-6 h-6 text-cyan-300" />
            {isOpen && <span className="text-lg font-medium">{item.name}</span>}
          </motion.a>
        ))}
      </nav>

      {/* User Profile */}
      <div className="mt-auto relative">
        <button
          onClick={() => setShowProfileMenu(!showProfileMenu)}
          className="flex items-center space-x-4 p-3 bg-cyan-700/60 rounded-lg w-full hover:scale-105 transition-transform shadow-md"
        >
          <User className="w-6 h-6 text-white" />
          {isOpen && <span className="text-lg font-medium">Profile</span>}
        </button>
        {showProfileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute bottom-14 left-0 w-full bg-gray-800 rounded-lg shadow-lg p-2 backdrop-blur-md border border-gray-700"
          >
            <button className="flex items-center space-x-2 w-full p-3 hover:bg-gray-700 rounded-md transition">
              <Users className="w-5 h-5 text-cyan-300" />
              {isOpen && <span>Switch Account</span>}
            </button>
            <button className="flex items-center space-x-2 w-full p-3 hover:bg-gray-700 rounded-md transition">
              <Settings className="w-5 h-5 text-cyan-300" />
              {isOpen && <span>Settings</span>}
            </button>
            <button className="flex items-center space-x-2 w-full p-3 hover:bg-red-600 rounded-md transition text-red-400">
              <LogOut className="w-5 h-5" />
              {isOpen && <span>Logout</span>}
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const navItems = [
  { name: "Home", href: "#", icon: Home },
  { name: "Orders", href: "#", icon: ShoppingCart },
  { name: "Settings", href: "#", icon: Settings },
];

export default Sidebar;
