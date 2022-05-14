import React, {FC, ReactNode} from 'react';
import {Icon, IconType} from '@leapchain/ui';

import {ROUTES, URLS} from 'constants/routes';
import {isFeatureEnabled, Feature} from 'utils/featureToggle';

import * as S from './Styles';

interface ComponentProps {
  closeMenu(): void;
  menuOpen: boolean;
  toggleMenu(): void;
}

const TopNavMobileMenu: FC<ComponentProps> = ({closeMenu, menuOpen, toggleMenu}) => {
  const renderMenu = (): ReactNode => {
    return (
      <>
        <S.DropdownContainer>
          <S.ButtonsContainer>
            {renderMobileLink('Discord', URLS.discord, true)}
            {isFeatureEnabled(Feature.Polls) && renderMobileLink('Polls', ROUTES.polls)}
            {isFeatureEnabled(Feature.ConnectWallet) && (
              <S.DownloadButton
                onClick={() => {
                  // TODO:
                }}
              >
                Connect Wallet
              </S.DownloadButton>
            )}
          </S.ButtonsContainer>
        </S.DropdownContainer>
        <S.Overlay onClick={closeMenu} role="button" tabIndex={0} />
      </>
    );
  };

  const renderMobileLink = (label: string, to: string, isExternal?: boolean, newWindow = false): ReactNode => {
    if (isExternal) {
      return (
        <S.ExternalLink href={to} showNewWindowIcon={false} newWindow={newWindow}>
          {label}
        </S.ExternalLink>
      );
    }
    return <S.InternalLink to={to}>{label}</S.InternalLink>;
  };

  return (
    <S.Container>
      <S.MenuButton onClick={toggleMenu}>
        <Icon icon={IconType.menu} size={24} />
      </S.MenuButton>
      {menuOpen && renderMenu()}
    </S.Container>
  );
};

export default TopNavMobileMenu;
