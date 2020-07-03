import * as React from 'react';
import { Screen } from './Types';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const ScreenContext = React.createContext<Screen>({
  isMobile: true,
});

interface Props {
  children: React.ReactNode;
}

export const ScreenProvider: React.FC<Props> = ({ children }: Props) => {
  const isMobile = useMediaQuery('(max-width:800px)');

  return (
        <ScreenContext.Provider value={ { isMobile } }>
            { children }
        </ScreenContext.Provider>
  );
};
