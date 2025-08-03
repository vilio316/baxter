// types.ts
export interface Discussion {
  id: number;
  title: string;
  author: string;
  content: string;
  upvotes: number;
  comments: number;
  isHot?: boolean;
  isAlert?: boolean;
  isNew?: boolean;
}

export interface Event {
  id: number;
  date: string;
  title: string;
  type: string;
}

export interface Trader {
  rank: number;
  name: string;
  winRate: string;
  pnl: string;
}

export interface PollOption {
  id: string;
  label: string;
  color: string;
}