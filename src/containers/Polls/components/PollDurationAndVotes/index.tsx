import React from 'react';

import * as S from './Styles';

type Props = {
  duration: string;
  numVotes: number;
};

const Ellipsis = () => {
  return (
    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="2" cy="2" r="2" fill="#C4C4C4" />
    </svg>
  );
};

export default function PollDurationAndVotes({duration, numVotes}: Props) {
  return (
    <S.Container>
      {duration} <Ellipsis /> {numVotes} votes
    </S.Container>
  );
}
