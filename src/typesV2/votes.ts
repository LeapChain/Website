export type Vote = {
  _id: string;
  accountNumber: string; // signed account number with nonce
  choices: string;
  poll: string;
  nonce: number;
  signature: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
