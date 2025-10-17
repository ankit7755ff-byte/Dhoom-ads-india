import type { User, Task, Transaction, Withdrawal } from './types';

export const USER_DATA: User = {
  id: 'SA1169327',
  name: '1',
  email: 'ankitjir990@gmail.com',
  phone: '7489674391',
  city: 'Fuf',
  walletBalance: 153800,
  directMembers: 128,
};

export const TASKS: Task[] = [
  { id: 1, name: 'Tanishq', brand: 'Tanishq' },
  { id: 2, name: 'Amazon', brand: 'Amazon' },
  { id: 3, name: 'Samsung S25', brand: 'Samsung' },
  { id: 4, name: 'Boat', brand: 'Boat' },
  { id: 5, name: 'Meesho', brand: 'Meesho' },
  { id: 6, name: 'Xiaomi', brand: 'Xiaomi' },
  { id: 7, name: 'AirPods Pro 3', brand: 'Apple' },
];

export const INCOME_HISTORY: Transaction[] = [
  { id: 1, type: 'Direct Commission', from: '1', date: '16 Oct 2025, 12:00 AM', amount: 1200.00 },
  { id: 2, type: 'Direct Commission', from: '1', date: '16 Oct 2025, 12:00 AM', amount: 1200.00 },
  { id: 3, type: 'Direct Commission', from: '1', date: '16 Oct 2025, 12:00 AM', amount: 1200.00 },
  { id: 4, type: 'Level Income', from: '2', date: '15 Oct 2025, 11:00 PM', amount: 500.00 },
  { id: 5, type: 'Task Income', from: 'Self', date: '15 Oct 2025, 08:00 PM', amount: 50.00 },
  { id: 6, type: 'Reward', from: 'Company', date: '14 Oct 2025, 06:00 PM', amount: 2500.00 },
];

export const WITHDRAWAL_HISTORY: Withdrawal[] = [
  { id: 1, amount: 5000, date: '15 Oct 2025, 10:00 AM', status: 'Approved' },
  { id: 2, amount: 12000, date: '12 Oct 2025, 02:30 PM', status: 'Approved' },
  { id: 3, amount: 7500, date: '10 Oct 2025, 09:00 AM', status: 'Pending' },
  { id: 4, amount: 2000, date: '08 Oct 2025, 07:15 PM', status: 'Approved' },
  { id: 5, amount: 3000, date: '07 Oct 2025, 05:00 PM', status: 'Rejected' },
];
