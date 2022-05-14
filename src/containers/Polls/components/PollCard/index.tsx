import React from 'react';

import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import {Poll} from 'typesV2/polls';
import PollDurationAndVotes from '../PollDurationAndVotes';

import * as S from './Styles';

type Props = {
  className?: string;
  onClick: () => void;
  poll: Poll;
};

export default function PollCard({className, poll, onClick}: Props) {
  return (
    <S.Container className={className} onClick={onClick}>
      <S.Title>{poll.title}</S.Title>
      <PollDurationAndVotes duration={`${formatDistanceToNow(parseISO(poll.createdAt))} ago`} numVotes={12} />
    </S.Container>
  );
}
