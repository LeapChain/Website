import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {getPolls} from 'apisV2/polls';
import {Loader} from 'components';
import {Poll} from 'typesV2/polls';

import PollDetails from './PollDetails';
import PollList from './PollList';

import * as S from './Styles';

export default function Polls() {
  const {pollId} = useParams<{pollId: string}>();
  const [polls, setPolls] = useState<Poll[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    async function initPolls() {
      setIsLoading(true);
      const polls = await getPolls();
      setPolls(polls);
      setIsLoading(false);
    }

    initPolls();
  }, []);

  if (isLoading) {
    return (
      <S.LoadingContainer>
        <Loader />
      </S.LoadingContainer>
    );
  }

  if (pollId) {
    const poll = polls.find((poll) => poll._id === pollId);
    return <PollDetails poll={poll} />;
  }

  return <PollList polls={polls} />;
}
