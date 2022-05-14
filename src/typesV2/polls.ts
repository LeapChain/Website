export type Poll = {
  _id: string;
  accountNumber: string;
  signature: string;
  title: string;
  description: string;
  url: string;
  choices: {title: string; _id: string}[];
  __v: number;
};
