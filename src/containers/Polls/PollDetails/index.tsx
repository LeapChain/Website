import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTES} from 'constants/routes';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import parseISO from 'date-fns/parseISO';
import {Poll} from 'typesV2/polls';
import {requestKeysignVerify} from 'utils/keysign';
import {createUser} from 'apisV2/auth/index';
import {createVote} from 'apisV2/votes/index';

import PollDurationAndVotes from '../components/PollDurationAndVotes';

import * as S from './Styles';

type Props = {
  poll?: Poll;
};

export default function PollDetails({poll}: Props) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const history = useHistory();

  const requestSignatureForVote = async (accountNumber: string, choices: string, poll: string) => {
    setIsLoading(true);
    const user = await createUser({accountNumber});
    const userNonce = user.nonce;

    // TODO: Handle the errors accordingly

    const message = {
      choices,
      poll,
      userNonce,
    };

    const stringifiedMessage = JSON.stringify(message);

    requestKeysignVerify({
      accountNumber,
      code: stringifiedMessage,
      onFailure: () => console.log('verify failure'), // TODO: handle accordingly
      onSuccess: async (signature) => {
        const vote = await createVote({accountNumber, choices, nonce: userNonce, poll, signature});
        console.log(vote);
      },
    });

    console.log(accountNumber, choices, poll, user);
    setIsLoading(false);
  };

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
                onClick={() =>
                  requestSignatureForVote(
                    // TODO: use cookie to get the user account number
                    '51c5ab67823a00e5c6b7690e0d3ea390df21bc5381dee56f1d2a73650b2008f7',
                    choice._id,
                    poll._id,
                  )
                }
              >
                {choice.title}
              </S.PollChoice>
            ))}
            <PollDurationAndVotes
              duration={`${formatDistanceToNow(parseISO(poll.createdAt))} ago`}
              numVotes={poll.voteWeightage || 0}
            />
          </>
        ) : (
          <>Invalid Poll.</>
        )}
      </S.PollContainer>
    </S.Container>
  );
}
