import React, { useState } from 'react';
import Header from './components/Header';
import TicketCard from './components/TicketCard';
import { TicketData } from './types';

// Mock Data
const INITIAL_DATA: TicketData = {
  memberId: "12345",
  name: "Harry Feleke Mulalet",
  avatarUrl: "https://picsum.photos/id/91/400/400", // Using a specific person-like image
  status: "CHECKED-IN",
  facilityName: "Bäderland Billebad Hamburg",
  facilityAddress: "Reetwerder 25, 21029 Hamburg",
  date: "2025-08-22",
  time: "20:01"
};

const App: React.FC = () => {
  const [ticketData, setTicketData] = useState<TicketData>(INITIAL_DATA);

  const handleBack = () => {
    console.log("Navigating back...");
    // In a real app, this would use router history
  };

  const updateDate = (newDate: string) => {
    if (!newDate) return;
    setTicketData(prev => ({ ...prev, date: newDate }));
  };

  const updateTime = (newTime: string) => {
    if (!newTime) return;
    setTicketData(prev => ({ ...prev, time: newTime }));
  };

  const updateAvatar = (file: File) => {
    if (!file) return;
    // Create a local URL for the selected file
    const objectUrl = URL.createObjectURL(file);
    setTicketData(prev => ({ ...prev, avatarUrl: objectUrl }));
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-12">
      <Header title="Check-in Ticket" onBack={handleBack} />
      
      <main className="container mx-auto px-4 pt-6">
        <TicketCard 
          data={ticketData}
          onDateChange={updateDate}
          onTimeChange={updateTime}
          onAvatarChange={updateAvatar}
        />
      </main>
    </div>
  );
};

export default App;