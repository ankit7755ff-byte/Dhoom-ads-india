export type Page = 'Home' | 'Tasks' | 'Team' | 'Income' | 'Withdrawal' | 'Profile';

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  walletBalance: number;
  directMembers: number;
}

export interface Task {
  id: number;
  name: string;
  brand: string;
}

export interface Transaction {
  id: number;
  type: 'Direct Commission' | 'Level Income' | 'Reward' | 'Task Income';
  from: string;
  date: string;
  amount: number;
}

export interface Withdrawal {
  id: number;
  amount: number;
  date: string;
  status: 'Approved' | 'Pending' | 'Rejected';
}
