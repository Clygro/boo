import styled, { css } from 'styled-components';

import { robotoRegular } from '~/renderer/mixins';
import { ITheme } from '~/interfaces';
import { DialogStyle } from '~/renderer/mixins/dialogs';

interface AppProps {
  theme?: ITheme;
  visible: boolean;
}
export const StyledApp = styled(DialogStyle)<AppProps>`
  padding: 20px;

  & .textfield,
  .dropdown {
    width: 255px;
    margin-left: auto;
  }

  ${({ theme }) => css`
    color: ${theme['dialog.lightForeground'] ? '#fff' : '#000'};
  `}
`;

export const Subtitle = styled.div`
  font-size: 13px;
  opacity: 0.54;
  margin-top: 8px;
`;

export const Title = styled.div`
  font-size: 16px;
  margin-bottom: 16px;
  font-weight: bold;
`;

export const Row = styled.div`
  width: 100%;
  height: 48px;
  align-items: center;
  display: flex;
`;

export const Label = styled.div`
  font-size: 12px;
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 16px;
  & .button:not(:last-child) {
    margin-right: 8px;
  }
`;
