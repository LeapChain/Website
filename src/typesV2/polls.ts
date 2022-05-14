export enum PollStatus {
  InProgress = 0,
  Completed = 1,
  Cancelled = 2,
}

export type Poll = {
  _id: string;
  accountNumber: string;
  signature: string;
  title: string;
  description: string;
  url: string;
  choices: {title: string; _id: string; totalVotes: number}[];
  __v: number;
  createdAt: string;
  updatedAt: string;
  status: PollStatus;
  voteWeightage: number;
};
