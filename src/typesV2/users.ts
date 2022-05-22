export type User = {
  _id: string;
  accountNumber: string; // signed account number with nonce
  nonce: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
};
