import React from 'react';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeToggle from '../components/ui/ThemeToggle';
import WhatsAppButton from '../components/WhatsappBtn';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function UtilitiesLayout() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        {/* Existing Utilities Navbar */}
        <Navbar />
        <ThemeToggle />
        <WhatsAppButton />

        {/* Main Content */}
        <main className="flex-grow">
          <Outlet />
        </main>

        {/* Existing Utilities Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}
