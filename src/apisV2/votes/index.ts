import axios from 'axios';

import {Vote} from 'typesV2/votes';

export async function createVote({
  accountNumber,
  choices,
  nonce,
  poll,
  signature,
}: {
  accountNumber: string;
  choices: string;
  poll: string;
  nonce: number;
  signature: string;
}) {
  const response = await axios.post<Vote[]>(`${process.env.REACT_APP_BACKEND_API}/api/v1/votes`, {
    accountNumber,
    choices,
    nonce,
    poll,
    signature,
  });

  return response.data;
}
