import React from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTES} from 'constants/routes';
import {Poll} from 'typesV2/polls';

import PollDurationAndVotes from '../components/PollDurationAndVotes';

import * as S from './Styles';

type Props = {
  poll?: Poll;
};

export default function PollDetails({poll}: Props) {
  const history = useHistory();
  return (
    <S.Container>
      <S.BackToPrevious onClick={() => history.push(ROUTES.polls)}>{'<'} Back to Polls</S.BackToPrevious>
      <S.PollContainer>
        {poll ? (
          <>
            <S.PollTitle>{poll.title}</S.PollTitle>
            <S.PollDescription>{poll.description}</S.PollDescription>
            {poll.choices.map((choice) => (
              <S.PollChoice
                key={choice._id}
                onClick={() => {
                  // TODO: add handling for poll choice accordingly
                }}
              >
                {choice.title}
              </S.PollChoice>
            ))}
            {/* TODO: add accordingly when ready */}
            <PollDurationAndVotes duration="1 hours ago" numVotes={12} />
          </>
        ) : (
          <>Invalid Poll.</>
        )}
      </S.PollContainer>
    </S.Container>
  );
}
