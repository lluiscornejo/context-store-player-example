import React from 'react';
import { StateProvider } from '@Player/hooks/useStateContext';
import AgilePlayer from '@Player/components/agile-player';
import { reducer, initialState } from '@Player/context/reducer';
import Controls from '@Player/components/controls';

const Player = () => (
  <StateProvider initialState={initialState} reducer={reducer}>
    <AgilePlayer />
    <Controls />
  </StateProvider>
);

export default Player;
