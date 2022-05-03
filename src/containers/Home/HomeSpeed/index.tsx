import React, {FC} from 'react';

import CountUp from 'react-countup';

import {Button} from 'components';
import {URLS} from 'constants/routes';
import {useWindowDimensions} from 'hooks';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';

import GlobeImage from './Globe.png';
import * as S from './Styles';

const TRANSACTIONS_PER_SECOND = 3238;
const LATENCY = 0.015;
const COUNT_UP_DURATION = 1.5;
const COUNT_UP_DELAY = 0.3;

const HomeSpeed: FC = () => {
  const {width} = useWindowDimensions();

  return (
    <S.Container>
      <S.Title>Build on the fastest growing blockchain network</S.Title>
      <S.SubTitle>
        Transaction speeds of less than a second and ultra low fees make it accessible for anyone around the world to
        send coins to each other.
      </S.SubTitle>
      {isFeatureEnabled(Feature.LivingWhitepaper) && (
        <Button
          variant="outlined"
          onClick={() => window.open(URLS.developerPortal.whitepaper, '_blank', 'noreferrer noopener')}
        >
          Whitepaper
        </Button>
      )}
      <S.StatisticsContainer>
        <S.StatisticSection>
          <S.StatisticTitle>Speed</S.StatisticTitle>
          <S.StatisticNumber>
            <CountUp
              delay={COUNT_UP_DELAY}
              duration={COUNT_UP_DURATION}
              end={TRANSACTIONS_PER_SECOND}
              separator=","
              start={0}
              useEasing
            />
          </S.StatisticNumber>
          <S.StatisticDescription>transactions per second</S.StatisticDescription>
        </S.StatisticSection>
        <S.StatisticDivider type={width > 992 ? 'vertical' : 'horizontal'} />
        <S.StatisticSection>
          <S.StatisticTitle>Latency</S.StatisticTitle>
          <S.StatisticNumber>
            <CountUp
              decimals={3}
              delay={COUNT_UP_DELAY}
              duration={COUNT_UP_DURATION}
              end={LATENCY}
              start={5}
              useEasing
            />
          </S.StatisticNumber>
          <S.StatisticDescription>second block time</S.StatisticDescription>
        </S.StatisticSection>
        <S.StatisticDivider type={width > 992 ? 'vertical' : 'horizontal'} />
        <S.StatisticSection>
          <S.StatisticTitle>Eco-friendly</S.StatisticTitle>
          <S.StatisticTransactionDescription>
            A fast and low carbon footprint blockchain.
          </S.StatisticTransactionDescription>
        </S.StatisticSection>
      </S.StatisticsContainer>
      <S.Image alt="TNB Globe" src={GlobeImage} />
    </S.Container>
  );
};

export default HomeSpeed;
