export interface TicketData {
  memberId: string;
  name: string;
  avatarUrl: string;
  status: 'CHECKED-IN' | 'PENDING' | 'EXPIRED';
  facilityName: string;
  facilityAddress: string;
  date: string; // ISO Date string YYYY-MM-DD
  time: string; // 24h time string HH:mm
}