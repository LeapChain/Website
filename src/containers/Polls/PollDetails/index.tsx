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
    const {nonce} = user;

    // TODO: Handle the errors accordingly

    const message = {
      choices,
      nonce,
      poll,
    };

    const stringifiedMessage = JSON.stringify(message);

    requestKeysignVerify({
      accountNumber: '', // TODO: use the account number passed in the function once keysign is working
      code: stringifiedMessage,
      onFailure: () => console.log('verify failure'), // TODO: handle accordingly
      onSuccess: async (signature) => {
        const vote = await createVote({accountNumber, choices, nonce, poll, signature});
        console.log(vote);
        // TODO: handle the success and failure scenerios accordingly
      },
    });
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
                    '4d6f93dd06f38ccc16a84fb9c988122473c3ce5a029e2b15faac508b944d0950',
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
