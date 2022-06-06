import axios from 'axios';

import {Poll} from 'typesV2/polls';

export async function getPolls(): Promise<Poll[]> {
  const response = await axios.get<Poll[]>(`${process.env.REACT_APP_BACKEND_API}/api/v1/polls`);

  return response.data;
}

export async function getPollbyID(id: string): Promise<Poll[]> {
  const response = await axios.get<Poll[]>(`${process.env.REACT_APP_BACKEND_API}/api/v1/polls/${id}`);

  return response.data;
}
