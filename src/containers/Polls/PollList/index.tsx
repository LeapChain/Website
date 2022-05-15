import React, {useMemo, useState} from 'react';
import {useHistory} from 'react-router-dom';

import {ROUTES} from 'constants/routes';
import {Poll, PollStatus} from 'typesV2/polls';

import * as S from './Styles';

type Props = {
  polls: Poll[];
};

export default function PollList({polls}: Props) {
  const [isShowCompletedPolls, setIsShowCompletedPolls] = useState(false);
  const history = useHistory();

  const activePolls = useMemo(() => {
    return polls.filter((poll) => poll.status === PollStatus.InProgress);
  }, [polls]);

  const completedPolls = useMemo(() => {
    return polls.filter((poll) => poll.status === PollStatus.Completed);
  }, [polls]);

  return (
    <S.Container>
      <S.Title>Active Polls</S.Title>
      {activePolls.map((poll) => (
        <S.PollCard key={poll._id} poll={poll} onClick={() => history.push(`${ROUTES.polls}/${poll._id}`)} />
      ))}
      {completedPolls.length > 0 && (
        <>
          <S.ViewMorePollsContainer onClick={() => setIsShowCompletedPolls((isShow) => !isShow)}>
            {isShowCompletedPolls ? 'Hide' : 'View'} Ended Polls ({completedPolls.length})
          </S.ViewMorePollsContainer>
          {isShowCompletedPolls &&
            completedPolls.map((poll) => {
              return (
                <S.PollCard key={poll._id} poll={poll} onClick={() => history.push(`${ROUTES.polls}/${poll._id}`)} />
              );
            })}
        </>
      )}
    </S.Container>
  );
}
