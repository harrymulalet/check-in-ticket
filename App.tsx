import React, { useState } from 'react';
import Header from './components/Header';
import TicketCard from './components/TicketCard';
import { TicketData } from './types';

// Mock Data
const INITIAL_DATA: TicketData = {
  memberId: "12345",
  name: "Harry Feleke Mulalet",
  avatarUrl: "https://picsum.photos/id/91/400/400",
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
    const objectUrl = URL.createObjectURL(file);
    setTicketData(prev => ({ ...prev, avatarUrl: objectUrl }));
  };

  // --- New Handlers ---
  const updateName = (name: string) => {
    setTicketData(prev => ({ ...prev, name }));
  };

  const updateFacilityName = (facilityName: string) => {
    setTicketData(prev => ({ ...prev, facilityName }));
  };

  const updateFacilityAddress = (facilityAddress: string) => {
    setTicketData(prev => ({ ...prev, facilityAddress }));
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
          // Passing new handlers
          onNameChange={updateName}
          onFacilityNameChange={updateFacilityName}
          onFacilityAddressChange={updateFacilityAddress}
        />
      </main>
    </div>
  );
};

export default App;
