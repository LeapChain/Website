import React from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTES} from 'constants/routes';
import {Poll} from 'typesV2/polls';

import * as S from './Styles';

type Props = {
  polls: Poll[];
};

export default function PollDetails({polls}: Props) {
  const history = useHistory();
  return (
    <S.Container>
      <S.Title>Active Polls</S.Title>
      {polls.map((poll) => (
        <S.PollCard key={poll._id} poll={poll} onClick={() => history.push(`${ROUTES.polls}/${poll._id}`)} />
      ))}
    </S.Container>
  );
}
