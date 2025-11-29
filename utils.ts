export const formatDate = (isoDate: string): string => {
  if (!isoDate) return '';
  const date = new Date(isoDate);
  // Format: M/d/yy (e.g. 8/22/25)
  const month = date.getMonth() + 1;
  const day = date.getDate(); // Uses local time, which is usually what user expects for input[type="date"]
  const year = date.getFullYear().toString().slice(-2);
  return `${month}/${day}/${year}`;
};

export const formatTime = (timeStr: string): string => {
  if (!timeStr) return '';
  const [hours, minutes] = timeStr.split(':').map(Number);
  const ampm = hours >= 12 ? 'PM' : 'AM';
  const hours12 = hours % 12 || 12;
  return `${hours12}:${minutes.toString().padStart(2, '0')} ${ampm}`;
};