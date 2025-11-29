import React, { useRef } from 'react';
import { TicketData } from '../types';
import { formatDate, formatTime } from '../utils';

interface TicketCardProps {
  data: TicketData;
  onDateChange: (newDate: string) => void;
  onTimeChange: (newTime: string) => void;
  onAvatarChange: (file: File) => void;
}

const TicketCard: React.FC<TicketCardProps> = ({ data, onDateChange, onTimeChange, onAvatarChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleAvatarClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      onAvatarChange(file);
    }
  };

  return (
    <div className="relative w-full max-w-[360px] mx-auto mt-24">
      
      {/* Visual Hack: Top Scoop Mask
          Since we can't easily do a concave border-radius with standard CSS, 
          we place a circle of the background color behind the avatar to "cut" into the card. 
      */}
      <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-32 h-32 bg-slate-50 rounded-full z-10"></div>

      {/* Avatar */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 z-20">
        <div 
          className="relative w-28 h-28 rounded-full p-1 bg-slate-50 cursor-pointer transition-transform active:scale-95 group"
          onClick={handleAvatarClick}
          title="Click to change photo"
        >
           <img 
            src={data.avatarUrl} 
            alt={data.name} 
            className="w-full h-full rounded-full object-cover group-hover:opacity-90 transition-opacity"
          />
          <input 
            type="file" 
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      </div>

      {/* Main Card Body */}
      {/* Using a gradient that mimics the provided image: Lighter slate-teal top to deep dark blue bottom */}
      <div className="bg-gradient-to-b from-[#507d98] to-[#123652] rounded-3xl overflow-hidden shadow-2xl text-white pt-20 pb-10 px-6 relative z-0">
        
        {/* Top Section */}
        <div className="flex justify-between items-start mb-6">
          <div className="flex flex-col">
            <span className="text-xs font-medium text-blue-100/70 uppercase tracking-wide mb-1">Member</span>
            <h2 className="text-lg font-bold leading-tight">{data.name}</h2>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-xs font-medium text-blue-100/70 uppercase tracking-wide mb-1">Status</span>
            <span className={`bg-[#2ebfa5] text-[#0f4d42] text-xs font-bold px-2 py-0.5 rounded shadow-sm ${data.status === 'CHECKED-IN' ? 'animate-status-blink' : ''}`}>
              {data.status}
            </span>
          </div>
        </div>

        {/* Date & Time Row (Editable) */}
        <div className="flex justify-between items-start mb-8">
          {/* Date Input */}
          <div className="flex flex-col relative group">
            <label className="text-xs font-medium text-blue-100/70 uppercase tracking-wide mb-1">Date</label>
            <div className="relative">
                {/* The visual text */}
                <span className="text-xl font-bold">{formatDate(data.date)}</span>
                {/* The invisible trigger input */}
                <input 
                    type="date" 
                    value={data.date}
                    onChange={(e) => onDateChange(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                />
                {/* Edit hint indicator on hover */}
                <div className="absolute -right-3 top-0 w-2 h-2 bg-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
          </div>

          {/* Time Input */}
          <div className="flex flex-col items-end relative group">
            <label className="text-xs font-medium text-blue-100/70 uppercase tracking-wide mb-1">Time</label>
             <div className="relative">
                <span className="text-xl font-bold">{formatTime(data.time)}</span>
                <input 
                    type="time" 
                    value={data.time}
                    onChange={(e) => onTimeChange(e.target.value)}
                    className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
                />
             </div>
          </div>
        </div>

        {/* Dashed Separator */}
        <div className="relative w-full h-px border-t-2 border-dashed border-white/20 mb-6"></div>

        {/* Facility Info */}
        <div className="flex flex-col">
          <span className="text-xs font-medium text-blue-100/70 uppercase tracking-wide mb-1">Facility</span>
          <h3 className="text-lg font-bold mb-1">{data.facilityName}</h3>
          <p className="text-sm text-blue-100/80 font-normal">{data.facilityAddress}</p>
        </div>

      </div>

      {/* Bottom Notch */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-slate-50 rounded-full z-10 shadow-inner-custom"></div>
    </div>
  );
};

export default TicketCard;