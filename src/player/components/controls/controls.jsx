import React from 'react';
import { useStateValue } from '@Player/hooks/useStateContext';

const Controls = () => {
  const [, actions] = useStateValue();

  return (
    <div>
      <button type="button" onClick={actions.play}>Play</button>
      <button type="button" onClick={actions.pause}>Pause</button>
      <button type="button" onClick={actions.togglePlay}>Play/pause</button>
    </div>
  );
};

export default Controls;
